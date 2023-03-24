const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/max-soskind-859b0419a/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" style={{width:'32px'}} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href=" https://wa.me/+972549735472"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="whatsapp-link" src="../assets/whatsapp.png" style={{width:'32px'}} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/maximsoskind"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" style={{width:'32px'}} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/maxsoskind"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" style={{width:'32px'}} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Maximnord"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/github.png" style={{width:'32px'}} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;