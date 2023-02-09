import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return 'i am signed up';
  }
  signin() {
    return 'I am signed in';
  }
}
