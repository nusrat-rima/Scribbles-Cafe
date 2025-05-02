import React from 'react';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleBookMark, handleMarlAsRead }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={blog.cover} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="author flex justify-around items-center">
            <h3>{blog.author}</h3>
            <img className="w-16" src={blog.author_img}></img>
            <button onClick={() => handleBookMark(blog)}>
              <FaBookmark size={25} />
            </button>
          </div>
          <h2 className="card-title">{blog.title}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="flex">
            {blog.hashtags.map((has) => (
              <p>{has}</p>
            ))}
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleMarlAsRead(blog.reading_time)}
              className="btn btn-primary "
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
