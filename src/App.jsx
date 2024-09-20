import { Route, Routes } from "react-router"
import UsersProfile from "./pages/UsersProfile"
import UsersDetails from "./pages/UsersDetails"


const App = () => {
  return (
    <div>
      {/* <ProductsPage/> */}

      <Routes>
        <Route path="/" element={<UsersProfile />} />
        <Route path="/user/:id" element={<UsersDetails />} />
        <Route path="*" element="Error"/>




      </Routes>
      
    </div>
  )
}

export default App
