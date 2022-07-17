import React, { useState, useEffect } from "react";

function App ()
{
  const [ count, setCount ] = useState( 0 );
  const [ text, setText ] = useState( "" );
  useEffect(
    //side effect function
    //first arg: side effect (callback function)
    () =>
    {
       document.title = text;
      console.log("useEffect called");
    },[text]
    //2nd arg:dependencies array
    // [count]
  );
  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  }, []);

  console.log("Component rendering");

  return (
    <div>
      <button onClick={ () => setCount( ( count ) => count + 1 ) }>I've been clicked{ count } times</button>
      <input type="text" name="text" placeholder="Type away..." value={text} onChange={(event)=> setText(event.target.value)} />
    </div>
  );
}

export default App;
