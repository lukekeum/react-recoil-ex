import React, { useCallback } from 'react';
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';
import { TodoData } from '../../atom/todo';

interface ITodoItemProps {
  text: string;
  checked: boolean;
  id: number;
}

export default function TodoItem({ text, checked, id }: ITodoItemProps) {
  const [todoList, setTodoList] = useRecoilState(TodoData);

  const ToggleEvent = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      const newList = todoList.map((todo) =>
        todo.id === id ? { ...todo, isFinished: !checked } : todo
      );
      setTodoList(newList);
    },
    [todoList, setTodoList, checked, id]
  );

  const RemoveTodo = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      const newList = todoList.filter((todo) => todo.id !== id);
      setTodoList(newList);
    },
    [setTodoList, todoList, id]
  );

  return (
    <div css={Container} onClick={ToggleEvent}>
      <div className='remove' onClick={RemoveTodo}>
        &times;
      </div>
      <div css={TextBox(checked)}>
        <div>{text}</div>
      </div>
      {checked && <div css={{ color: '#7ff562', fontSize: '1.25rem' }}>✓</div>}
    </div>
  );
}

const TextBox = (checked: boolean) => css`
  flex: 1;
  word-break: break-all;
  ${checked && 'text-decoration: line-through;'}
  font-size: 1.5rem;
  font-weight: 100;
`;

const Container = css`
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.15s;
  user-select: none;
  color: white;
  &:hover {
    background: #6e6e6e;
  }
  &:hover .remove {
    opacity: 1;
  }
  & .remove {
    opacity: 0;
    margin-right: 1rem;
    color: #e64980;
    font-weight: 600;
    font-size: 2rem;
  }
  & + & {
    border-top: 1px solid #949494;
  }
`;
