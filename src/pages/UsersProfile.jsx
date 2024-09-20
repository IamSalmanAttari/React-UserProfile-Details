import Cards from "../components/comon/Cards"
import { Users } from "../utils/constant/Users"

const UsersProfile = () => {
  return (
    <div className=" flex flex-wrap justify-center gap-14 m-5  ">
   {Users.map((items,index)=>{
    return(
        <Cards key={index} data={items} />
    )
   })}
    </div>
  )
}

export default UsersProfile
