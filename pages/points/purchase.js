import { useState } from "react";
import { useRouter } from "next/router";

export default function PurchasePoints() {
  const [amount, setAmount] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement point purchase logic
    console.log("Purchasing points:", amount);

    // Simulating a purchase process
    try {
      // Here you would typically make an API call to process the payment
      // and add points to the user's account

      // For now, we'll just simulate a successful purchase
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating API call

      // Redirect to the points page after successful purchase
      router.push("/points");
    } catch (error) {
      console.error("Error purchasing points:", error);
      // Here you would handle any errors, perhaps showing a message to the user
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Purchase Points</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount of points to purchase
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            placeholder="Enter amount"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition duration-300"
        >
          Purchase Points
        </button>
      </form>
    </div>
  );
}
