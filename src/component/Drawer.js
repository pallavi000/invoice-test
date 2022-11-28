import React from "react";

function Drawer({ show, setShow, Component, id }) {
  return (
    <>
      <div
        className={`top-0 w-[50vw] bg-drawer  p-10 pl-20 text-white fixed h-full overflow-y-auto z-40 ease-in-out duration-300 ${
          show ? "translate-x-0 left-20" : "-translate-x-full left-0"
        }`}
      >
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-5 top-1 z-50"
          onClick={() => setShow(!show)}
        >
          x
        </button>
        <Component id={id} setShow={setShow} />
      </div>
    </>
  );
}

export default Drawer;
