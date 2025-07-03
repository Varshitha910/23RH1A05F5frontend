import {useState} from 'react';
function Home(){
    let [count,setCount]=useState(0);//useState is used for assigning the variable in runtime
    return(<div>
        <h1>Homepage</h1>
        <div style={{display:'flex',alignments:'center',gap:'5px'}}>
        <button onClick={()=>setCount(count--)}>-</button>
        <p>{count}</p>
        <button onClick={()=>setCount(count++)}>+</button>
        </div>
        </div>);
 }
 export default Home;