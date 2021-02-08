import { css } from '@emotion/react';

import Title from './Title';
import Input from './Input';

export default function NumberComponent() {
  return (
    <div css={NumberComponentCss}>
      <Title />
      <Input />
    </div>
  );
}

const NumberComponentCss = css({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});
