const fetchImages = (num, setRecoilState) => {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
        .then(res => res.json())
        .then(res => setRecoilState((oldList) => [...new Set([...oldList, ...res.message])]))
};

export { fetchImages };