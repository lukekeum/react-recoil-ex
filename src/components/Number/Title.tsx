import { useRecoilState } from 'recoil';
import { css } from '@emotion/react';
import { NumberData } from '../../atom/number';

export default function Title() {
  const [number] = useRecoilState(NumberData);

  return <h1 css={TitleCSS}>{number.current_num}</h1>;
}

const TitleCSS = css({
  fontSize: '3rem',
});
