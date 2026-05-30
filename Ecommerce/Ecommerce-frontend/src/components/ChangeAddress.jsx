import React, { useState } from 'react'

const ChangeAddress = ({setIsModelOpen, setAddress }) => {
    const[newAddress, setNewAddress]=useState("")
    const onClose=()=>{
        setAddress(newAddress)
        setIsModelOpen(false)
    }
  return (
    <div>
        <input 
        type='text'
        placeholder='enter new address'
        className='border p-2 w-full mb-4'
        onChange={(e)=>setNewAddress(e.target.value)}
        ></input>
        <div className='flex justify-end'>
            <button 
            className='bg-gray-500 text-white py-2 px-4 rounded mr-2'
            onClick={()=>setIsModelOpen(false)}
            >cancle</button>
            <button 
            className='bg-blue-500 text-white py-2 px-4 rounded'
            onClick={onClose}
            >save address</button>
        </div>
        
    </div>
  )
}

export default ChangeAddress