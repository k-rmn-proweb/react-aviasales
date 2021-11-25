import {apiClient} from './apiClient';
import {ITicketModel} from '../models/ticket.model';

interface ITicketsResponse {
  tickets: ITicketModel[];
  stop: boolean;
}


export class TicketsAPI {
  static async getSearchId(): Promise<string> {
    try {
      const response = await apiClient.get<{searchId: string}>('/search');
      const { searchId } = response.data;
      return searchId;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  static async getTickets(): Promise<ITicketsResponse> {
    try {
      const id = await this.getSearchId();
      const response = await apiClient.get<ITicketsResponse>(`/tickets?searchId=${id}`);
      return response.data;
    } catch (e) {
      throw new Error(e.message);
    }
  }
}