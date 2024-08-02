import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    let [usefetchUrl,setUseFetchUrl] = useState("");

    useEffect(()=>{
        axios
        .get(url)
        .then((res) => {
            setUseFetchUrl(res.data)
        })
        .catch((err) => {
          console.warn(err);
        })
    },[])
    

    return [usefetchUrl];
}

export default useFetch