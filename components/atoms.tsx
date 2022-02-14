import { atom } from 'recoil'

const imgListState = atom({
    key: 'imgListState',
    default: []
  });

export {imgListState};