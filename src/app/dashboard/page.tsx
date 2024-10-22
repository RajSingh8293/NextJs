"use client";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function Dashboard() {
  const [isModalOpen, setModalOpen] = useState(false);

  const [name, setName]= useState("")
  const [title, setTitle]= useState("")
  const [price, setprice]= useState("")
  const [quantity, setQuantity]= useState("")
  const [description, setDescription]= useState("")

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       <div className="flex gap-5">
        <button onClick={openModal} className="bg-black text-white p-2 px-5">Create Product</button>
       </div>
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      X
    </Modal>
    </div>
  );
}
