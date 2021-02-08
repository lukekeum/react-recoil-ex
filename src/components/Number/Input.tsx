import React, { useCallback, useRef } from 'react';
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';
import { NumberData } from '../../atom/number';

export default function Input() {
  const [number, setNumber] = useRecoilState(NumberData);
  const InputRef = useRef<HTMLInputElement>(null);

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.currentTarget.value, 10);

      setNumber({
        ...number,
        increase_size: value,
      });
    },
    [number, setNumber]
  );

  const onClickButton = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      if (!InputRef.current?.value) {
        alert('Non number found');
        return;
      }

      const { current_num, increase_size } = number;

      setNumber({
        ...number,
        current_num: current_num + increase_size,
      });
    },
    [number, setNumber]
  );

  return (
    <div>
      <input
        css={NumberInput}
        type='number'
        placeholder='Put number here'
        value={number.increase_size}
        onChange={onChangeInput}
        ref={InputRef}
      />
      <button css={NumberButton} onClick={onClickButton}>
        Add
      </button>
    </div>
  );
}

const NumberInput = css({
  outline: 'none',
  border: '1px solid #bfbfbf',
  fontSize: '1.5rem',
  padding: '0.5rem 1rem',
  borderRadius: '3px',
  marginRight: '1.5rem',
});

const NumberButton = css({
  outline: 'none',
  border: 'none',
  fontSize: '1.5rem',
  background: '#14b886',
  cursor: 'pointer',
  color: 'white',
  padding: '0.5rem 1rem',
  borderRadius: '3px',
});
