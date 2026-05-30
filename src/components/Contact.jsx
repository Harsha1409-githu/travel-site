export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white dark:bg-black text-center"
    >
      <h2 className="text-4xl font-bold mb-10 text-black dark:text-white">
        Contact Us
      </h2>

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800">

        {/* Brand */}
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
          Sri Venkateswara Travels
        </h3>

        {/* Info Grid */}
        <div className="space-y-4 text-left text-base md:text-lg text-gray-700 dark:text-gray-300">

          <p>
            👤 <span className="font-semibold">Proprietor:</span> Pavan Sai Yarramsetty
          </p>

          <p>
            📞 <span className="font-semibold">Phone:</span>{" "}
            <a
              href="tel:+918247486381"
              className="text-blue-500 hover:underline"
            >
              +91 8247486381
            </a>
          </p>

          <p>
            📧 <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:Saipavandhanushyarramsetty@gmail.com"
              className="text-blue-500 hover:underline"
            >
              Saipavandhanushyarramsetty@gmail.com
            </a>
          </p>

          <p>
            📍 <span className="font-semibold">Location:</span> Chinnapavani, Andhra Pradesh
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">

          <a
            href="https://wa.me/918247486381"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            WhatsApp Now
          </a>

          <a
            href="tel:+918247486381"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold transition"
          >
            Call Now
          </a>

        </div>
      </div>
    </section>
  );
}