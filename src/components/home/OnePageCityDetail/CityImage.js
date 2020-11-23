import React, { useState, useEffect } from "react";
import axios from "axios";

function CityImage(props) {
  const [state, setState] = useState({ image: "", photographer: "" });

  useEffect(() => {
    async function findImage() {
      const response = await axios.get(
        `https://api.teleport.org/api/urban_areas/slug:${props.city}/images/`
      );
      setState({
        image: response.data.photos[0].image.web,
        photographer: response.data.photos[0].attribution.photographer,
      });
    }
    findImage();
  }, [props.city]);

  return (
    <div>
      <img className="w-100" src={`${state.image}`} alt="City" />
    </div>
  );
}

export default CityImage;
