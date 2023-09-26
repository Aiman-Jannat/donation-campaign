import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import './show.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { saveDataLocalStorage } from "../../utility/localStorage";


const ShowDetails = () => {
    const donations = useLoaderData();
    const {id} = useParams();
    // const [data, setData] = useState([]);
    const handleToast=()=>{
        saveDataLocalStorage(id);
        toast('Great!! data successfully added to local Storage...');
    }
    const specificData = donations.find(special => special.id==id);
    //console.log(specificData);
    return (
        <div>
            <div className="px-10  md:px-36 mt-10 relative">
                <img src={specificData.picture} className="w-full  relative rounded-lg " alt="" />
                </div>

            <div className=" glassy mx-10 md:mx-36 -mt-[85px] glassy  relative  rounded-b-md shadow-lg ">
                <button onClick={handleToast} className={`bg-${specificData.color_text} text-white my-3 md:my-5  ms-4 px-4 py-2  rounded-lg font-bold text-xl`}>Donate ${specificData.price}</button>
            </div>
            
            
            <h1 className="px-10 md:px-36 mt-8 text-3xl font-bold text-black">{specificData.title}</h1>
            <p className="px-10 md:px-36 my-8">{specificData.description}</p>
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default ShowDetails;
