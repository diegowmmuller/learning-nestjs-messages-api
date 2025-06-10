import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;
  constructor() {
    // Funcionalidade passageira. USE INJEÇAO DE DEPENDENCIAS
    this.messagesService = new MessagesService();
  }

  @Get()
  listMessages() {}

  @Post()
  createMessage(@Body() body: createMessageDto) {
    console.log(body);
  }

  @Get(':id')
  getMessages(@Param('id') id: string) {
    console.log(id);
  }
}
