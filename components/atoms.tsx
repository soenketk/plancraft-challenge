import { atom } from 'recoil'

const imgListState = atom({
    key: 'imgListState',
    default: []
  });

const previewState = atom({
  key: 'previewState',
  default: ''
});

export {imgListState, previewState};