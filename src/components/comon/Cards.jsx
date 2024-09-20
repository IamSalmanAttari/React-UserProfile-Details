import { useNavigate } from "react-router";

const Cards = ({ data }) => {
    const {id,profession, name, description, profileImage,background } = data
    const navigate = useNavigate();
    
  return (
    <div className=" flex flex-wrap justify-center  ">

      {/* <div className="  mb-10   max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="">
        <img src={background} alt="" /> 
    <img className=" rounded-full  object-cover object-center w-full  block" src={profileImage} alt="" />
  </a>
  <div className="p-5">



    <a href="#">
      <h5 className=" text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
    </a>

    <p className=" text-center mb-3 font-normal text-gray-700 dark:text-gray-400">
      {profession}
    </p>


    <p className="text-center mb-3 font-normal text-gray-700 dark:text-gray-400">
      {description}
    </p>
    <a
    onClick={()=>navigate(`/user/${id}`)}
      href=""
      className=" center inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Details
      
    </a>
  </div>
</div> */}

{/* ---------------- */}
<div className="relative bg-black rounded-lg shadow-lg p-6 max-w-xs mx-auto">
      {/* Background Image */}
      <div
        className="absolute inset-0 h-40 w-full rounded-t-lg"
        style={{
          backgroundImage: `url(${background})`, // Replace with your background image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative top-16 flex flex-col items-center">
        {/* Profile Image */}
        <div className="relative z-10">
          <img
            className="w-24 h-24 rounded-full border-4 border-white"
            src={profileImage} // Replace with actual profile image
            alt=""
          />
        </div>

        {/* Name and Title */}
        <h2 className="text-xl text-white font-semibold mt-8">{name}</h2>
        <p className="text-blue-500">{profession}</p>

        {/* Description */}
        <p className="text-gray-600 text-center mt-2">
        {description}
        </p>
        {/* View Profile Button */}
        <button onClick={()=>{navigate(`/user/${id}`)}} className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200">
          View Profile
        </button>

        {/* Social Icons */}
        <div className="flex justify-center mt-14 space-x-4">
          <a href="#" className="text-gray-500 hover:text-blue-500">
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500">
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500">
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500">
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500">
          </a>
        </div>

      </div>
    </div>





    </div>
  );
};

export default Cards;
