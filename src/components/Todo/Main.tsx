import React from 'react';
import { css } from '@emotion/react';

import Input from './Input';
import Content from './Content';

export default function Main() {
  return (
    <div css={MainContainer}>
      <header css={TodoHeader}>TodoList</header>
      <div>
        <Input />
        <Content />
      </div>
    </div>
  );
}

const TodoHeader = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35rem;
  height: 10rem;
  color: white;
  background: #2675a3;
  font-size: 3.5rem;
  font-weight: 100;
`;

const MainContainer = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #f0f0fe;
`;
