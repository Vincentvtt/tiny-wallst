import { Context } from "koa";
import { SwsCompany } from "../entities/SwsCompany";
import { getAllCompaniesWithPriceClosesAndScore } from "../services/company-service";
import { getVolatility } from "../utils/volatility";

interface CompanyWithPriceAndVolatility extends SwsCompany {
  last_known_price: number;
  volatility: number;
}

export async function getAllCompaniesWithPriceAndVolatility(
  context: Context
): Promise<CompanyWithPriceAndVolatility[]> {
  const allCompaniesWithAllPriceClosesAndScore: SwsCompany[] =
    await getAllCompaniesWithPriceClosesAndScore();

  const allCompaniesWithPriceAndVolatility: CompanyWithPriceAndVolatility[] =
    allCompaniesWithAllPriceClosesAndScore.map((company) => {
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

  return (context.body = allCompaniesWithPriceAndVolatility);
}
