import { useEffect, useState } from "react";
import NavBar from "./scenes/Navbar/NavBar";
import { SelectedPage } from "./shared/types";
import "./index.css"
import Home from "./scenes/Home/Home";
import Benifits from "./scenes/Benefits/Benifits";
import OurClasses from "./scenes/ourClasses";
import Footer from "./scenes/Footer/Footer";
import ContactUs from "./scenes/ContactUs/ContactUs";
function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  const handleScrollY = () => {
    if (window.scrollY === 0) {
      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home)
    }
    if (window.scrollY !== 0) {
      setIsTopOfPage(false)

    }
    window.addEventListener("scroll", handleScrollY)
    return ()=>window.removeEventListener("scroll", handleScrollY)
  }
  useEffect(() => {
    handleScrollY();
  })
  return (
    <div className="app bg-gray-20">
      <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage={isTopOfPage} />
      <Home setSelectedPage={setSelectedPage} />
      <Benifits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer/>
    </div>
  );
}

export default App;
