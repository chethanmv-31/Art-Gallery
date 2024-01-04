import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./Cards/ProductCard";

function Arts() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.artic.edu/api/v1/products?page=1?limit=100"
        ); // Replace with your API endpoint
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("data", data);
  return (
    <div className="row row-cols-1 row-cols-md-4 container-fluid my-4">
      {data?.data?.map((item, index) => (
        <div key={index}>
          <ProductCard
            image={item?.image_url}
            title={item?.title}
            price={item?.price_display}
          />
        </div>
      ))}
    </div>
  );
}

export default Arts;
