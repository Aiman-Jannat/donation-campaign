import { useEffect, useState } from "react";


const Banner = ({handleInput}) => {
   
 let value;
    const handleInputData = e =>{
        e.preventDefault();
        value=e.target.value;
    }
    const handleFilter = () =>{
        handleInput(value);
    }
    return (
        
        <div className="relative">
            
            <div className="hero  h-96  " style={{backgroundImage:'url(https://www.cartyhouse.org/wp-content/uploads/2022/08/Neutral-Minimalist-Fashion-Model-Email-Signature-Twitter-Post-700x466.png)'}}>
                
  <div className=" absolute inset-0 bg-white opacity-90"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-2xl w-full text-black font-extrabold">I Grow By Helping People In Need</h1>
      <div className="px-5 flex h-16 justify-center w-full  ">
        
        <input onChange={handleInputData}
    type="text"
    className="border border-gray-300 text-black hover:border-none h-[40px] rounded-l-md px-4 border-r-0  "
    placeholder="Search Now..." 
  />
  <button onClick={handleFilter}  className="  text-white py-0  bg-[#FF444A] rounded-none h-[40px]  mr-0    w-16 rounded-r-md text-sm"  >Search</button>
    </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;