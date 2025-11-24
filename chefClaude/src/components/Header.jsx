import React from "react";

const Header = () => {
  return (
    <div className="bg-orange-500 text-white py-6 shadow-md flex flex-col items-center gap-4 rounded-lg">
      <img
        src="/images/chef-logo.webp"
        alt="logo"
        className="w-20 h-20 md:w-24 md:h-24 object-contain p-2px rounded-full bg-white ml-4"
      />
      <h1 className="text-4xl md:text-5xl font-extrabold text-center tracking-wide">
        Chef Claude
      </h1>
    </div>
  );
};

export default Header;
