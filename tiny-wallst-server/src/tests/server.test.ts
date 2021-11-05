import app from "../app";
import { SERVER_PORT } from "../constants";
import { server } from "../server";

const mockListen = jest.fn();
app.listen = mockListen;

afterEach(() => {
  mockListen.mockReset();
});

test("server should be working correctly upon being called", async () => {
  await server();
  expect(mockListen.mock.calls.length).toBe(2);
  expect(mockListen.mock.calls[0][0]).toBe(SERVER_PORT);
});
