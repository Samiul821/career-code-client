import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-600"></div>
    </div>
  );
};

export default Loading;
