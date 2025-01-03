import React, { useEffect, useState } from 'react'
import { readRecipeLog } from '../firebase/firebase';


function Log() {
const [ database, setDatabase ] = useState([])
    useEffect(() => {
        // Example usage:
readRecipeLog("recipeId1", (data) => {
    console.log(data); // Logs the recipe data
    setDatabase(data);
  });
    },[])
  return (
    <div>
        <p>Here are the batches that have been baked</p>
        
        </div>
  )
}

export default Log