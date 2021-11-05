import * as request from "supertest";
import { createConnection, getConnection } from "typeorm";
import app from "../app";

describe("/companies route", () => {
  beforeAll(async () => {
    await createConnection();
  });

  afterAll(async () => {
    await getConnection().close();
  });

  test("GET /companies should return all companies successfully with last price, volatility and scores added to it", async () => {
    const response = await request(app.callback()).get("/companies");
    expect(response.status).toBe(200);
    expect(response.body[0].name).toBeDefined();
    expect(response.body[0].max_price_fluctuation).toBeDefined();
    expect(response.body[0].score).toBeDefined();
    expect(response.body[0].last_known_price).toBeDefined();
    expect(response.text).toMatchSnapshot();
  });
});
