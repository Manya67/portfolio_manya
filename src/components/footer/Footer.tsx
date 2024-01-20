const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-20 mb-0">
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
                <span>Resume</span>
                <span>|</span>
                <span>LinkedIN</span>
                <span>|</span>
                <span>GitHub</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg">Made with </h3>
              <h5>Last Upadted on JAN'23</h5>
            </div>
          </div>
          <div>Copyrights @ Manya Jain </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
