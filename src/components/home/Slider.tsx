import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="pl-5 pt-[100px]  justify-center items-center mx-[100px]   ">
      <h1 className="flex font-extrabold text-7xl pb-[100px] items-center justify-center text-black">
        Something....
      </h1>

      <Slider {...settings}>
        <div className="flex pl-10">
          <img
            className="image w-[350px] h-[300px]  rounded-full overflow:hidden object-cover items-center justify-center   "
            src="https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></img>
        </div>
        <div className="flex pl-10">
          <h3>
            <img
              className=" image w-[350px] h-[300px] rounded-full overflow: hidden object-cover items-center justify-center   "
              src="https://images.unsplash.com/photo-1583077874340-79db6564672e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
          </h3>
        </div>
        <div className="flex pl-10">
          <h3>
            <img
              className=" image w-[350px] h-[300px] rounded-full overflow: hidden object-cover items-center justify-center   "
              src="https://images.unsplash.com/photo-1587899053914-4894c3ca656d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
          </h3>
        </div>
        <div className="flex pl-10">
          <h3>
            <img
              className=" image w-[350px] h-[300px] rounded-full overflow: hidden object-cover items-center justify-center   "
              src="https://images.unsplash.com/photo-1509072619873-adb3dc289b50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
          </h3>
        </div>
        <div className="flex pl-10">
          <h3>
            <img
              className=" image w-[350px] h-[300px] rounded-full overflow: hidden object-cover items-center justify-center   "
              src="https://images.unsplash.com/photo-1583579366799-7106fb626a54?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
          </h3>
        </div>
        <div className="flex pl-10">
          <h3>
            <img
              className=" image w-[350px] h-[300px] rounded-full overflow: hidden object-cover items-center justify-center   "
              src="https://images.unsplash.com/photo-1631709497146-a239ef373cf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
          </h3>
        </div>
        <div className="flex pl-10">
          <h3>
            <img
              className=" image w-[350px] h-[300px] rounded-full overflow: hidden object-cover items-center justify-center   "
              src="https://images.unsplash.com/photo-1645571059598-4f1f23df9a19?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
          </h3>
        </div>
        <div className="flex pl-10">
          <h3>
            <img
              className=" image w-[350px] h-[300px] rounded-full overflow: hidden object-cover items-center justify-center   "
              src="https://images.unsplash.com/photo-1594020292985-216a72a2c7ce?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
          </h3>
        </div>
        <div className="flex pl-10">
          <h3>
            <img
              className=" image w-[350px] h-[300px] rounded-full overflow: hidden object-cover items-center justify-center   "
              src="https://images.unsplash.com/photo-1619900950180-4a099c7aaeb1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
          </h3>
        </div>
      </Slider>
    </div>
  );
}
