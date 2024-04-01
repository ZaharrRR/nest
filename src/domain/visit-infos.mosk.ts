import { VisitInfoDto } from 'src/types/visit-info.dto';

export class MockVisitInfosData {
  public static readonly tempVisitInfos: VisitInfoDto[] = [
    { date: new Date('01.01.2021'), visitors: 1000, trades: 50 },
    { date: new Date('01.01.2021'), visitors: 1000, trades: 50 },
    { date: new Date('01.01.2021'), visitors: 1000, trades: 50 },
    { date: new Date('01.01.2021'), visitors: 1000, trades: 50 },
    { date: new Date('01.01.2021'), visitors: 1000, trades: 50 },
  ];
}
