import {BrowserRouter, Route, Routes} from "react-router-dom";
import {About, ContactUS, Home} from "./pages";
import {Footer, Navbar, Notfound} from "./layout";
import '../src/styles/style.css'


function App() {

    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact-us" element={<ContactUS/>}/>
                    <Route path="*" element={<Notfound/>}/>
                </Routes>

                <Footer/>
            </BrowserRouter>
        </>

    )
}

export default App
