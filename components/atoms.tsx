import { atom, atomFamily } from 'recoil'

/**
 * The list of all fetched images.
 */
const imgListState = atom({
  key: 'imgListState',
  default: []
});

/**
 * Controls visibility of the preview modal and provides the image url.
 */
const previewState = atom({
  key: 'previewState',
  default: ''
});

/**
 * Saves how often each images has been previewed.
 */
const viewCountState = atomFamily<number, string>({
  key: 'viewCountState',
  default: 0
});

export { imgListState, previewState, viewCountState };
