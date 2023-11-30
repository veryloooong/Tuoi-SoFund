// import React, { useState, useEffect } from "react";
import Logo from "../images/logo-bg.png";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer className="w-full min-h-[20vh] text-white p-5 lg:p-10 bg-palette2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div>
          <h2 className="text-2xl font-bold text-palette5">Về Tưới</h2>
          <br />
          <ul>
            <li>Ở đây có những link không thêm vào phần chính</li>
            <li>VD như ToS / chính sách</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-palette5">Liên hệ với chúng tôi</h2>
          <br />
          <ul>
            <li className="flex flex-row gap-3">
            <svg className="w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="000000">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"></rect>
              </g>
            </svg>
            <a href="mailto:hello@tuoisofund.id.vn">hello@tuoisofund.id.vn</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
