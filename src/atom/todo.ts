import { atom } from 'recoil';

interface ITodoData {
  id: number;
  content: string;
  isFinished: boolean;
}

export const TodoData = atom<ITodoData[]>({
  key: 'todo',
  default: [],
});
