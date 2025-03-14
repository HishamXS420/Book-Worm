import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredReadList } from '../Utility/AddtoDB';

const BookDetail = () => {

  

    // Params দিয়ে dynamic ভাবে bookId নিয়ে ফেলা 
    const {bookId} = useParams();
    const id = parseInt(bookId);
   
   // Bangla system param আনার (পরবরতীতে server side থেকে আনা হবে)
   const data = useLoaderData();

   // == use করা যাবে parse এর জায়গায় , কিন্তু উচিত না।
    const book = data.find(book => book.bookId === id)
    // console.log(book);

    const {bookId: currentBookId, image} = book;   
    // এভাবে যেকোনো সময় dynamic ভাবে variable এর নাম বদলানো যাবে  
            
    const handleMarkAsRead = (id) => {
        /*
        * 1. Understand what to Store Or Save: => আমি একাই পড়ব , তাই যেই বইটা পড়সি শুধু সেটার id রাখবো
        * 2. Where to Store -> Database
        * 3. Array/List/Collection
        * 4. Check if the book is already in the read list
        * 5. If not, then add the book to the list
        * 6. If yes, Do not add the book
        * 
         */
        addToStoredReadList(id);
    }




    return (
        <div className='ml-10 text-center flex flex-col justify-center'>
           
            <h2>Book Details : {currentBookId}</h2>
            <img className="w-36 m-6" src={image} alt="" />
            <br />
           
           
            <div className="flex gap-6 m-4">
             <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline btn-accent"> Mark As Read</button>
            <button className="btn  btn-accent">Add to Wishlist</button>
            </div>
            
           
        </div>
    );
};

export default BookDetail;