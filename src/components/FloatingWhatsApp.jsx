export default function FloatingWhatsApp() {
  const handleClick = () => {
    const message = "Hi, I want to book a cab";
    window.open(
      `https://wa.me/918247486381?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed right-5 bottom-20 bg-green-500 text-white p-4 rounded-full shadow-xl z-50 animate-bounce"
    >
      💬
    </button>
  );
}