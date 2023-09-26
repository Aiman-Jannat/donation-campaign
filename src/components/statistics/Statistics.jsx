import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { getStoredDonations } from "../../utility/localStorage";

import { useLoaderData } from "react-router-dom";




const Statistics = () => {
    
    const have = useLoaderData();
    const local = getStoredDonations();
    let percen1 = (parseFloat(local.length)/parseFloat(have.length))*100;
    let percen2 = 100-percen1;
    // console.log(percen1, percen2);
    const COLORS = ['#FF444A', '#00C49F'];
    const data1 = [
        { "percentage": percen1,
        "Name": 'Donation by me'
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
            <PieChart width={700} height={700} className='mx-auto'>
            <Pie
          data={data1} 
          dataKey="percentage"
          
          
          outerRadius={250} 
          fill="#FF444A"
          
        >
        {
        data1.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
        }
        {percen1}
        </Pie>
        </PieChart>
           
        </div>
    );
};

export default Statistics;