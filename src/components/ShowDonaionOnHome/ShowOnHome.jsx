import { useNavigate } from "react-router-dom";
import ShowDetails from "../dynamicDetails/ShowDetails";

const ShowOnHome = ({donation}) => {
    const {id, picture,title,category,color_category_bg, color_card_bg, color_text, description, price} = donation;
    const navigate = useNavigate();
    
    const handleDetails = () =>{

      navigate(`/donations/${id}`);
  }
    return (
        <div >
            <div onClick={handleDetails} className={`card ${color_card_bg} h-fit rounded-md`}>
  <figure><img src={picture}  className="h-40 w-full mb-0 " /></figure>
  <div className=" p-2">
    <div className={`${color_category_bg} w-fit mt-1 rounded-md`}>
    <h2 className={`card-title text-${color_text} py-1 px-5 text-sm  font-bold`}>{category}</h2>
    </div>
    <p className={`font-bold mt-4 text-${color_text} text-base`}>{title}</p>
    
  </div>
</div>
            
        </div>
    );
};

export default ShowOnHome;