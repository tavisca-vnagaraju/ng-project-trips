export class CardDetails {
    constructor(
      public email:string,
      public CardNumber: string,
      public CardHolderName: string,
      public ExpirationMonth: String,
      public ExpirationYear: Number,
    ){}
}