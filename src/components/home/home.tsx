import { Button } from "antd";
import SimpleSlider from "./Slider";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-white ">
      <div className=" object-bottom overflow-hidden min-h-screen bg-center	 bg-cover bg-[url('https://images.unsplash.com/photo-1513223945279-4bf9e7049c9d?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <h1 className="flex font-extrabold text-7xl pt-[175px] items-center justify-center text-white	">
          Discover Restuarant And Food
        </h1>
        <h1 className="flex font-mono text-2xl text-white pt-2 items-center justify-center">
          Only quality Restaurant
        </h1>
        <div className="flex items-center justify-center mt-5">
          <Button
            type="default"
            size={"large"}
            className="bg-white text-black "
          >
            <Link to={"/login"}>Restaurant</Link>
          </Button>
          <Button
            type="default"
            size={"large"}
            className="bg-white text-black ml-2	"
          >
            <Link to={"/login"}>Adding Res</Link>
          </Button>
        </div>
      </div>
      <SimpleSlider />

      {/* <div className="w-full h-[800px] items-center justify-center rounded-full bg-cover bg-[url('https://images.unsplash.com/photo-1524062008239-962eb6d3383d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <h1 className="flex font-extrabold text-4xl text-gray-800 pt-[130px] items-center justify-center">
          Our Best Popular Recipes
        </h1>
        <hr className="w-48 h-1 mx-auto my-4 bg-red-800 border-0 rounded md:my-6 dark:bg-gray-700" />
        <div className="flex space-x-24 pt-13 items-center justify-center ">
          <div>
            <img
              className="rounded-l-full object-cover w-[400px] h-[500px]"
              src="https://images.unsplash.com/photo-1597345637412-9fd611e758f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
            <div className="flex pl-20 pt-3   items-center justify-center text-violet-950 font-bold italic text-4xl">
              Bún Bò
            </div>
          </div>
          <div>
            <img
              className=" rounded-l-full object-cover w-[400px] h-[500px]"
              src="https://images.unsplash.com/photo-1562828171-c322fe9a9877?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
            <div className="flex pl-20 pt-3   items-center justify-center text-violet-700 font-bold italic text-4xl">
              Bún Chả
            </div>
          </div>
          <div>
            <img
              className="rounded-l-full object-cover w-[400px] h-[500px]"
              src="https://images.unsplash.com/photo-1594020293008-5f99f60bd4d7?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
            <div className="flex pl-20 pt-3   items-center justify-center text-violet-700 font-bold italic text-4xl">
              Gỏi Cuốn
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
