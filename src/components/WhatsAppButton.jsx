import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918977073949"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg text-3xl hover:scale-110 transition"
    >
      <FaWhatsapp />
    </a>
  )
}