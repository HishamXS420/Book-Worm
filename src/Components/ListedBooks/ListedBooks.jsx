import { useEffect,useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../Utility/AddtoDB";
import Book from "../Book/Book";

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);

    const allBooks = useLoaderData(); // ID গূলো সংখ্যা আকারে থাকবে

   {/* Ideal Case: এই component এ এসে, যে যে information দরকার , সেটার জন্য database কে call করলেই database সেগুলো দিয়ে দিবে */}

   // Outside এর কিছু একটা জিনিস আনতেছি, তাই side effect
   useEffect(() => {
    const storedReadList = getStoredReadList(); // ID
    const storedReadListInt = storedReadList.map(id => parseInt(id));
    //  গূলো String আকারে থাকবে

    // worst day

    const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
    
    setReadList(readBookList);

   },[])


  return (
    <div>
      <h2 className="text-2xl font-semibold my-8 text-center">
        Listed Books will appear here
      </h2>

   
      {/* নিচের গুলো কখনোই use করবোনা , বুঝার দরকার নাই */}

      <Tabs>
        <TabList className="text-center">
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-3xl m-16 text-center">Book I read {readList.length}</h2>
          <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1">
          {
            readList.map(book => <Book key={book.bookId} book={book}></Book>  )
          }
          </div>
          
        </TabPanel>
        <TabPanel>
          <h2 className="text-3xl m-16 text-center">My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
