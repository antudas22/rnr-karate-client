import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around mt-5 lg:mt-20 gap-5 lg:gap-6 p-7 md:p-10 lg:p-0">
      <div className="card lg:w-96 bg-cyan-300 shadow-xl cursor-pointer transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-700">
        <div className="flex p-10 items-center gap-5 text-white">
          <div>
            <FaRegClock className="text-7xl" />
          </div>
          <div>
            <h2 className="card-title">Opening Hours</h2>
            <p>Open 9.00 am to 5.00 pm.</p>
          </div>
        </div>
      </div>
      <div className="card lg:w-96 bg-rose-300 shadow-xl cursor-pointer transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-700">
        <div className="flex p-10 items-center gap-5 text-white">
          <div>
            <FaMapMarkerAlt className="text-7xl" />
          </div>
          <div>
            <h2 className="card-title">Our Location</h2>
            <p>Charukola Institute, Sheikh Rasel Park, Narayanganj</p>
          </div>
        </div>
      </div>
      <div className="card lg:w-96 bg-amber-300 shadow-xl cursor-pointer transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-700">
        <div className="flex p-10 items-center gap-5 text-white">
          <div>
            <FaPhoneAlt className="text-7xl" />
          </div>
          <div>
            <h2 className="card-title">Contact Us</h2>
            <p>+880 1675-913288</p>
            <p>+880 1313-800323</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
