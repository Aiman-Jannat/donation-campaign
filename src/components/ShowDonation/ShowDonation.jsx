import { useNavigate } from "react-router-dom";


const ShowDonation = ({show}) => {
    const {id, picture,title,category,color_category_bg, color_card_bg, color_text, description, price} = show;
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
   const btnBack={
    backgroundColor: color_text,
   };
    return (
        <div>
            <div style={cardBack } className={`flex  rounded-lg 
            justify-start gap-6  h-fit   `}>
  <figure><img src={picture}  className="h-full w-56 rounded-s-lg"/></figure>
  <div className="text-left flex items-center py-3">
    <div>
    <div style={categoryBack} className={` w-fit mt-1 rounded-md`}>
    <h2 style={texttColor} className={`card-title py-1 px-5 text-sm  font-bold`}>{category}</h2>
    </div>
    <p className="text-black font-bold text-xl mt-1">{title}</p>
    <p style={texttColor} className={`    text-sm mt-1 font-bold`}>${price}</p>
      <button style={btnBack} onClick={handleDetails} className={`  py-1 px-4 mt-1 rounded-sm text-white font-semibold border-none `}>View Details</button>
      </div>
  </div>
</div>
        </div>
    );
};

export default ShowDonation;