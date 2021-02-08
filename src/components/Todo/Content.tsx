import React from 'react';
import { css } from '@emotion/react';

import TodoItem from './Item';
import { useRecoilValue } from 'recoil';
import { TodoData } from '../../atom/todo';

export default function Content() {
  const todoList = useRecoilValue(TodoData);
  return (
    <div css={Container}>
      {todoList.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          text={todoItem.content}
          checked={todoItem.isFinished}
          id={todoItem.id}
        />
      ))}
    </div>
  );
}

const Container = css`
  width: 100%;
  min-height: 30rem;
  background: #5c5c5c;
`;
