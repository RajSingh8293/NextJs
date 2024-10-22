"use client";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
 
  

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  
  return (
    <div className="flex justify-center items-center px-10">
    <div  className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-5 mt-20">
     {[1,2,3,4,5,6].map(()=> <div className="max-w-[250px] rounded overflow-hidden shadow-lg">
  <img className="w-full" src="https://images.pexels.com/photos/28978113/pexels-photo-28978113/free-photo-of-fashionable-woman-posing-against-orange-berlin-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet,.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
        <button onClick={openModal} className="bg-black text-white p-2 px-5">Quick Overview</button>
  </div>
</div>)}
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      X
    </Modal>
    </div>
    </div>
  );
}
