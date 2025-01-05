import React, { useState, useEffect } from 'react';

import { ref, onValue } from 'firebase/database';
import { db } from '../firebase/firebase';

const RecipeBatchList = () => {
  const [batches, setBatches] = useState([]);

  useEffect(() => {
    const batchesRef = ref(db, 'batches');

    // Listen for changes in the 'batches' node
    const unsubscribe = onValue(batchesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert the data into an array of batches
        const batchArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value
        }));
        setBatches(batchArray);
      } else {
        setBatches([]);
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <ul>
      {batches.map((batch) => (
        <li key={batch.id}>
          {/* Display batch details */}
        </li>
      ))}
    </ul>
  );
};

export default RecipeBatchList;