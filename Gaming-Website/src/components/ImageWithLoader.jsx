import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';  

const ImageWithLoader = ({ src, alt, className }) => {
  const [loading, setLoading] = useState(true);  

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center">
          <ClipLoader color="#36d7b7" size={50} /> {}
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}  
        className={`${className} ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}  
      />
    </div>
  );
};

export default ImageWithLoader;
