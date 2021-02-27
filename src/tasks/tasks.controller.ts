import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dtos/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) { }

    @Get()
    getAllTasks(): Task[] {
        return this.taskService.getAllTasks();
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto) {
        // createTask(@Body('title') title:string, @Body('description') description:string) {
        return this.taskService.createTask(createTaskDto);
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string) {
        return this.taskService.getTaskById(id);
    }
}
