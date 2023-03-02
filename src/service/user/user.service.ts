import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../repository/user/user.repository";

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  signUp(signUpItem: SignUpItem): number {
    return this.userRepository.signUp(signUpItem);
  }
}
