export interface ITask {
  title: string;
  text: string;
  completed: boolean;
}

export interface IState {
  today: ITask[];
  tomorrow: ITask[];
}

export interface ICompletedEvent {
  id: number;
  status: boolean;
}
