import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { imgListState, previewState } from '../components/atoms'
import { fetchImages } from '../components/fetchDogs'
import { PreviewModal } from '../components/previewModal'

const Home: NextPage = () => {
  const [imgList, setImgList] = useRecoilState(imgListState);
  const setPreview = useSetRecoilState(previewState);

  /**
   * Implements the infinite scroll.
   */
  const scrollHandler = (e) => {
    let scroll = e.target.documentElement.scrollTop + window.innerHeight; // offset by scrolling + height of window
    let max = e.target.documentElement.scrollHeight; // height of content
    if (scroll >= max) { // bottom of page reached
      fetchImages(25, setImgList);
    }
  };

  // loads some images and adds a listener for infinite scrolling
  useEffect(() => {
    fetchImages(50, setImgList);
    window.addEventListener('scroll', scrollHandler);
  }, []); // empty list so useEffect only gets called on the first render

  return (
    <div>
      <PreviewModal />
      {imgList.map(res => (
        <Image width='300' height='300' key={res} src={res} onClick={() => setPreview(res)} />
      ))}
    </div>
  )
}

export default Home
