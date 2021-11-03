import { Context } from "koa";
import { getRepository } from "typeorm";
import { SwsCompany } from "./../entities/SwsCompany";

export async function getAllCompanies(context: Context): Promise<SwsCompany[]> {
  const companyRepository = getRepository(SwsCompany);
  const allCompanies = await companyRepository.find({});
  return (context.body = allCompanies);
}
