import React, { useEffect, useState } from 'react'
import { readRecipeLog } from '../firebase/firebase';


function Log() {
const [ data, setData ] = useState({})
    useEffect(() => {
        // Example usage:
readRecipeLog("recipeId1", (data) => {
    console.log(data); // Logs the recipe data
    setData(data);
  });
    })
  return (
    <div>{data}</div>
  )
}

export default Log