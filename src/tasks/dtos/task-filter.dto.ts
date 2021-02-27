import { TaskStatus } from '../task.model';
export class TaskFilterDto {
    status: TaskStatus;
    title: string;
    description: string;
    anything: string;
}