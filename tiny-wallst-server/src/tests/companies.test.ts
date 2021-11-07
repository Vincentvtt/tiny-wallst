import * as request from "supertest";
import { createConnection, getConnection } from "typeorm";
import app from "../app";
import { getAllCompaniesWithPriceClosesAndScore } from "../services/company-service";
import * as companies from "./data/companies-data";

describe("/companies route", () => {
  beforeAll(async () => {
    await createConnection();
  });

  afterAll(async () => {
    await getConnection().close();
  });

  test("getAllCompaniesWithPriceClosesAndScore should return all companies with price closes and score", async () => {
    const companies = await getAllCompaniesWithPriceClosesAndScore();
    expect(companies[0].priceCloses).toBeDefined;
    expect(companies[0].score).toBeDefined;
  });

  test("GET /companies should return all companies with price and volatility successfully", async () => {
    const response = await request(app.callback()).get("/companies");
    expect(response.status).toBe(200);
    expect(response.body[0].volatility).toBeDefined;
    expect(response.body[0].last_known_price).toBeDefined;
    expect(response.body).toEqual(companies.companiesWithPriceAndVolatility);
    expect(response.body).toMatchSnapshot();
  });
});
