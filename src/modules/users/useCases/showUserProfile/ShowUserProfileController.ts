import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.body;

    const userData = this.showUserProfileUseCase.execute({ user_id: id });

    return response.json(userData);
  }
}

export { ShowUserProfileController };
