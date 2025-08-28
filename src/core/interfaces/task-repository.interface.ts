import { Task } from '../entities/task.entity';

export interface TaskRepository {
  create(task: Task): Promise<Task>;
  delete(id: number): Promise<void>;
  update(id: number, task: Task): Promise<Task>;
  findOne(id: number): Promise<Task>;
  findAll(): Promise<Task[]>;
}
