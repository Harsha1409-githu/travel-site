import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import toast from "react-hot-toast";

export default function BookingForm() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    destination: "",
    date: "",
    vehicle: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if (
      !formData.name ||
      !formData.phone ||
      !formData.pickup ||
      !formData.destination ||
      !formData.date ||
      !formData.vehicle
    ) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      // Save to Firebase
      await addDoc(collection(db, "bookings"), {
        ...formData,
        status: "Pending",
        createdAt: new Date().toISOString(),
      });

      toast.success("Booking Submitted Successfully!");

      // WhatsApp message
      const message = `
🚖 *New Booking Request*

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
🚗 Vehicle: ${formData.vehicle}
📍 Pickup: ${formData.pickup}
🎯 Destination: ${formData.destination}
📅 Travel Date: ${formData.date}

💬 Please confirm availability.
      `;

      // Open WhatsApp
      window.open(
        `https://wa.me/918247486381?text=${encodeURIComponent(message)}`,
        "_blank"
      );

      // Reset form
      setFormData({
        name: "",
        phone: "",
        pickup: "",
        destination: "",
        date: "",
        vehicle: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Error submitting booking");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="booking"
      className="py-16 px-6 bg-gray-100 dark:bg-gray-950 transition duration-300"
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-black dark:text-white">
        Book Your Ride
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl grid gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-3 rounded-xl bg-white dark:bg-gray-800 dark:text-white"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="border p-3 rounded-xl bg-white dark:bg-gray-800 dark:text-white"
          required
        />

        <select
          name="vehicle"
          value={formData.vehicle}
          onChange={handleChange}
          className="border p-3 rounded-xl bg-white dark:bg-gray-800 dark:text-white"
          required
        >
          <option value="">Select Vehicle</option>
          <option value="Toyota Rumion">Toyota Rumion</option>
        </select>

        <input
          type="text"
          name="pickup"
          placeholder="Pickup Location"
          value={formData.pickup}
          onChange={handleChange}
          className="border p-3 rounded-xl bg-white dark:bg-gray-800 dark:text-white"
          required
        />

        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={formData.destination}
          onChange={handleChange}
          className="border p-3 rounded-xl bg-white dark:bg-gray-800 dark:text-white"
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border p-3 rounded-xl bg-white dark:bg-gray-800 dark:text-white"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`py-3 rounded-xl font-semibold transition duration-300 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-yellow-400 hover:bg-yellow-500"
          } text-black`}
        >
          {loading ? "Submitting..." : "Book Now"}
        </button>
      </form>
    </section>
  );
}