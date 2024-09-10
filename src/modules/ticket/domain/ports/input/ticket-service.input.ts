import { Ticket } from '../../model/ticket.entity';
import { ITicketService } from './interfaces/ticket-service.interface';

export class TicketService implements ITicketService {
  create(description: string, priority: number): Ticket {
    throw new Error('Method not implemented.');
  }

  findAll(): Ticket[] {
    throw new Error('Method not implemented.');
  }

  findActiveTickets(): Ticket[] {
    throw new Error('Method not implemented.');
  }
}
