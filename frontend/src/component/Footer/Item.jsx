import React from "react";
import { Link } from "react-router-dom";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 text-lg text-white font-semibold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <Link
            className="text-white hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
            to={link.url}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Item;
