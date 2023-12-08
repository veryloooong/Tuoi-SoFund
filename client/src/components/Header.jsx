import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo2.png";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function Header() {
  const login = useGoogleLogin({
    // INFO: Cái này là implicit flow, không nối được với backend
    onSuccess: async (responseToken) => {
      console.log(responseToken);
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${responseToken.access_token}` } }
      );

      console.log(userInfo.data);
    },
    onError: () => {
      console.log("Error")
    },
  });

  const onSuccess = (response) => {
    console.log(response);
  }

  const onError = (res) => {
    console.log("Failed");
    console.log(res);
  }

  let linkClassName = "block text-2xl lg:text-xl lg:inline-block mt-8 lg:mt-0 text-emerald-300 hover:text-cyan-300 mr-6 transition-colors duration-300";
  let activeClassName = "block text-2xl lg:text-xl lg:inline-block mt-8 lg:mt-0 text-emerald-500 mr-6";

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
        <div className="flex gap-3 items-center lg:order-last">
          {/* INFO: Google Sign-in button */}
          <button onClick={login} className="bg-palette2 text-white font-bold px-8 py-2 rounded-full shadow hover:text-palette5 transition-colors duration-300">Đăng nhập với Google</button>
          {/* <GoogleLogin onSuccess={onSuccess} onError={onError} /> */}
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
            <NavLink to="/addproject" className={({ isActive }) => (isActive ? activeClassName : linkClassName)}>
              Dự án muốn kêu gọi
            </NavLink>
            <NavLink to="/courses" className={({ isActive }) => (isActive ? activeClassName : linkClassName)}>
              Khóa học
            </NavLink>
            <NavLink to="/community" className={({ isActive }) => (isActive ? activeClassName : linkClassName)}>
              Cộng đồng
            </NavLink>
            <NavLink to="/ranking" className={({ isActive }) => (isActive ? activeClassName : linkClassName)}>
              Vinh danh
            </NavLink>
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
