import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getImageURL, getUserById } from "../../firebase";

export const UserDetails = () => {
  const param = useParams();
  const [data, setData] = useState(null);
  const [url, setURL] = useState(null);
  //   console.log(data);

  useEffect(() => {
    getUserById(param.id).then((value) => setData(value.data()));
  }, [param.id]);

  useEffect(() => {
    if (data) {
      const imgURL = data.imageURL;
      getImageURL(imgURL).then((url) => setURL(url));
    }
  }, [data]);

  if (data == null) return <h1 className="pt-30 tx-[5rem]">Loading ...</h1>;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-32 pt-32 pb-20">
      <div className="flex flex-col items-center gap-8">
        <div className="md:w-1/2">
          <img src={url} width={300} className="border" alt="" />
        </div>

        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
          <div className="flex items-center mb-4">
            <span className="ml-2 text-gray-600">{data.author}</span>
          </div>
          <p className="text-gray-600 mb-6">{data.description}</p>
          <p className="text-gray-600 mb-6">{data.tags}</p>
        </div>
      </div>
    </div>
  );
};
export default UserDetails;
