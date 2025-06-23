import { useState } from "react"

function Counter() {

    const [count, setCount] = useState(0);

  return (
    <div className="m-4">
        <h1 className="text-3xl font-bold mb-1">Count: {count}</h1>
        <button
         onClick={() => setCount(count + 1)}
         className="bg-[#1a1a1a] py-2 px-4 m-2 rounded-md"
        >
            Increase</button>
        <button 
        onClick={() => setCount(count - 1)}
        className="bg-[#1a1a1a] py-2 px-4 m-2 rounded-md"
        >Decrease</button>
    </div>
  )
}

export default Counter