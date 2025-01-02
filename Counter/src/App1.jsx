import { useState } from 'react';
import './App.css'

function Lock(){
    const [count, setCount] = useState(0);

    function handleAdd (){
        setCount(count + 1);
    }
    function handleSub (){
        setCount(count - 1);
    }
    function handleReset(){
        setCount(0);
    }


    return(
        <div className="App">
            <div className="box">
                <p className='para'>Count : {count}</p>
                <button onClick={handleAdd} className="add">ADD</button>
                <button onClick={handleSub} className="sub">SUB</button>
                <button onClick={handleReset} className="set">RESET</button>
            </div>
        </div>
    )
}

export default Lock;