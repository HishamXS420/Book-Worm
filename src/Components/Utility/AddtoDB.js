import { toast } from "react-toastify";

const getStoredReadList = () => {
   const storedListStr = localStorage.getItem('read-list');

   if(storedListStr){
    const storedList = JSON.parse(storedListStr);
    return storedList;
   }
   else{
    return [];
   }
}
const getStoredWishList = () => {
   const storedListStr = localStorage.getItem('wish-list');

   if(storedListStr){
    const storedList = JSON.parse(storedListStr);
    return storedList;
   }
   else{
    return [];
   }
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if(storedList.includes(id)){


        console.log(id,'already exists in the read')
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        // Ideally trigger toast from the component
        toast('This book is added to your read list');
        
    }
}


const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if(storedList.includes(id)){


        console.log(id,'already exists in the read')
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        toast('This book is added to your wish list');
    }
}

export {addToStoredReadList, addToStoredWishList ,getStoredReadList}
// Local storage এ event handler এর মাধ্যমে Add করা।