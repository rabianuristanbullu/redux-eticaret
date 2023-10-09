import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
  
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-200 ">
          <div>
            <div className="text-5xl font font-bold">
              <h1 >En Kaliteli Ürünler İçin....</h1>
            </div>
            <div className="text-lg my-4 ">
              <p className="text-[#c3c1bf]">
                Now that we've covered the daily skincare routine, you may be
                wondering what products to add to your arsenal. This is perhaps
                the most important part. Although advanced digital technologies
                and marketing tools are working in the background to influence
                your purchase decisions, a user must be careful about the kinds
                of ingredients that go inside these skincare products.
              </p>
            </div>
            <div className="border rounded-full cursor-pointe bg-[#ded9d4] text-3xl w-[200px] h-16 flex justify-center items-center">
                İncele...
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/8101525/pexels-photo-8101525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-200 "> 
          <img
            src="https://images.pexels.com/photos/8102130/pexels-photo-8102130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
             <div>
            <div className="text-5xl font font-bold">
              <h1 >We care about your skin...</h1>
            </div>
            <div className="text-lg my-4 ">
              <p className="text-[#c3c1bf]">
                Now that we've covered the daily skincare routine, you may be
                wondering what products to add to your arsenal. This is perhaps
                the most important part. Although advanced digital technologies
                and marketing tools are working in the background to influence
                your purchase decisions, a user must be careful about the kinds
                of ingredients that go inside these skincare products.
              </p>
            </div>
            <div className="border rounded-full cursor-pointe bg-[#ded9d4] text-3xl w-[200px] h-16 flex justify-center items-center">
                İncele...
            </div>
          </div>
         
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
