import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
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
