import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo2.png";

function Header() {
  let linkClassName = "block text-2xl lg:text-xl lg:inline-block mt-8 lg:mt-0 text-emerald-300 hover:text-cyan-300 mr-6 transition-colors duration-300";
  let activeClassName = "block text-2xl lg:text-xl lg:inline-block mt-8 lg:mt-0 text-emerald-500 mr-6";
  let dropdownClassName = "block text-2xl lg:text-xl lg:inline-block mt-8 lg:mt-0 text-emerald-300 mr-6 group cursor-pointer";

  let navCloseClassName = "w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block";
  let navOpenClassName = "w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:block open-nav h-screen lg:h-max";

  const [isNavToggle, setNavToggle] = useState(false);

  const toggleClass = () => {
    setNavToggle(!isNavToggle);
    window.scrollTo(0, 0);
  };

  const closeNav = () => {
    setNavToggle(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="fixed w-full top-0 z-50">
      <nav className="flex items-center justify-between flex-wrap bg-white py-4 px-6 shadow-lg">
        <div className="flex items-center justify-center text-white w-36 lg:w-36 mr-6">
          <NavLink to="/" onClick={closeNav}>
            <img srcSet={Logo} alt="Logo" className="object-cover h-16 w-48" />
          </NavLink>
        </div>
        <div className="flex items-center lg:order-last">
          {/* <div className="">
            <DarkModeToggle />
          </div> */}
          <div className="lg:hidden">
            <button onClick={toggleClass} className="flex items-center px-3 py-2 border rounded text-black border-black">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className={isNavToggle ? navOpenClassName : navCloseClassName}>
          <div className="text-lg font-semibold lg:flex-grow" onClick={toggleClass}>
            <NavLink to="/aboutus" className={({ isActive }) => (isActive ? activeClassName : linkClassName)}>Về chúng tôi</NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? activeClassName : linkClassName)}>
              Đóng góp
            </NavLink>
            <div className={dropdownClassName}>
              <p>Dành cho dự án</p>
              <br className="lg:hidden" />
              <div className="lg:invisible lg:absolute flex flex-col gap-4 lg:gap-0 -my-3 lg:my-0 lg:py-1 px-4 rounded group-hover:visible lg:bg-teal-500 lg:shadow">
                <NavLink to="/addproject" className="my-2 block lg:text-white">Dự án muốn kêu gọi</NavLink>
                <NavLink to="/courses" className="my-2 block lg:text-white">Phát triển dự án</NavLink>
              </div>
            </div>
            <NavLink to="/news" className={({ isActive }) => (isActive ? activeClassName : linkClassName)}>
              Tin tức
            </NavLink>
            {/* <NavLink to="/credits" className={({ isActive }) => (isActive ? activeClassName : linkClassName)}>
              Credits
            </NavLink> */}
            {/* <NavLink to="/terms" className={({ isActive }) => (isActive ? activeClassName : linkClassName)}>
              Terms of Service
            </NavLink> */}
            {/* <NavLink to="/404" className={({ isActive }) => (isActive ? activeClassName : linkClassName)}>
              Error Page
            </NavLink> */}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
