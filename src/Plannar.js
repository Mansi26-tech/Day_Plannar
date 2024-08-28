import React ,{ useState } from 'react';
// import datas from './datas.json';

const Data=()=>
{
   const datas=[
        // {"id":1 ,"name":"ADD Items"}
    ]
    const [nData,setnData]= useState(datas);
    const [newItem,SetnewItem]=useState("");
    const handleRemove=(itemId)=>
    {
           setnData(nData.filter(item=>item.id!=itemId))
    }
    const Clear=()=>
    {
        setnData([]);
    }
    const handleUpdate=(itemId)=>
    {
        setnData(nData.map(item=>
           {
            if(item.id==itemId)
            {
                return {...item,name:"newitem"};
            }
            else
                 return item;
           }
        ))
    }
    const handleAdd=()=>
    {
        if(newItem.trim()!="")
            {
                const newitem={ id:nData.length+1,name:newItem};
                setnData([...nData,newitem]);
                SetnewItem("");
            } 

    }
   
    return(
        <>
         <div 
         style={{ 
        backgroundImage: "url('./FOCUS.png')", // Update with the path to your background image
        backgroundSize: "cover", // Ensure the image covers the whole div
        backgroundPosition: "center", // Center the background image
        backgroundAttachment:"fixed",
        padding: "20px",
        borderRadius: "8px", 
        minHeight:"100vh",
        cursor: "pointer",
      }}>
         
         
         <h1 style={{ textAlign: "center",fontSize:"40px" }} > List down your own thoughts</h1>
         <div style={{display:"flex",alignItems:"center" ,justifyContent:"center", gap:"20px"}}> 
           <ul 
//            style={{padding:"0",listStyleType:"initial",fontSize:"25px", fontfamily: "Nerko One,cursive",
//   fontWeight:"400px",
//   fontStyle: "normal"}} 
                   style={{
                     
          padding: "20px", 
          listStyleType:"initial", 
          fontSize: "25px", 
          fontFamily: "'Nerko One', cursive", 
          fontWeight: 400, 
          fontStyle: "normal", 
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
          borderRadius: "8px", 
          maxWidth: "500px", 
          margin: "0 auto",
                   }}
>
                {
                    nData.map(items=>
                      <li key={items.id} 
                      >
                           {items.name}
                           
                            {/* <button onClick={()=>handleUpdate(items.id)}>update</button> */}
                            <button 
                            style={{
                  margin:"20px"    ,      
                  padding: "5px ",
                  backgroundColor: "#ff4c4c", // Change to desired button color
                  border: "none",
                  borderRadius: "5px",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "16px",
                  transition: "background-color 0.3s ease",
                }}
                            
                             onClick={()=>handleRemove(items.id)}>Remove</button>
                            
                      </li>
                     
                    )
                }
            </ul>
            </div>
          
         
            <div style={{display:"flex",alignItems:"center", 
            justifyContent:"center",
             gap:"20px"}}>
            <input  style={
                {padding:"0 10px",
                height:"30px",
                width:"300px",
                fontSize:"25px"}
                } 
              type="text" 
              value={newItem} 
              onChange={(e)=>SetnewItem(e.target.value)}
              placeholder="Add item"/>
            <button 
            style={{      
                  padding: "5px 10px",
                  backgroundColor: "#ff4c4c", // Change to desired button color
                  border: "none",
                  borderRadius: "5px",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "16px",
                  transition: "background-color 0.3s ease",
                 
                }}
              
             onClick={handleAdd} >Add items</button>
            <button style={{
                        
                  padding:"5px",    
                  backgroundColor: "#ff4c4c", // Change to desired button color
                  border: "none",
                  borderRadius: "5px",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "16px",
                  transition: "background-color 0.3s ease",
                }} onClick={Clear}>Clear</button>
            </div>
        
            </div>
        </>
    )
}
export default Data;