import  { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    let [usefetchUrl,setUseFetchUrl] = useState([]);
console.log(url)
    useEffect(()=>{
        axios
        .get(url)
        .then((res) => {
            setUseFetchUrl(res.data)
        })
        .catch((err) => {
          console.warn(err);
        })
    },[url])
    

    return [usefetchUrl];
}

export default useFetch