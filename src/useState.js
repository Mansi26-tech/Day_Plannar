
import React, {useState} from "react";
const App=()=>
{
    const [count,setCount]=useState(0);
    const addValue=()=>
    {
        setCount(count+1);
    }
    const decValue=()=>
        {
            setCount(count-1);
        }
    return(
        <>
            <h1 style={{textAlign :'center'}}>{count}</h1>
            <button onClick={addValue} style={{ backgroundColor: 'blue', padding: '20px', display: 'block', margin: '0 auto' }}>Add</button>
            
            <button onClick={decValue} style={{ backgroundColor: 'red', padding: '20px', display: 'block', margin: '0 auto' }}>Dec</button>
            <h1 style={{textAlign:'center'}}>{count}</h1>
        </>
    )
}
export default App;