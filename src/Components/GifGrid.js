import React from "react";
// Components
import { GifGridItem } from "./GifGridItem";
// Helpers
import { getGifs } from "../helpers/getGifs";
// Hooks
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  //   const [images, setImages] = useState([]);

  //   useEffect(() => {
  //     getGifs(category).then(setImages);
  //   }, [category]);

  return (
    <>
      <h3 className="animate__animated animate__flash">{category}</h3>
      {loading && <p>Loading</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
