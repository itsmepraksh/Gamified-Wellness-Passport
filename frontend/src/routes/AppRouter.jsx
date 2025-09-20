import {Route, Routes} from "react-router-dom"
import Home from "../pages/Home"
import ChatBot from "../pages/ChatBot"
import MoodTracker from "../pages/MoodTracker"
import Passport from "../pages/Passport"
import Profile from "../pages/Profile"
import UserVerification from "../pages/UserVerification"

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/chatbot" element={<ChatBot/>}/>
        <Route path="/mood_tracker" element={<MoodTracker/>}/>
        <Route path="/passport" element={<Passport/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/validate" element={<UserVerification/>}/>
    </Routes>
  )
}

export default AppRouter