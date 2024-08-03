import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  let [fetchEmpData, setFetchEmpData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setFetchEmpData(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [url]);

  return [fetchEmpData];
};

export default useFetch;
