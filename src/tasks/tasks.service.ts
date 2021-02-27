import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDto } from './dtos/create-task.dto';
import { TaskFilterDto } from './dtos/task-filter.dto';

@Injectable()
export class TasksService {

    private tasks: Task[] = [];

    getTaskWithoutFilters(): Task[] {
        return this.tasks;
    }

    getTaskWithFilters(filterDto: TaskFilterDto): Task[]{

        const { title, status, description, anything } = filterDto;
        let taskList = this.getTaskWithoutFilters();

        if(title){ 
            taskList = taskList.filter(task => task.title.toLocaleLowerCase() === title );
        }

        if(status){ 
            taskList = taskList.filter(task => task.status.toLocaleLowerCase() === status ); 
        }
        
        if(description){ 
            taskList = taskList.filter(task => task.description.toLocaleLowerCase() === description ); 
        }

        if(anything) {
            taskList = taskList.filter(task => task.title.toLowerCase().includes(anything) 
                                            || task.description.toLowerCase().includes(anything) 
                                            || task.status.toLowerCase().includes(anything));
        }

        return taskList;
    }

    createTask(createTaskDto: CreateTaskDto): Task {
        // createTask(title: string, description: string): Task {

        const { title, description } = createTaskDto;

        const task: Task = {
            id: uuidv4(),
            title,
            description,
            status: TaskStatus.OPEN
        }

        this.tasks.push(task);

        return task;
    }


    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id);
    }


    deleteTask(id: string): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    updateTaskStatus(id: string, status: TaskStatus): Task {
        const task = this.getTaskById(id);
        task.status = status;
        return task;
    }

}
