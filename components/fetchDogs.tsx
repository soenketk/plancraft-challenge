/**
 * Fetches images from https://dog.ceo/api/
 * @param num number of images to fetch
 * @param setRecoilState function to update the image list
 */
const fetchImages = (num, setRecoilState) => { // recoilState has to be set through function parameters as fetchImages is called in useEffect() in index.tsx
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(res => res.json())
    .then(res => setRecoilState((oldList) => [...new Set([...oldList, ...res.message])])); // updates list of images, new Set() removes duplicates
};

export { fetchImages };
