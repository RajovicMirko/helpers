import React from "react";

function Header() {
  return (
    <header className="bg-primary text-white px-3 py-2 flex flex-align-center flex-justify-between">
      <span className="m-0 h5">Banner</span>
      <ul className="list flex m-0">
        <li className="ml-4">
          <a href="/" className="text-white">
            Test 1
          </a>
        </li>
        <li className="ml-4">
          <a href="/" className="text-white">
            Test 2
          </a>
        </li>
        <li className="ml-4">
          <a href="/" className="text-white">
            Test 3
          </a>
        </li>
        <li className="ml-4">
          <a href="/" className="text-white">
            Test 4
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
