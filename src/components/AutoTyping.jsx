import Typewriter from "typewriter-effect";

export function AutoTyping() {
  return (
    <div className="text-white text-xl md:text-2xl mt-4">
      <Typewriter
        options={{ loop: true, delay: 60 }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Safe Travel Across South India")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Airport • Outstation • Temple Tours")
            .pauseFor(1000)
            .deleteAll()
            .typeString("24/7 Car Services")
            .pauseFor(1000)
            .start();
        }}
      />
    </div>
  );
}