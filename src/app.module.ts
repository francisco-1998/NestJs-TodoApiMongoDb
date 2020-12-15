import { Module } from '@nestjs/common';
import { ToDoModule } from './modules/to-do/to-do.module';

@Module({
  imports: [ToDoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
