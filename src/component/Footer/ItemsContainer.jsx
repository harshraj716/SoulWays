import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT, Icons } from "../../CommomData/index";
import { Link } from "react-router-dom";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4  gap-6 sm:px-8 lg:ml-[5rem] px-5 py-16">
        <div className="flex flex-col gap-5">
        <Link href={"/"} className="text-purple-600 text-xl ml-3 font-semibold">
         SoulWays
        </Link>
        <div className="text-teal-500">
          {Icons.map((icon) => (
            <span
              key={icon.name}
              className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
            >
              <icon.icon  fill="currentColor" />
            </span>
          ))}
        </div>
        </div>

      <Item Links={COMPANY} title="Links" />
      <Item Links={SUPPORT} title="SUPPORT" />
      <nav className="flex flex-col gap-2 justify-start ">
        <h1 className="text-gray-800 text-lg font-bold">Contact Details</h1>
          <ul className="flex flex-col text-gray-600 cursor-pointer gap-1 ">
             <li className="hover:text-gray-400">soalways@support.com</li>
             <li className="hover:text-gray-400">7007263566</li>
          </ul>
        </nav>
    </div>
  );
};

export default ItemsContainer;
