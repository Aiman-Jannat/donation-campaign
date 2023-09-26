import { PieChart, Pie, Cell, Tooltip, Legend, Label } from 'recharts';
import { getStoredDonations } from "../../utility/localStorage";

import { useLoaderData } from "react-router-dom";
import './static.css';




const Statistics = () => {
    
    const have = useLoaderData();
    const local = getStoredDonations();
    let percen1 = (parseFloat(local.length)/parseFloat(have.length))*100;
    let percen2 = 100-percen1;
    // console.log(percen1, percen2);
    const COLORS = ['#FF444A', '#00C49F'];
    const data1 = [
        { "percentage": percen1,
        "Name": 'Your Donation'
    },
        {"percentage": percen2,
        "Name": 'Total Donation'
    }
]
        
        
       
    
    // const data2 = [
    //     { "percentage": percen2 }

        
       
    // ];
    
    
    
    return (
        <div>
            <PieChart width={700} height={700} className='mx-auto border-3'>
            <Pie
          data={data1} 
          dataKey="percentage"
          className='border-red-500 border-2 recharts-pie-sector'
          
          outerRadius={250} 
          fill="#FF444A"
          
        >
        {
        data1.map((entry, index) =><Cell fill={COLORS[index % COLORS.length]}/>)
        }
        
        
        </Pie>
        </PieChart>
        <div className='flex gap-8 justify-center items-center'>
        <div className='flex gap-3 items-center' >
            <div className='bg-[#FF444A] h-4 w-12 '>

            </div>
            <p className='font-bold'>{data1[0].Name} ({data1[0].percentage}%)</p>
        </div>
        <div className='flex gap-3 items-center'>
            <div className='bg-[#00C49F] h-4 w-12 '>

            </div>
            <p className='font-bold'>{data1[1].Name} ({data1[1].percentage}%)</p>
        </div>
        </div>
           
        </div>
    );
};

export default Statistics;