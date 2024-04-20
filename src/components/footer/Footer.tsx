import { BsBalloonHeartFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center gap-5 mt-20 mb-0"
      id="contact"
    >
      <div className="lg:w-[80%] px-3 lg:px-0">
        <div className="mb-8">
          <p className="text-justify lg:text-xl dark:text-white text-darkest">
            Interested in a developer who works hard but still has the energy to
            dance? What about a 90s music lover who sings even if their voice
            isn't pretty? Or someone who believes painting is the only way to
            escape this hectic world? If so, get in touch!✨
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div className="w-full flex flex-wrap justify-between items-center gap-4 md:gap-1">
            <div>
              <a
                href="#"
                onClick={(e) => {
                  window.location.href = "mailto:manyajain62002@gmail.com";
                  e.preventDefault();
                }}
                className="dark:text-lighter dark:hover:text-white hover:text-darkest"
              >
                <h1 className="text-lg">Reach out through mail</h1>
                <p>manyajain62002@gmail.com</p>
              </a>
            </div>
            <div>
              <h3 className="text-lg">Let's Connect</h3>
              <div className="flex gap-2">
                <a
                  href="https://drive.google.com/drive/folders/1cZAuxu6KEuy9jdegU89Ju3qjEbBNFv0W?usp=drive_link"
                  target="_"
                  className="dark:hover:text-white hover:text-darkest"
                >
                  <span>Resume</span>
                </a>
                <span>|</span>
                <a
                  href="https://www.linkedin.com/in/manya-jain62002/"
                  target="_blank"
                  className="dark:hover:text-white hover:text-darkest"
                >
                  <span>LinkedIN</span>
                </a>
                <span>|</span>
                <a
                  href="https://github.com/Manya67"
                  target="_blank"
                  className="dark:hover:text-white hover:text-darkest"
                >
                  <span>GitHub</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg flex gap-2 items-center">
                Made with
                <BsBalloonHeartFill color="#cc0479" />{" "}
              </h3>
              <h5>Last Upadted on APR'24</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full dark:bg-grey text-center dark:text-lighter py-2 bg-lighter text-darkest">
        Copyrights @ Manya Jain{" "}
      </div>
    </div>
  );
};

export default Footer;
/**
 * desc - change
 * made with "heart"
 */
