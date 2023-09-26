import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="pb-2">
           <div className=" ">
  <div className="flex px-5 justify-between w-full py-2 ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 mr-5 z-[1] p-2   ">
        <NavLink to = "/" className={({ isActive}) =>
    isActive ? "text-[#FF444A] underline" : ""
  } >Home</NavLink>
        <NavLink to = '/donation' className={({ isActive}) =>   
    isActive ? "text-[#FF444A] underline" : ""
  } >Donation</NavLink>
        <NavLink to = '/statistics' className={({ isActive}) =>
    isActive ? "text-[#FF444A] underline" : ""
  }>Statistics</NavLink>
        
      </ul>
    </div>
    <img className="lg:hidden h-10 " src="/src/assets/Logo.png" alt="" />
  </div>
  <div className=" hidden lg:flex h-10 font-bold justify-between py-2 items-center flex-row-reverse px-36 ">
    <ul className="flex gap-5 text-sm  ">
    <NavLink to='/' className={({ isActive}) =>
    isActive ? "text-[#FF444A] underline" : ""
  } >Home</NavLink>
        <NavLink to = '/donation' className={({ isActive}) =>
    isActive ? "text-[#FF444A] underline" : ""
  } >Donation</NavLink>
        <NavLink to = '/statistics' className={({ isActive}) =>
    isActive ? "text-[#FF444A] underline" : ""
  }>Statistics</NavLink>
    </ul>
    <img className="h-10" src="/src/assets/Logo.png" alt="" />
  </div>
  
</div> 
        </div>
    );
};

export default Header;