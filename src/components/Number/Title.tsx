import { useRecoilState } from 'recoil';
import { NumberData } from '../../atom/number';

export default function Title() {
  const [number] = useRecoilState(NumberData);

  return <h1>Number: {number.current_num}</h1>;
}
