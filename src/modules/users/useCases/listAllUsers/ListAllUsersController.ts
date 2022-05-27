import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const id: string = request.headers.user_id.toString();
    const listAllUsers = this.listAllUsersUseCase.execute({ user_id: id });

    return response.status(200).json(listAllUsers);
  }
}

export { ListAllUsersController };
