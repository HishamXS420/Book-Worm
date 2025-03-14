import { Link } from "react-router";

const Book = ({ book }) => {
  const {bookId, image, bookName, author, tags, category ,rating} = book;

  return (
    // এগুলোর media query / responsive করতে হলে সেটা parent এ করতে হবে

    // NavLink ব্যবহার হয়নি কারণ active status দেখাবো না
  
    <Link to={`books/${bookId}`}>
    <div className="card bg-base-100 w-96 shadow-sm p-6">
      <figure className="bg-gray-500 py-8 rounded-2xl">
        <img
          className="h-[166px]"
          // কোনো random height দিতে হলে [] এর মধ্যে দিয়ে লিখতে হবে
          src={image}
          alt={bookName}
        />
      </figure>
      <div className="card-body">
        {/* <button className="btn btn-xs">Tiny</button> */}
        {/* এভাবে না লিখে dynamic ভাবে tag গুলো দেখাতে হবে */}
        <div className="flex gap-4">
          {tags.map((tag,index) => (
            <button
            key={index}
            className="btn btn-xs bg-green-200 text-green-900 rounded-2xl">
              {tag}
            </button>
          ))}
        </div>

        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Published by: {author}</p>
        {/* Dotted underline used as a divider */}
        <div className="border-t-1 border-dashed my-4 text-gray-600"></div>

        <div className="card-actions justify-between">
          <div className="badge badge-outline">{category}</div>
          <div className="flex gap-2 items-center">
          <div className="rating">
            <div
              className="mask mask-star"
              aria-label="3 star"
              aria-current="true"
            ></div>
          </div>
          <div className="text-xl">
            {rating}
          </div>
          </div>
          
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;
