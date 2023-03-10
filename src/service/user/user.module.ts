import { Module } from "@nestjs/common";
import { UserController } from "../../controller/user/user.controller";
import { UserService } from "./user.service";
import { UserRepository } from "../../repository/user/user.repository";

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
