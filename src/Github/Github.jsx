import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";

const Github = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetch("https://api.github.com/users/nitesh2920")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setData(data);
      });
  }, []);
  return (
    <div className="flex  flex-col">
      <div className="text-center">
        <img src={data.avatar_url} alt="" width={200} />
      </div>
      <div className="  text-center m-4 text-4xl">
        Github followers :{data.followers}
      </div>

      <div className="text-center text-4xl font-semibold">
        Name : {data.name}
      </div>
    </div>
  );
};

export default Github;
