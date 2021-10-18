import { useEffect, useState } from "react";

export const useFetchJson = (url, params) => {
  const [loading, setLoading] = useState(false),
        [data, setData] = useState(null),
        [error, setError] = useState(null),
        {method, headers, body} = params;
  
  useEffect(() => {
    const makeRequest = async () => {
      setLoading(true);

      await fetch(url, {
        method: method ? method : "GET",
        headers: headers ? headers : { "Content-Type": "application/json" },
        body: body ? JSON.stringify(body) : null
      })
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((e)=> setError(e.message))
      .finally(() =>  setLoading(false))
    }
    makeRequest();
  }, [method, headers, body, url]);

  return [data, loading, error];
}