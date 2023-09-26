
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../../utility/localStorage";
import { useEffect, useState } from "react";
import ShowDonation from "../ShowDonation/ShowDonation";

const Donation = () => {
    const name = useLoaderData();
    const [showDon, setShowDon]=useState([]);
    
    useEffect(()=>{
    const storageData = getStoredDonations();
    
        const doneDonation = name.filter(done => storageData.includes(done.id));
        setShowDon(doneDonation);
        // console.log(donationss, storageData,doneDonation);
    },[]);
    
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 px-36 gap-5">
            {
                showDon.map(show => <ShowDonation show={show}></ShowDonation>)
            }
        </div>
    );
};

export default Donation;