// pages/points/index.js
import { useState } from "react";
import PaymentModal from "@/components/PaymentModal";

export default function Points() {
  const [points, setPoints] = useState(0);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const handlePurchase = (amount) => {
    // TODO: Implement point purchase logic
    setPoints((prev) => prev + amount);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Points</h1>
      <p className="mb-4">Current balance: {points} points</p>
      <button
        onClick={() => setIsPaymentModalOpen(true)}
        className="bg-primary text-white font-bold py-2 px-4 rounded"
      >
        Purchase Points
      </button>
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        onPayment={handlePurchase}
      />
    </div>
  );
}
