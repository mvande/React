import { useState, useEffect } from "react"

export default function CountButton(prop) {
    let [count, setCount] = useState(0)
    
    function handleClick() {
        setCount(count + Number(prop.num))
    }

    function rollOverCount() {
        if(count > 10){
            setCount(0)
        }
    }

    useEffect(rollOverCount, [count])

    return (
    <>
        <button onClick={handleClick}>+{prop.num}</button>
        <div>{count}</div>
    </>
    )
}