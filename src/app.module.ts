import { Module } from "@nestjs/common";
import { UserController } from "./controller/user/user.controller";
import { UserModule } from "./service/user/user.module";

@Module({
  imports: [UserModule],
  controllers: [UserController],
})
export class AppModule {}
