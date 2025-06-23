import { useState } from 'react'

function App() {

  const [color, setColor] = useState('Olive');

  return (
    <div className='w-full min-h-screen duration-200' style={{backgroundColor: color}}>
      <div className='flex flex-wrap fixed bottom-8 justify-center inset-x-0'>
        <div className='flex flex-wrap justify-center gap-3 py-2 px-3 bg-white rounded-xl'>
        <button 
        className='bg-red-500 rounded-md px-4 py-1.5 cursor-pointer'
        onClick={() => setColor('Red')}
        >Red</button>
        <button 
        className='bg-blue-500 rounded-md px-4 py-1.5 cursor-pointer'
        onClick={() => setColor('Blue')}
        >Blue</button>
        </div>
      </div>
      
    </div>
  )
}

export default App
