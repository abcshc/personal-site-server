import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {
  private readonly users = new Map<number, UserEntity>();
  private id = 0;

  signUp(signUpItem: SignUpItem): number {
    const id = this.nextId();
    const user = {
      id,
      email: signUpItem.email,
      password: signUpItem.password,
      createdAt: new Date()
    };
    this.users.set(id, user);

    return id;
  }

  private nextId(): number {
    return ++this.id;
  }

  findById(id: number): UserEntity {
    return this.users.get(id);
  }

  findByEmail(email: string): UserEntity {
    for (const user of this.users.values()) {
      if (user.email === email) {
        return user;
      }
    }
    return null;
  }
}
