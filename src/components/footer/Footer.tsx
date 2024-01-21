import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 mt-20 mb-0">
      <div className="w-[80%]">
        <div className="mb-8">
          <p className="text-justify text-xl">
            Are you looking for a developer who hustles hard but stays humble? A
            curious soul who bobs their head to any music? An FPS gamer who
            plays Valorant? A foodie who will venture out for amazing cuisine
            with you? ✨ If so, do get in touch!
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div className="w-full flex justify-between items-center">
            <div>
              <h1 className="text-lg">Contact Me</h1>
              <p>manyajain62002@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg">Let's Connect</h3>
              <div className="flex gap-2">
                <Link
                  to="https://drive.google.com/drive/folders/1cZAuxu6KEuy9jdegU89Ju3qjEbBNFv0W?usp=drive_link"
                  target="_"
                >
                  <span>Resume</span>
                </Link>
                <span>|</span>
                <Link
                  to="https://www.linkedin.com/in/manya-jain62002/"
                  target="_blank"
                >
                  <span>LinkedIN</span>
                </Link>
                <span>|</span>
                <Link to="https://github.com/Manya67" target="_blank">
                  <span>GitHub</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg">Made with </h3>
              <h5>Last Upadted on JAN'23</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-blue text-center">Copyrights @ Manya Jain </div>
    </div>
  );
};

export default Footer;
/**
 * desc - change
 * made with "heart"
 */
