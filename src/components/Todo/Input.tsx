import React, { useCallback, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { useSetRecoilState } from 'recoil';
import { TodoData } from '../../atom/todo';

export default function Input() {
  const [inputValue, setInputValue] = useState('');
  const InputRef = useRef<HTMLInputElement>(null);

  const setTodoList = useSetRecoilState(TodoData);

  const onClickButton = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setTodoList((curr) => {
        const id = curr.length + 1;
        return [
          ...curr,
          {
            id,
            content: inputValue,
            isFinished: false,
          },
        ];
      });
      setInputValue('');
      InputRef.current?.focus();
    },
    [setTodoList, inputValue, setInputValue]
  );

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.currentTarget.value);
    },
    [setInputValue]
  );

  return (
    <div css={Container}>
      <input
        css={InputStyle}
        type='text'
        placeholder='Write what to do'
        value={inputValue}
        onChange={onInputChange}
        ref={InputRef}
      />
      <button css={ButtonStyle} onClick={onClickButton}>
        +
      </button>
    </div>
  );
}

const Container = css`
  display: flex;
`;

const ButtonStyle = css`
  margin: 0;
  outline: none;
  border: none;
  width: 5rem;
  height: 5rem;
  font-size: 3rem;
  color: white;
  background: #3b3b3b;
  padding: 0;
  cursor: pointer;
`;

const InputStyle = css`
  margin: 0;
  outline: none;
  border: none;
  width: 27rem;
  height: 5rem;
  font-size: 1.5rem;
  padding: 0rem 1.5rem;
`;
