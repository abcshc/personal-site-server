import { Body, Controller, HttpCode, Inject, Post } from "@nestjs/common";
import { UserService } from "../../service/user/user.service";

@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @HttpCode(201)
  signUp(@Body() request: SignUpRequest): number {
    return this.userService.signUp(request);
  }
}
