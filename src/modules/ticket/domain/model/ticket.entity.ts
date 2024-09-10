import { randomUUID } from 'crypto';

export class Ticket {
  private id: string;
  description: string;
  status: TicketStatusEnum;
  priority: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(description: string, priority: number) {
    this.id = randomUUID();
    this.description = description;
    this.status = TicketStatusEnum.OPEN;
    this.priority = priority;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

enum TicketStatusEnum {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  CLOSED = 'CLOSED',
}
