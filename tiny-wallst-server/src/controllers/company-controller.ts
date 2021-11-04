import * as dayjs from "dayjs";
import { Context } from "koa";
import { getRepository } from "typeorm";
import { SwsCompany } from "../entities/SwsCompany";
import { LAST_DATE_IN_DB } from "./../constants";

interface CompanyWithPriceAndScore extends SwsCompany {
  last_known_price: number;
  max_price_fluctuation: number;
}

export async function getAllCompaniesWithPriceAndScore(
  context: Context
): Promise<CompanyWithPriceAndScore[]> {
  const LAST_DATE = dayjs(LAST_DATE_IN_DB).format("YYYY-MM-DD");
  const LAST_90_DAYS_DATE = dayjs(LAST_DATE_IN_DB)
    .subtract(90, "day")
    .format("YYYY-MM-DD");

  const allCompaniesWithAllPriceCloses = await getRepository(SwsCompany)
    .createQueryBuilder("swsCompany")
    .leftJoinAndSelect("swsCompany.score", "score")
    .leftJoinAndSelect("swsCompany.priceCloses", "priceCloses")
    .where("priceCloses.date <= :last_date", { last_date: LAST_DATE })
    .andWhere("priceCloses.date > :last_90_days_date", {
      last_90_days_date: LAST_90_DAYS_DATE,
    })
    .orderBy("priceCloses.date", "DESC")
    .getMany();

  const allCompaniesWithPriceAndScore = allCompaniesWithAllPriceCloses.map(
    (company) => {
      const priceCloses = company.priceCloses;
      const lastKnownPrice = priceCloses[0].price;
      const maxPrice = priceCloses.reduce((pc1, pc2) =>
        pc1.price > pc2.price ? pc1 : pc2
      ).price;
      const minPrice = priceCloses.reduce((pc1, pc2) =>
        pc1.price < pc2.price ? pc1 : pc2
      ).price;
      const maxPriceFluctuation = maxPrice - minPrice;
      delete company.priceCloses;
      return {
        ...company,
        last_known_price: lastKnownPrice,
        max_price_fluctuation: maxPriceFluctuation,
      };
    }
  );

  return (context.body = allCompaniesWithPriceAndScore);
}
