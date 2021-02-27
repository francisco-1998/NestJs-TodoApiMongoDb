import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dtos/create-task.dto';
import { TaskFilterDto } from './dtos/task-filter.dto';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) { }

    @Get()
    getTaskWithOrWhithoutFilters(@Query() filterDto: TaskFilterDto): Task[] {
        if(Object.keys(filterDto).length){
            return this.taskService.getTaskWithFilters(filterDto);
        }else{
            return this.taskService.getTaskWithoutFilters();
        }



    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto) {
        // createTask(@Body('title') title:string, @Body('description') description:string) {
        return this.taskService.createTask(createTaskDto);
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.taskService.getTaskById(id);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string): void {
        this.taskService.deleteTask(id);
    }

    @Put('/:id/status')
    updateTaskStatus(@Param('id') id: string, 
                     @Body('status') status: TaskStatus): Task {
        return this.taskService.updateTaskStatus(id, status);
    }
}
