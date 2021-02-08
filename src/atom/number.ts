import { atom } from 'recoil';

export const NumberData = atom({
  key: 'number',
  default: {
    current_num: 0,
    increase_size: 1,
  },
});
