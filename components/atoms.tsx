import { atom, atomFamily } from 'recoil'

const imgListState = atom({
    key: 'imgListState',
    default: []
  });

const previewState = atom({
  key: 'previewState',
  default: ''
});

const viewCountState = atomFamily<number, string>({
  key: 'viewCountState',
  default: 0
});

export {imgListState, previewState, viewCountState};