import React, { useEffect } from 'react'
import style  from './Modal.module.css'

// type Props = {
//   isOpen : boolean,
//   onClose :() => void,
//   children: React.ReactNode
// }
const Modal = (
  // {isOpen, onClose}
  {isOpen, onClose, children}
  : {
    isOpen : boolean,
    onClose :() => void,
    children: React.ReactNode
  }) => {
    useEffect(()=>{
      const handleKeyDown = (event : KeyboardEvent)=>{
        if (event.key === "Escape" ) {
          onClose()
        }
      }
      window.addEventListener("keydown", handleKeyDown)
    }, [onClose])

    if (!isOpen) {
     return null;
    } 
  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
          <div className="mt-4">
          <div className="">
            <form action="">
              <div className='grid grid-cols-2 gap-5'>
                <div className="relative mt-6 ">
                    <input type="text" name="name" id="name" placeholder="Product Name" className=" peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autoComplete="NA" />
                    <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Product Name</label>
                </div>
                <div className="relative mt-6 ">
                    <input type="text" name="title" id="title" placeholder="Product Title" className=" peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autoComplete="NA" />
                    <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Product Title</label>
                </div>
              
              </div>
              <div className='grid grid-cols-2 gap-5'>
                <div className="relative mt-6 ">
                    <input type="number" name="price" id="price" placeholder="Product Price" className=" peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autoComplete="NA" />
                    <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Product Price</label>
                </div>
                <div className="relative mt-6 ">
                    <input type="number" name="quantity" id="quantity" placeholder="Product Quantity" className=" peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autoComplete="NA" />
                    <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Product Quantity</label>
                </div>
              
              </div>
                <div className="relative mt-6 ">
                    <input type="text" name="description" id="description" placeholder="description" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                    <label htmlFor="description" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Description</label>
                </div>
                <div className="my-6">
                    <button type="submit" className="w-full rounded-md bg-black px-2 py-4 text-white focus:bg-gray-600 focus:outline-none">Create</button>
                </div>
            </form>
        </div>
            <button
              onClick={onClose}
              className="absolute top-3 right-4 px-4 py-2 bg-black text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
            {/* X */}
              {children}
            </button>
          </div>
      </div>
    </div>
  )
}

export default Modal