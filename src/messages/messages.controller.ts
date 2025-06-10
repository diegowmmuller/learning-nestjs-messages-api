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
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: createMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get(':id')
  getMessages(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }
}
