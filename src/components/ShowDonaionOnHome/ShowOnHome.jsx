import { useNavigate } from "react-router-dom";
import ShowDetails from "../dynamicDetails/ShowDetails";

const ShowOnHome = ({donation}) => {
    const {id, picture,title,category,color_category_bg, color_card_bg, color_text, description, price} = donation;
    const navigate = useNavigate();
    
    const handleDetails = () =>{

      navigate(`/donations/${id}`);
  }
  const cardBack = {
    backgroundColor: color_card_bg,
    
  };
  const categoryBack={
    backgroundColor: color_category_bg,
  };
  const texttColor={
    color: color_text,
  };

    return (
        <div >
            <div onClick={handleDetails} style={cardBack} className={`card  h-fit rounded-md`}>
  <figure><img src={picture}  className="h-40 w-full mb-0 " /></figure>
  <div className=" p-2">
    <div style={categoryBack} className={` w-fit mt-1 rounded-md`}>
    <h2 style={texttColor} className={`card-title  py-1 px-5 text-sm  font-bold`}>{category}</h2>
    </div>
    <p style={texttColor} className={`font-bold mt-4  text-base`}>{title}</p>
    
  </div>
</div>
            
        </div>
    );
};

export default ShowOnHome;