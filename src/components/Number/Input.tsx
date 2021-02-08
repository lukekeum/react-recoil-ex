import React, { useCallback } from 'react';
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';
import { NumberData } from '../../atom/number';

export default function Input() {
  const [number, setNumber] = useRecoilState(NumberData);

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
      />
      <button onClick={onClickButton}>Add</button>
    </div>
  );
}

const NumberInput = css({
  outline: 'none',
});
