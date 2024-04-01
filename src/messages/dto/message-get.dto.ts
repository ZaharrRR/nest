export class MessageDto {
  public id: number;
  public senderId: number;
  public recipientId: number;
  public content: string;
  public sendedUtc: Date;
}
