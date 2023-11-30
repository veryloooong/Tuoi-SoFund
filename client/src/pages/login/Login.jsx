import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginBannerImg from "/src/images/login-banner.jpg";

const Login = () => {
  // for funny css
  const [isLogin, setLogin] = useState(true);

  // login fields
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // signup fields
  const [name, setName] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  
  // validators
  const [validUsernameMsg, setValidUsernameMsg] = useState("");
  const [validPasswordMsg, setValidPasswordMsg] = useState("");
  const [matchingPassword, setMatchingPassword] = useState(true);

  // Tailwind classes
  const inputClass = "h-12 w-full rounded border-gray-300 border-2 px-4 py-2 ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-palette3";
  const textHoverClass = "italic hover:text-palette2 transition-colors"
  const tabClass = "h-full w-full bg-palette5 flex items-center justify-center text-black font-bold rounded-2xl transition-colors";
  const tabActiveClass = "h-full w-full bg-palette1 flex items-center justify-center text-white font-bold transition-colors " + (isLogin ? "rounded-l-2xl" : "rounded-r-2xl");
  
  const navigate = useNavigate();

  // handle submit event
  function handleSubmit(event) {
    event.preventDefault();
    
    // TODO: handle login logic
    if (matchingPassword) {
      navigate("/todo");
      return true;
    } else {
      return false;
    }
  }
  
  // refresh all input
  function refreshAll() {
    setName("");
    setNewUsername("");
    setUsername("");
    setEmail("");
    setPassword("");
    setNewPassword("");
    setRepeatPassword("");
  }

  // check on login
  function validateUsername() {
    // length
    if (newUsername.length < 8) {
      setValidUsernameMsg("Tên đăng nhập quá ngắn");
      return;
    }
    if (newUsername.length > 30) {
      setValidUsernameMsg("Tên đăng nhập quá dài");
      return;
    }
    // regex (alphanumerics only)
    if (!/^[A-Za-z0-9]+$/.test(newUsername)) {
      setValidUsernameMsg("Tên chỉ bao gồm chữ và số");
      return;
    }

    setValidUsernameMsg("");
  }
  
  // validate password
  function validatePassword() {
    // digit / upper / lower / special
    if (!/(?=.*\d+)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*]).*/.test(newPassword)) {
      setValidPasswordMsg("Mật khẩu chưa phù hợp");
    } else {
      setValidPasswordMsg("");
    }
  }
  
  // warning message
  // TODO: fix
  function matchPasswords() {
    setMatchingPassword((newPassword === repeatPassword));
  }
  
  return (<div className="flex flex-col items-center justify-center bg-gray-400 h-screen">
    <img src={LoginBannerImg} alt="" className="object-cover min-h-full absolute z-0 brightness-50" />
    <div className="bg-[rgba(209,213,219,0.8)] w-3/4 lg:w-1/2 xl:w-1/3 max-w-xl p-10 rounded-xl align-middle z-10">
      <ul className="grid grid-cols-2 place-items-center rounded-2xl h-12 bg-palette5">
        <li className={isLogin ? tabActiveClass : tabClass}><a href="#login" onClick={() => {setLogin(true); refreshAll()}} className="w-full h-full flex justify-center items-center">Đăng nhập</a></li>
        <li className={isLogin ? tabClass : tabActiveClass}><a href="#signup" onClick={() => {setLogin(false); refreshAll()}} className="w-full h-full flex justify-center items-center">Đăng ký</a></li>
      </ul>
      <br />
      {isLogin ? (
      // TODO: funny icons
      <form onSubmit={handleSubmit} method="POST" className="flex flex-col items-center gap-3">
        <label htmlFor="username" className="hidden">Tên đăng nhập</label>
        <input id="username" className={inputClass} type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Tên đăng nhập / Email" required />

        <label htmlFor="password" className="hidden">Mật khẩu</label>
        <input id="password" className={inputClass} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mật khẩu" minLength="8" required />

        <div className="flex flex-col lg:flex-row w-full gap-4 lg:justify-between">
          <p className={textHoverClass}><a href="/todo">Quên mật khẩu?</a></p>
        </div>

        <button className="w-full bg-palette2 text-white hover:text-palette5 font-bold py-2 px-4 rounded transition-colors duration-300" type="submit">Đăng nhập</button>
      </form>
      ) : (
      <form onSubmit={handleSubmit} method="POST" className="flex flex-col items-center gap-3">
        <label htmlFor="name" className="hidden">Họ tên</label>
        <input id="name" className={inputClass} type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Họ tên" autoComplete="true" required />

        <label htmlFor="newUsername" className="hidden">Tên đăng nhập</label>
        <input id="newUsername" className={inputClass} type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} onKeyUp={validateUsername} placeholder="Tên đăng nhập" minLength="8" maxLength="30" required />
        <p className="self-start text-red-400 empty:hidden">{validUsernameMsg}</p>

        <label htmlFor="email" className="hidden">Tên đăng nhập</label>
        <input id="email" className={inputClass} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />

        <label htmlFor="newPassword" className="hidden">Mật khẩu</label>
        <input id="newPassword" className={inputClass} type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} onKeyUp={() => {matchPasswords(); validatePassword()}} placeholder="Mật khẩu" minLength="8" required />
        <p className="self-start text-red-400 empty:hidden">{validPasswordMsg}</p>

        <ul className="self-start list-disc">
          <p>Đặt mật khẩu an toàn bao gồm:</p>
          <li className="ml-6">Ít nhất 8 ký tự</li>
          <li className="ml-6">Ít nhất 1 chữ in hoa, 1 chữ in thường</li>
          <li className="ml-6">Ít nhất 1 số, 1 ký tự đặc biệt <span className="font-bold">(!@#$%^&*)</span></li>
        </ul>

        <label htmlFor="repeatPassword" className="hidden">Xác nhận mật khẩu</label>
        <input id="repeatPassword" className={inputClass} type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} onKeyUp={matchPasswords} placeholder="Xác nhận mật khẩu" minLength="8" required />
        <p className="self-start text-red-400 empty:hidden">{matchingPassword ? "" : "Mật khẩu không khớp"}</p>

        <div className="self-start flex flex-row gap-3">
          <input id="terms" type="checkbox" required />
          <label htmlFor="terms">Tôi đồng ý với <a className="underline text-palette2" href="/terms" target="_blank">Chính sách sử dụng</a> của Tưới.</label>
        </div>

        <button className="w-full bg-palette2 text-white hover:text-palette5 font-bold py-2 px-4 rounded transition-colors duration-300" type="submit">Đăng ký</button>
      </form>
      ) }
    </div>
  </div>)
}

export default Login;