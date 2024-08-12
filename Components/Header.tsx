import Logo from "@/public/LogoNHC1.png";
import Image from "next/image";
import MenuIcon from "@/public/menu.svg";

const Header = () => {
  return ( 
  <header className="top-0">
    {/* <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
      <div className="inline-flex gap-1 items-center">
        <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity</p>
        <p>Get started for free</p>
        <ArrowRight className="h-4 w-4 inline-flex justify-center items-center"/>
      </div>
    </div> */}
    
    <div className="py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src={Logo} alt="Saas Logo" height={150} width={150} />
          </div>
          {/* <Image src={Logo} alt="Saas Logo" height={90} width={90} /> */}
          {/* <MenuIcon className="h-5 w-5 md:hidden"/> */}
          <nav className="hidden md:flex gap-6 text-white items-center mx-7">
            <a href="" >Home</a>
            <a href="#about" >About</a>
            <a href="#partners" >Partners</a>
            <a href="#services" >Services</a>
            <a href="#process" >Solution</a>
            <a href="#footer" >Contact</a>

            {/* <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">Get your Certificate</button> */}
          </nav>
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header
