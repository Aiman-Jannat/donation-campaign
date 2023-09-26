import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../banner/Banner";
import ShowOnHome from "../ShowDonaionOnHome/ShowOnHome";
import { useState } from "react";


const Home = () => {
    const donations = useLoaderData();
    const [dataSpecify, setHandleInput] = useState('All');
    let setShown = [];
    
    
    
    const handleInput =input=> {
            setHandleInput(input);
    }
   

   if(dataSpecify=='All'){
    const show = donations;
    setShown=show;
    }
   else{
    const show = donations.filter(donate => donate.category==dataSpecify);
    setShown = show;
    }
   
    return (
        <div>
            <Banner handleInput={handleInput} className="mb-8"></Banner>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-24 md:px-10 lg:px-36 mt-24" >
                {
                setShown.map(donation => <ShowOnHome key={donation.id} donation = {donation}></ShowOnHome>)
                }
            </div>


        </div>

    );
};

export default Home;