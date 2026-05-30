import { useEffect, useState } from "react"
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore"

import { db } from "../firebase"

export default function Admin() {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    fetchBookings()
  }, [])

  const fetchBookings = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "bookings")
      )

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))

      setBookings(data)
    } catch (error) {
      console.error("Error fetching bookings:", error)
    }
  }

  const deleteBooking = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    )

    const updateStatus = async (id, status) => {
  try {
    await updateDoc(doc(db, "bookings", id), {
      status,
    })

    fetchBookings()
  } catch (error) {
    console.error("Error updating status:", error)
  }
}

    if (!confirmDelete) return

    try {
      await deleteDoc(doc(db, "bookings", id))

      fetchBookings()
    } catch (error) {
      console.error("Error deleting booking:", error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black p-8">
      <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">
        Admin Dashboard
      </h1>

      <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl">
        <table className="w-full">
          <thead>
            <tr className="bg-yellow-400 text-black">
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Vehicle</th>
              <th className="p-4 text-left">Pickup</th>
              <th className="p-4 text-left">Destination</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="p-6 text-center text-gray-500"
                >
                  No bookings found
                </td>
              </tr>
            ) : (
              bookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-b dark:border-gray-700"
                >
                  <td className="p-4 text-black dark:text-white">
                    {booking.name}
                  </td>

                  <td className="p-4 text-black dark:text-white">
                    {booking.phone}
                  </td>

                  <td className="p-4 text-black dark:text-white">
                    {booking.vehicle || "-"}
                  </td>

                  <td className="p-4 text-black dark:text-white">
                    {booking.pickup}
                  </td>

                  <td className="p-4 text-black dark:text-white">
                    {booking.destination}
                  </td>

                  <td className="p-4 text-black dark:text-white">
                    {booking.date}
                  </td>

                  <td className="p-4">
  <select
    value={booking.status || "Pending"}
    onChange={(e) =>
      updateStatus(
        booking.id,
        e.target.value
      )
    }
    className="border rounded-lg p-2 dark:bg-gray-800 dark:text-white"
  >
    <option value="Pending">
      Pending
    </option>

    <option value="Confirmed">
      Confirmed
    </option>

    <option value="Completed">
      Completed
    </option>
  </select>
</td>

                  <td className="p-4">
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={`tel:${booking.phone}`}
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg"
                      >
                        Call
                      </a>

                      <a
                        href={`https://wa.me/91${booking.phone}`}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg"
                      >
                        WhatsApp
                      </a>

                      <button
                        onClick={() =>
                          deleteBooking(booking.id)
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}