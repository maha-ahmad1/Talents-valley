import { useState, useEffect } from "react";
import axios from "axios";

export default function UseApiRequest(url) {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setErrMsg] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      axios
        .post(url, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((response) => {
          setIsLoaded(true);
          setData(response.data);
          console.log(JSON.stringify(response?.data));
        })
        .catch((err) => {
          console.log("error", err);
          if (!err?.response) {
            setErrMsg("No Server Response");
          } else if (
            err.response?.status >= 400 &&
            err.response?.status < 500
          ) {
            setErrMsg(err.response.data.message);
          } else {
            setErrMsg("Registration Failed");
          }
        });
    };
    fetchData();
  }, [url]);

  return { error, isLoaded, data };
}
