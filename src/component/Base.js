import React from "react";
import avatarImg from "../icons/image-avatar.jpg";
import sunIcon from "../icons/icon-sun.svg";
import logoSvg from "../icons/logo.svg";

function Base() {
  return (
    <div className="bg-sidebar h-full w-20  fixed rounded-r-lg items-center z-50">
      <div className="fixed top-0 bg-blue-500 w-20 p-5">
        <img src={logoSvg} />
      </div>
      <div className="fixed bottom-3  border-white width-20   ">
        <img src={sunIcon} className="ml-7 mb-4"></img>
        <div className="border-t border-white w-20 mb-4"></div>
        <img src={avatarImg} className="rounded-full w-10 ml-4" />
      </div>
    </div>
  );
}

export default Base;
