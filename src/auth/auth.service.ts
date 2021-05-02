import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

/**
 * 1.google에서 준 jwt 파싱
 * 2.useremail로 userService에서 해당 유저 있는지 조회
 *  1) 있을 경우 (&& 이미 active된 상태이면)
 *  해당 유저의 정보를 userObj에 넣어서 보냄-> 토큰 포함
 *  2) 없을 경우
 *    그냥 리턴 없음
 * 3.
 */
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService
  ) {}

  async postUserToken(payload, vendor: string) {
    const { token } = payload;
    const jwtParsedResult = this.jwtService.verify(token);
    console.log(
      '🚀 ~ file: auth.service.ts ~ line 24 ~ AuthService ~ postUserToken ~ jwtParsedResult',
      jwtParsedResult
    );

    //
    // console.log('errrr', email);
    // const user = await this.usersService.findUser(email);
    // console.log(
    //   '🚀 ~ file: auth.service.ts ~ line 30 ~ AuthService ~ postUserToken ~ user',
    //   user
    // );

    console.log('vendor가 제대로?', vendor);
  }
}
