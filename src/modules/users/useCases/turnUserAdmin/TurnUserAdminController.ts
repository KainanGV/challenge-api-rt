import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.body;

    const userTurnAdmin = this.turnUserAdminUseCase.execute({ user_id: id });

    return response.json(userTurnAdmin);
  }
}

export { TurnUserAdminController };
