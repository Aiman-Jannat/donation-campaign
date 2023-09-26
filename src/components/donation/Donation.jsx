
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../../utility/localStorage";
import { useEffect, useState } from "react";
import ShowDonation from "../ShowDonation/ShowDonation";

const Donation = () => {
    const name = useLoaderData();
    const [showDon, setShowDon]=useState([]);
    const [leng, setLeng] = useState(4);
    useEffect(()=>{
    const storageData = getStoredDonations();
    
        const doneDonation = name.filter(done => storageData.includes(done.id));
        setShowDon(doneDonation);
        // console.log(donationss, storageData,doneDonation);
    },[]);
    
    
    return (
        <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-36 gap-5 mt-10">
            {
                showDon.slice(0,leng).map(show => <ShowDonation show={show}></ShowDonation>)
            }
        </div>
        <div className={name.length<=leng && 'hidden'||'text-center mt-10'}>
        <button onClick={()=>setLeng(name.length)} className="text-white bg-[#009444] px-5 py-1 rounded-md">Show All</button>
        </div>
        </div>
    );
};

export default Donation;