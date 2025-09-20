import LoginCard from "../components/LoginCard"
import RegisterCard from "../components/RegisterCard"

 

const UserVerification = () => {
  return (
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-teal-100 px-4 py-10">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
         
        <LoginCard/> 
        <RegisterCard/>

      </div>
    </div>
  )
}

export default UserVerification