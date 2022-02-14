import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect } from 'react'
import ReactModal from 'react-modal';
import { useRecoilState} from 'recoil'
import { imgListState, previewState } from '../components/atoms';
import { fetchImages } from '../components/fetchDogs';

const Home: NextPage = () => {
  const [imgList, setImgList] = useRecoilState(imgListState);
  const [preview, setPreview] = useRecoilState(previewState);
  const scrollHandler = (e) => {
    let scroll = e.target.documentElement.scrollTop + window.innerHeight
    let max = e.target.documentElement.scrollHeight
    if(scroll >= max) {
      fetchImages(25, setImgList);
    }
  };
  useEffect(() => {
    fetchImages(50, setImgList);
    window.addEventListener('scroll', scrollHandler);
  }, []);
  return (
    <div>
      <ReactModal isOpen={preview}>
        <Image layout='fill' src={preview ? preview : '/favicon.ico'} onClick={() => setPreview('')} />
      </ReactModal>
      {imgList.map(res => (
        <Image width='300' height='300' key={res} src={res} onClick={() => setPreview(res)} />
      ))}
    </div>
  )
}

export default Home
