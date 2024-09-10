import { Body, Get, Post } from '@nestjs/common';
import { TicketService } from '../../domain/ports/input/ticket-service.input';
import { Ticket } from '../../domain/model/ticket.entity';
import { TicketCommand } from '../model/ticket.dto';

export class TicketController {
  constructor(private ticketService: TicketService) {}

  @Get()
  findAll(): Ticket[] {
    return this.ticketService.findAll();
  }

  @Post()
  create(@Body() ticketCommand: TicketCommand): any {
    const ticket: Ticket = this.ticketService.create(
      ticketCommand.description,
      ticketCommand.priority,
    );
    return { ...ticket };
  }
}
