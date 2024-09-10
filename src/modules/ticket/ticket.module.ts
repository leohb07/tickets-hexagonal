import { Module } from '@nestjs/common';
import { TicketController } from './adapters/driver/ticket.controller';
import { TicketService } from './domain/ports/input/ticket-service.input';
import { ITicketRepository } from './domain/ports/output/interfaces/ticket-repository.interface';
import { TicketRepository } from './adapters/driven/ticket.repository';

@Module({
  imports: [],
  controllers: [TicketController],
  providers: [
    TicketService,
    {
      provide: ITicketRepository,
      useClass: TicketRepository,
    },
  ],
})
export class TicketModule {}
