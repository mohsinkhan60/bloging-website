import { PencilLineIcon, Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteUserData, getImageURL, getUserById } from "../../firebase";

export const UserDetails = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [url, setURL] = useState(null);

  useEffect(() => {
    getUserById(param.id).then((value) => setData(value.data()));
  }, [param.id]);

  useEffect(() => {
    if (data) {
      const imgURL = data.imageURL;
      getImageURL(imgURL).then((url) => setURL(url));
    }
  }, [data]);

  const handleDelete = async () => {
    try {
      await deleteUserData(param.id);
      navigate("/");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  if (data == null) return <h1 className="pt-30 tx-[5rem]">Loading ...</h1>;

  return (
    <div className="container mx-auto px-4 sm:px-6 pt-32 pb-20">
      <div className="flex flex-col items-center gap-8">
        <div className="md:w-1/2">
          <img src={url} className="w-full object-cover max-h-[28rem]" alt="" />
        </div>

        <div className="md:w-1/2">
          <div className="flex items-start justify-between gap-5">
            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
            <div className="flex items-center cursor-pointer gap-2">
              <Link to={`/edit-blog/${param?.id}`}>
                <PencilLineIcon />
              </Link>
              <Trash2Icon onClick={handleDelete} />
            </div>
          </div>

          <div className="flex items-center mb-4">
            <span className="ml-2 text-gray-600">{data.author}</span>
          </div>
          <p className="text-gray-600 mb-6">{data.description}</p>
          <p className="text-gray-600 mb-6">{data.tags}</p>
          <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
