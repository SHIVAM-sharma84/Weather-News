import { useEffect, useState } from "react";
import axios from "axios";

function PexelsImage(props) {
    // console.log(props.data);
    let temp = (props.data);
    // Initialize with a default value to prevent undefined errors in your UI
const [inx, setInx] = useState(0); 
// console.log(temp);


const getInd = () => {
    const val = Math.ceil(Math.random()); // 0 to 19 inclusive
    setInx(val);
    // console.log(val);
    
};


  const [image, setImage] = useState(null);

  useEffect(() => {
    const getImage = async () => {
      try {
        const response = await axios.get(
          "https://api.pexels.com/v1/search",
          {
            headers: {
              Authorization: import.meta.env.VITE_VIDEO_API_KEY,
            },
            params: {
              query: temp,
              per_page: 10,
            },
          }
        );

        setImage(response.data.photos[inx]);
        // console.log(response.data.photos);
        
      } catch (error) {
        console.log(error);
      }
    };

    getImage();
    if(temp ){
      getInd();
    }
}, [temp]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {image && (
        <img
          src={image.src.large2x}
          alt={image.alt}
          className="fixed top-0 left-0 w-full h-full object-cover overflow-hidden"
        />
      )}
    </div>
  );
}

export default PexelsImage;