export interface Todo {
    id: number;
    text: string;
    description: string | null;
    completed: boolean;
    priority: 'low' | 'medium' | 'high';
    dueDate: string;
}
