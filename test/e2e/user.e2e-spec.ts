import * as request from "supertest";
import { Test } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import { AppModule } from "../../src/app.module";

describe("users", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it("POST /users", () => {
    return request(app.getHttpServer())
      .post("/users")
      .send({ email: "test@test.com", password: "test" })
      .expect(201, "1");
  });
});
