import { Inject, Injectable } from '@nestjs/common';
import { Ticket } from '../../model/ticket.entity';
import { ITicketService } from './interfaces/ticket-service.interface';
import { ITicketRepository } from '../output/interfaces/ticket-repository.interface';

@Injectable()
export class TicketService implements ITicketService {
  constructor(
    @Inject(ITicketRepository)
    private readonly ticketRepository: ITicketRepository,
  ) {}

  create(description: string, priority: number): Ticket {
    const ticket: Ticket = new Ticket(description, priority);
    if (this.findActiveTickets().length >= 3) {
      throw new Error('Ticket count is more than 3');
    }
    this.ticketRepository.create(ticket);
    return ticket;
  }

  findAll(): Ticket[] {
    return this.ticketRepository.findAll();
  }

  findActiveTickets(): Ticket[] {
    return this.ticketRepository
      .findAll()
      .filter((ticket: Ticket) => !ticket.isClosed);
  }
}
