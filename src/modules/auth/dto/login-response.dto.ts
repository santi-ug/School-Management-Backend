export class LoginResponseDto {
    access_token: string;
    user: {
      id: string;
      username: string;
      nombre: string;
      email: string;
      rol: string;
    };
  }