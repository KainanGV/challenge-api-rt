/* eslint-disable no-param-reassign */
import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();

    user.name = name;
    user.email = email;
    user.created_at = new Date();
    user.updated_at = new Date();

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    const user = this.users.find((element) => element.id === id);
    return user;
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find((element) => element.email === email);
    return user;
  }

  turnAdmin(receivedUser: User): User {
    const userUpdate = this.users.reduce((accumulator, element) => {
      if (element.id === receivedUser.id) {
        element.admin = true;
        element.updated_at = new Date();
        accumulator = element;
      }

      return accumulator;
    }, {}) as User;

    return userUpdate;
  }

  list(): User[] {
    const listAllUsers = this.users;

    return listAllUsers;
  }
}

export { UsersRepository };
