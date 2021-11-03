import { Context } from "koa";
import { getManager } from "typeorm";
import { SwsCompany } from "./../entities/SwsCompany";

export async function getAllCompanies(context: Context) {
  const companyRepository = getManager().getRepository(SwsCompany);
  const allCompanies = await companyRepository.find({});
  context.body = allCompanies;
}