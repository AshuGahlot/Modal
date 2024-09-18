import React from 'react'


function Modal({id, header, body, footer, onclose}) {

    return ( 
        <>
        <div id={id || 'Modal'}>
            <div className='w-1/2 bg-slate-700 mx-auto text-white text-center mt-10 rounded-lg'>
            <div className='flex justify-end p-2 cursor-pointer' onClick={onclose}><span>&times;</span></div>
            <div className='flex justify-center p-3 text-3xl'>
                <h2>{header? header : "header"}</h2>
            </div>

            <div className='my-4'>
                <p>{body ? (body) : (<div>This is Modal body</div>)}</p>
            </div>

            <div className='mb-4'>
                <p>{footer ? (footer) :(<div>Footer</div>) }</p>
            </div>
            </div>
        </div>
        </>
     );
}

export default Modal;