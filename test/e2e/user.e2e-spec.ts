import * as request from "supertest";
import { Test } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import { AppModule } from "../../src/app.module";

describe("users", () => {
  let app: INestApplication;
  let savedUser = {
    email: "saved@email.com",
    password: "saved",
    id: 0
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();

    request(app.getHttpServer()).post("/users").send(savedUser)
      .end((err, res) => {
        savedUser.id = res.body;
      })
    ;
  });

  afterAll(async () => {
    await app.close();
  });

  it("POST /users created", async () => {
    const res = await request(app.getHttpServer())
      .post("/users")
      .send({ email: "test@test.com", password: "test" });

    expect(res.statusCode).toBe(201);
    expect(res.text).not.toBeNaN();
  });

  it("POST /users/check correct password", async () => {
    return request(app.getHttpServer())
      .post("/users/check")
      .send({ email: savedUser.email, password: savedUser.password })
      .expect(200, { valid: true });
  });

  it("POST /users/check wrong password", async () => {
    return request(app.getHttpServer())
      .post("/users/check")
      .send({ email: savedUser.email, password: "wrong" + savedUser.password })
      .expect(200, { valid: false });
  });

  it("POST /users/check not found email", async () => {
    return request(app.getHttpServer())
      .post("/users/check")
      .send({ email: "not-found" + savedUser.email, password: savedUser.password })
      .expect(200, { valid: false });
  });
});
