import { TypeAnimation } from "react-type-animation";

const Salutation = () => {
  return (
    <div className="dark:text-lighter text-3xl sm:text-4xl lg:text-[2rem] xl:text-[2.25rem]">
      <TypeAnimation
        sequence={[
          "Hello ",
          2000,
          "नमस्ते ",
          2000,
          "Bonjour ",
          2000,
          "Hola! ",
          2000,
          "Ciao ",
          2000,
        ]}
        speed={5}
        deletionSpeed={10}
        wrapper="h2"
        cursor={true}
        repeat={Infinity}
        style={{
          display: "inline-block",
          fontFamily: "monospace",
        }}
      />
    </div>
  );
};

export default Salutation;
