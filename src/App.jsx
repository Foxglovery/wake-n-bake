import React, { useState, useEffect } from "react";
import { writeData, readData } from "./firebase"; // Import Firebase functions

function App() {
 

  return (
    <div>
      <h1>React and Firebase Realtime Database</h1>
      <button onClick={handleWriteData}>Write Data</button>
      <button onClick={handleReadData}>Read Data</button>

      {userData && (
        <div>
          <h3>User Data:</h3>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
