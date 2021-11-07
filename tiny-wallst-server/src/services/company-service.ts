import { getRepository } from "typeorm";
import { SwsCompany } from "../entities/SwsCompany";
import { getDate, getDate90DaysBefore } from "../utils/date";
import { getVolatility } from "../utils/volatility";
import { LAST_DATE_IN_DB } from "./../constants";

export interface CompanyWithPriceAndVolatility extends SwsCompany {
  last_known_price: number;
  volatility: number;
}

export async function getAllCompaniesWithPriceClosesAndScore(): Promise<SwsCompany[]> {
  const LAST_DATE = getDate(LAST_DATE_IN_DB);
  const LAST_90_DAYS_DATE = getDate90DaysBefore(LAST_DATE_IN_DB);

  return await getRepository(SwsCompany)
    .createQueryBuilder("swsCompany")
    .leftJoinAndSelect("swsCompany.score", "score")
    .leftJoinAndSelect("swsCompany.priceCloses", "priceCloses")
    .where("priceCloses.date <= :last_date", { last_date: LAST_DATE })
    .andWhere("priceCloses.date > :last_90_days_date", {
      last_90_days_date: LAST_90_DAYS_DATE,
    })
    .orderBy("priceCloses.date", "DESC")
    .getMany();
}

export async function getAllCompaniesWithPriceAndVolatility(): Promise<CompanyWithPriceAndVolatility[]> {
  const allCompaniesWithAllPriceClosesAndScore: SwsCompany[] = await getAllCompaniesWithPriceClosesAndScore();

  return allCompaniesWithAllPriceClosesAndScore.map((company) => {
    const priceCloses = company.priceCloses;
    const lastKnownPrice = priceCloses[0].price;
    const prices = priceCloses.map((pc) => pc.price);
    const volatility = getVolatility(prices);
    delete company.priceCloses;
    return {
      ...company,
      last_known_price: lastKnownPrice,
      volatility: volatility,
    };
  });
}
