import { useState } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [bookmarked, setBookMarked] = useState([]);

  const handleBookMark = (blog) => {
    setBookMarked([...bookmarked, blog]);
  };

  const [readingCount, setReadingCount] = useState(0);

  const handleMarlAsRead = (time, id) => {
    const newTime = readingCount + time;
    setReadingCount(newTime);
    handleRemoveFromBookmark(id);
  };

  const handleRemoveFromBookmark = (id) => {
    const remainingBookMark = bookmarked.filter((mark) => mark.id !== id);
    setBookMarked(remainingBookMark);
  };

  //console.log(readingCount);

  //console.log(bookmarked);
  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs
            handleBookMark={handleBookMark}
            handleMarlAsRead={handleMarlAsRead}
          ></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h1>Reading time :{readingCount}</h1>
          <h1>bookmarked count :{bookmarked.length}</h1>

          {bookmarked.map((marked) => (
            <p className="bg-red-200 p-2 shadow m-2 text-white">
              {marked.title}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
