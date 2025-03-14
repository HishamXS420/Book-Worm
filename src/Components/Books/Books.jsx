import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

    const [books,setBooks] = useState([]);

    useEffect(() => {
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
// Dependency [] => useEffect এর ভেতরের function একবারই call করা হবে যখন component টা load হবে 


    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Books</h2>
            <p>{books.length}</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-6">
                {/*  Responsive করার class এখানে বসাতে হবে  */}
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                    // অনেকগুলা বই থেকে একটা বই নিয়ে বই নামক component এ পাঠাইলাম এবং নাম ও দিলাম বই 
                }

            </div>
        </div>
    );
};

export default Books;

// 1. State to Store Books
// 2. UseEffect
// 3. fetch to load the data
// 4. set the data to the books state