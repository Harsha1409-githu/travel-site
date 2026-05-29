export default function Services() {
  const services = [
    "Airport Pickup",
    "Outstation Trips",
    "Tour Packages",
    "Corporate Travel",
  ]

  return (
    <section className="py-16 px-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10">
        Our Services
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service}
            className="bg-white p-6 rounded-2xl shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold">{service}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}