 
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import AppRouter from "./routes/AppRouter.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-teal-100">
       <Navbar/>
      <AppRouter/>
       <Footer/>
    </div>
  )
}

export default App
 
