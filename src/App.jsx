import React, { useState } from 'react'
import Modal from './Modal';

function App() {
const [showpopup, setshowpopup] = useState(false)

  const showmodalpopup = () => {
    setshowpopup(!showpopup)
  }

  function onclose(){
    setshowpopup(false) 
  }
  return (
    <>
    <div className='mx-auto mt-10 w-32 p-3 text-center font-bold text-white rounded-md bg-gray-600'>
      <button onClick={showmodalpopup}>Show Popup</button>
      </div>
        {showpopup && <Modal 
        onclose={onclose}
        header={<div>Are you sure !</div>}
        body={<div>You want to Delete this Category</div>}
        />}
    </>
  )
}

export default App
