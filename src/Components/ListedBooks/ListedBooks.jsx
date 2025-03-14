import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../Utility/AddtoDB";
import Book from "../Book/Book";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  const allBooks = useLoaderData(); // ID গূলো সংখ্যা আকারে থাকবে

  {
    /* Ideal Case: এই component এ এসে, যে যে information দরকার , সেটার জন্য database কে call করলেই database সেগুলো দিয়ে দিবে */
  }

  // Outside এর কিছু একটা জিনিস আনতেছি, তাই side effect
  useEffect(() => {
    const storedReadList = getStoredReadList(); // ID
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    //  গূলো String আকারে থাকবে

    // worst day

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    setReadList(readBookList);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);

    // Readlist copy করে তারপর সেগুলোকে compare function এর মাধ্যমে ascending/descending order এ sort করবে।

    if (sortType === "No of Pages") {
      const sortedReadList = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      // Compare function এর মাধ্যমে ASCENDING ORDER এ sorting করা হচ্ছে
      setReadList(sortedReadList);
    }

    if (sortType === "Ratings") {
      const sortedReadList = [...readList].sort((a, b) => b.rating - a.rating);
      // Compare function এর মাধ্যমে DESCENDING ORDER এ sorting করা হচ্ছে
      setReadList(sortedReadList);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold my-8 text-center">
        Listed Books will appear here
      </h2>

      <div className="text-center mb-12">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 ">
            {sort ? `Sort by ${sort}` : "Sort by"}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => handleSort(`Ratings`)}>
              <a>Ratings</a>
            </li>
            <li onClick={() => handleSort(`No of Pages`)}>
              <a>No of Pages</a>
            </li>
          </ul>
        </div>
      </div>

      {/* নিচের গুলো কখনোই use করবোনা , বুঝার দরকার নাই */}

      <Tabs>
        <TabList className="text-center">
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-3xl m-16 text-center">
            Book I read {readList.length}
          </h2>
          <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1">
            {readList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
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
