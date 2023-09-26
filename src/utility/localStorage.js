
const getStoredDonations = () =>{
  const storedDonations = localStorage.getItem('donations');
  if(storedDonations)
  {
    return JSON.parse(storedDonations);
  }
  return [];
}


const saveDataLocalStorage = id =>{
    const storedAllDonations = getStoredDonations();
    const exist = storedAllDonations.find(donId => donId==id);
    if(!exist)
    {
        storedAllDonations.push(id);
        localStorage.setItem('donations', JSON.stringify(storedAllDonations));
    }
}
export {saveDataLocalStorage,getStoredDonations};