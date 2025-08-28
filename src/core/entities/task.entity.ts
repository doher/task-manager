type TaskStatus = 'pending' | 'done' | 'cancelled' | 'in-progress';
type TaskPriority = 'low' | 'medium' | 'high';

export class Task {
  constructor(
    private id: string,
    private title: string,
    private status: TaskStatus,
    private priority: TaskPriority,
    private description?: string,
    private dueDate?: string,
  ) {
    this.validate();
  }

  get getId(): string {
    return this.id;
  }

  get getTitle(): string {
    return this.title;
  }

  public updateStatus(status: TaskStatus) {
    this.status = status;
  }

  public updatePiority(priority: TaskPriority) {
    this.priority = priority;
  }

  private validate() {
    // todo: check trim() when create task
    if (!this.title || this.title.trim() === '') {
      throw new Error('Task title cannot be empty');
    }
  }
}
