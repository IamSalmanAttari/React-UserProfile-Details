import { useNavigate, useParams } from "react-router";
import { Users } from "../utils/constant/Users";


const UsersDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams();

  const singleData = Users.find((user) => {
    return user.id == id;
  });
  const { profession, name, description, profileImage} = singleData
  return (
    <div className=" bg-gray-950 text-blue-300 flex flex-wrap gap-3 justify-center py-10">

      <div className="left w-[49%]">
        <img className=" w-[100%]" src={profileImage} alt="" />
      </div>

      <div className="right w-[49%] mt-14 text-center">
        <h1 className=" text-6xl mb-5">{name}</h1>
        <p className=" text-3xl mb-5">{profession}</p>
        <p className=" ">{description}</p>
        <button onClick={()=>{navigate("/")}} className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200">
          Go Back Home
        </button>
      </div>


    </div>
  );
};

export default UsersDetails;
