import { Task } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async getAllTasks(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  async getTaskById(id: number): Promise<Task> {
    return this.prisma.task.findUnique({
      where: {
        id: id,
        // get id
      },
    });
  }

  async createTask(data: Task): Promise<Task> {
    return this.prisma.task.create({
      data,
      // create task
    });
  }

  async updateTask(id: number, data: Task): Promise<Task> {
    return this.prisma.task.update({
      where: {
        id: id,
        // update now now gvhb
      },
      data,
    });
  }

  async deleteTask(id: number): Promise<Task> {
    return this.prisma.task.delete({
      where: {
        id: id,
      },
    });
  }
}
