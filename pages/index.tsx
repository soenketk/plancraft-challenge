import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect } from 'react'
import { atom, useRecoilState} from 'recoil'

const imgListState = atom({
    key: 'imgListState',
    default: []
  });

const Home: NextPage = () => {
  const [imgList, setImgList] = useRecoilState(imgListState);
  const fetchImages = (num) => {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
      .then(res => res.json())
      .then(res => {
        setImgList((oldList) => [...new Set([...oldList, ...res.message])]);
      })
  };
  const scrollHandler = (e) => {
    let scroll = e.target.documentElement.scrollTop + window.innerHeight
    let max = e.target.documentElement.scrollHeight
    if(scroll >= max) {
      fetchImages(25);
    }
  };
  useEffect(() => {
    fetchImages(50);
    window.addEventListener('scroll', scrollHandler);
  }, []);
  return (
    <div>
      {imgList.map(res => (
        <Image width='300' height='300' key={res} src={res} />
      ))}
    </div>
  )
}

export default Home
