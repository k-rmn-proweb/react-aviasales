
export interface ISegment {
  origin: string;
  destination: string;
  date: Date;
  stops: string[];
  duration: number;
}

export interface ITicketModel {
  price: number;
  carrier: string;
  segments: ISegment[];
}