import { getRepository } from "typeorm";
import { SwsCompany } from "../entities/SwsCompany";
import { getDate, getDate90DaysBefore } from "../utils/date";
import { LAST_DATE_IN_DB } from "./../constants";

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
