import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-10/12 mx-auto">
        <div className="md:flex justify-center md:justify-between text-left ">
          <div>
            <p className="font-playfair font-semibold text-2xl text-yellow">
              Max Soskind
            </p>
            <p>
              <span className="text-white">Tel:</span>{" "}
              <a href="tel:+972-54-9735472">+972-54-9735472</a> <br />
              <span className="text-white">Email:</span>
              <a href="mailto: maximnord@gmail.com">
                {" "}
                maximnord@gmail.com{" "}
              </a>{" "}
              <br />
              <span className="text-white">Address:</span> Arlozorov 62.
              Tel-Aviv
            </p>
          </div>
          
          <div>
            <p className="font-playfair text-md text-yellow tex">
              ©2023 Max Soskind. All Rights Reserved.
            </p>
          </div>

          <div>
            <SocialMediaIcons />
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
