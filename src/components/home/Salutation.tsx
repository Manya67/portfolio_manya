import { TypeAnimation } from "react-type-animation";

const Salutation = () => {
  return (
    <div>
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
          fontSize: "2.25rem",
          display: "inline-block",
          fontFamily: "monospace",
        }}
      />
    </div>
  );
};

export default Salutation;
