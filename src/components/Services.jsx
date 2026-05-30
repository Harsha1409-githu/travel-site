export default function Services() {
  const services = [
    {
      title: "Airport Pickup",
      icon: "✈️",
      description: "Reliable airport pickup and drop services available 24/7.",
    },
    {
      title: "Outstation Trips",
      icon: "🚗",
      description: "Comfortable outstation travel with experienced drivers.",
    },
    {
      title: "Tour Packages",
      icon: "🌍",
      description: "Customized tour packages for families and groups.",
    },
    {
      title: "Corporate Travel",
      icon: "💼",
      description: "Professional transportation solutions for businesses.",
    },
    {
  title: "Wedding Travel",
  icon: "💍",
  description: "Luxury vehicles for weddings and special occasions."
},
{
  title: "Temple Tours",
  icon: "🛕",
  description: "Pilgrimage and temple tour packages across South India."
},
{
  title: "School & College Trips",
  icon: "🎓",
  description: "Safe transportation for educational tours and excursions."
}
  ]

  return (
    <section
      id="services"
      className="py-16 px-8 bg-gray-100 dark:bg-gray-950 transition duration-300"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
        Our Services
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-xl hover:scale-105 hover:-translate-y-2 transition duration-300 text-center"
          >
            <div className="text-5xl mb-4">
              {service.icon}
            </div>

            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
              {service.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}