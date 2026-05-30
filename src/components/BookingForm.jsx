import { useState } from "react"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase"
import toast from "react-hot-toast"

export default function BookingForm() {
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    destination: "",
    date: "",
    vehicle: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (
      !formData.name ||
      !formData.phone ||
      !formData.pickup ||
      !formData.destination ||
      !formData.date ||
      !formData.vehicle
    ) {
      toast.error("Please fill all fields")
      return
    }

    try {
      setLoading(true)

    await addDoc(collection(db, "bookings"), {
  ...formData,
  status: "Pending",
  createdAt: new Date(),
})

      toast.success("Booking Submitted Successfully!")

      const message = encodeURIComponent(`
🚖 New Travel Booking

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
🚗 Vehicle: ${formData.vehicle}
📍 Pickup: ${formData.pickup}
🎯 Destination: ${formData.destination}
📅 Travel Date: ${formData.date}
      `)

      window.open(
        `https://wa.me/918977073949?text=${message}`,
        "_blank"
      )

      setFormData({
        name: "",
        phone: "",
        pickup: "",
        destination: "",
        date: "",
        vehicle: "",
      })
    } catch (error) {
      console.error(error)
      toast.error("Error submitting booking")
    } finally {
      setLoading(false)
    }
  }

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
          required
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-3 rounded-xl bg-white dark:bg-gray-800 dark:text-white"
        />

        <input
          type="tel"
          name="phone"
          required
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="border p-3 rounded-xl bg-white dark:bg-gray-800 dark:text-white"
        />

        <select
          name="vehicle"
          required
          value={formData.vehicle}
          onChange={handleChange}
          className="border p-3 rounded-xl bg-white dark:bg-gray-800 dark:text-white"
        >
          <option value="">Select Vehicle</option>
          <option value="Toyota Rumion">Toyota Rumion</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Tempo Traveller">Tempo Traveller</option>
        </select>

        <input
          type="text"
          name="pickup"
          required
          placeholder="Pickup Location"
          value={formData.pickup}
          onChange={handleChange}
          className="border p-3 rounded-xl bg-white dark:bg-gray-800 dark:text-white"
        />

        <input
          type="text"
          name="destination"
          required
          placeholder="Destination"
          value={formData.destination}
          onChange={handleChange}
          className="border p-3 rounded-xl bg-white dark:bg-gray-800 dark:text-white"
        />

        <input
          type="date"
          name="date"
          required
          value={formData.date}
          onChange={handleChange}
          className="border p-3 rounded-xl bg-white dark:bg-gray-800 dark:text-white"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-xl font-semibold transition duration-300"
        >
          {loading ? "Submitting..." : "Book Now"}
        </button>
      </form>
    </section>
  )
}