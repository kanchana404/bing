'use client';

import React from "react";

type PostUiProps = {
  title: string;
  description: string;
  label: string;
  like: string;
  comment: string;
};

const Postui: React.FC<PostUiProps> = ({
  title,
  description,
  label,
  like,
  comment,
}) => {
  const handleLikeClick = () => {
    alert(`Like: ${like}`);
  };

  const handleCommentClick = () => {
    alert(`Comment: ${comment}`);
  };

  return (
    <div className="block p-4">
      <div className="flex flex-col sm:flex-row sm:items-center">
        <h2 className="text-xl sm:text-2xl mt-2 sm:mt-6">{title}</h2>
        <div className="mt-3 sm:ml-4 sm:mt-5 flex">
          <button
            onClick={handleLikeClick}
            className="ml-2 bg-green-200 text-gray-700 p-2 rounded flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path d="M3.75 2a.75.75 0 0 0-.75.75v10.5a.75.75 0 0 0 1.28.53L8 10.06l3.72 3.72a.75.75 0 0 0 1.28-.53V2.75a.75.75 0 0 0-.75-.75h-8.5Z" />
            </svg>
            <span className="text-xs">{like}</span>
          </button>
          <button
            onClick={handleCommentClick}
            className="ml-2 bg-blue-300 text-gray-700 p-2 rounded flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path
                fillRule="evenodd"
                d="M8 2C4.262 2 1 4.57 1 8c0 1.86.98 3.486 2.455 4.566a3.472 3.472 0 0 1-.469 1.26.75.75 0 0 0 .713 1.14 6.961 6.961 0 0 0 3.06-1.06c.403.062.818.094 1.241.094 3.738 0 7-2.57 7-6s-3.262-6-7-6ZM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs">{comment}</span>
          </button>
          <button className="ml-2 bg-red-300 text-gray-700 p-2 rounded flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path d="M12 6a2 2 0 1 0-1.994-1.842L5.323 6.5a2 2 0 1 0 0 3l4.683 2.342a2 2 0 1 0 .67-1.342L5.995 8.158a2.03 2.03 0 0 0 0-.316L10.677 5.5c.353.311.816.5 1.323.5Z" />
            </svg>
            <span className="text-xs">Share</span>
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
    </div>
  );
};

export default Postui;
