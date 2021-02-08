import React from 'react';
import { css } from '@emotion/react';

export default function Input() {
  return (
    <div>
      <input css={NumberInput} type='number' placeholder='Put number here' />
      <button>Add</button>
    </div>
  );
}

const NumberInput = css({
  outline: 'none',
});
