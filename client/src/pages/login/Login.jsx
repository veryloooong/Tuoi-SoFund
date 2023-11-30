import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginBannerImg from "/src/images/login-banner.jpg";

const Login = () => {
  const inputClass = "h-12 w-full rounded border-gray-300 border-2 px-4 py-2 ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-palette3";
  const textHoverClass = "italic hover:text-palette2 transition-colors"

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    
    // TODO: handle login logic
    navigate("/todo");
  }
  
  return (<div className="flex flex-col items-center justify-center bg-gray-400 h-screen">
    <img src={LoginBannerImg} alt="" className="object-cover min-h-full absolute z-0 brightness-50" />
    <div className="bg-[rgba(209,213,219,0.8)] w-1/3 max-w-xl p-10 rounded-xl align-middle z-10">
      <h1 className="font-bold text-2xl text-palette2">Đăng nhập</h1>
      <br />
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3">
        <label htmlFor="username" className="hidden">Tên đăng nhập</label>
        <input id="username" className={inputClass} type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Tên đăng nhập / Email" required />
        <label htmlFor="password" className="hidden">Mật khẩu</label>
        <input id="password" className={inputClass} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mật khẩu" minLength="8" required />
        <div className="flex flex-col lg:flex-row w-full gap-4 lg:justify-between">
          <p className={textHoverClass}><a href="/todo">Đăng ký</a></p>
          <p className={textHoverClass}><a href="/todo">Quên mật khẩu?</a></p>
        </div>
        <button className="w-full bg-palette2 text-white hover:text-palette5 font-bold py-2 px-4 rounded transition-colors duration-300" type="submit">Đăng nhập</button>
      </form>
    </div>
  </div>)
}

export default Login;