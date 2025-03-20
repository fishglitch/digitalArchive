import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/Memory.css";

import { API_URL, defaultImage } from "../App";

const Memory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [memory, setMemory] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSingleMemory = async () => {
      try {
        const response = await fetch(`${API_URL}/memories/${id}`);
        if (!response.ok) {
          throw new Error("Error fetching memory data"); // Handle non-200 responses
        }
        // http://localhost:3000/api/memories/:memoryId
        const memoryData = await response.json();
        console.log("getOneMemory inspect!", memoryData); // Log fetched memory
        setMemory(memoryData); // Set data to state
      } catch (error) {
        console.error("Can't remember this memory...", error);
        setError(error);
      } finally {
        setLoading(false); // set to this state after fetch
      }
    };

    getSingleMemory();
  }, [id]);

  if (loading) {
    return <p>loading... </p>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log("Single Memory in Render:", memory);

  return (
    <div className="memories-container">
      {memory ? ( // Check if singleMemory is not null
        <div className="memory-item">
          <img
            src={memory.image_url || defaultImage}
            alt={`${memory.title} item of memory`}
          />
          <div className="memory-title">{memory.title}</div>
          <div className="memory-desc">"{memory.description}"</div>
        </div>
      ) : (
        <p>Can't remember!</p>
      )}
    </div>
  );
};
export default Memory;

/*

*/