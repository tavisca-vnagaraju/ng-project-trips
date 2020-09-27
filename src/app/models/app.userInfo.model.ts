export class UserInfo {
    constructor(
      public email: string,
      public email_verified: boolean,
      public family_name: string,
      public given_name: string,
      public locale: string,
      public name: string,
      public nickname: string,
      public picture: string,
      public sub: string,
      public updated_at: string,
    ){}
}