import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const { admin: isAdmin } = this.usersRepository.findById(user_id);

    if (isAdmin) return this.usersRepository.list();

    throw new Error("User is not access");
  }
}

export { ListAllUsersUseCase };
