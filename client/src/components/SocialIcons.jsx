import React from "react";
import { Link } from "react-router-dom";
import FacebookLogo from "../assets/facebook.png";
import TwitterLogo from "../assets/Twitter.png";
import LinkedinLogo from "../assets/linkedin.png";
import GithubLogo from "../assets/github.png";
import GitBranchLogo from "../assets/Git.png";
import WhatsappLogo from "../assets/whatsapp.png";
import InstagramLogo from "../assets/instagram.png";

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-2 mt-4 ml-1 mb-2 max-md:gap-3">
      <Link
        target="_blank"
        to="https://www.facebook.com/profile.php?id=100054571435459"
        className="group transition transform hover:scale-110"
      >
        <img
          src={FacebookLogo}
          alt="Facebook"
          className="w-7 h-7 md:w-10 md:h-10 transition-transform duration-300"
        />
      </Link>
      <Link
        target="_blank"
        to="https://twitter.com/Tirth_Patel0209"
        className="group transition transform hover:scale-110"
      >
        <img
          src={TwitterLogo}
          alt="Twitter"
          className="w-7 h-7 md:w-10 md:h-10 transition-transform duration-300"
        />
      </Link>
      <Link
        target="_blank"
        to="https://www.linkedin.com/in/tirth-patel-b90b1622a/"
        className="group transition transform hover:scale-110"
      >
        <img
          src={LinkedinLogo}
          alt="LinkedIn"
          className="w-7 h-7 md:w-10 md:h-10 transition-transform duration-300"
        />
      </Link>
      <Link
        target="_blank"
        to="https://github.com/Tirth1224"
        className="group transition transform hover:scale-110"
      >
        <img
          src={GithubLogo}
          alt="GitHub"
          className="w-7 h-7 md:w-10 md:h-10 transition-transform duration-300"
        />
      </Link>
      <Link
        target="_blank"
        to="https://github.com/Tirth1224/Edemy-Learning-Management-System"
        className="group transition transform hover:scale-110"
      >
        <img
          src={GitBranchLogo}
          alt="Git Branch"
          className="w-7 h-7 md:w-10 md:h-10 transition-transform duration-300"
        />
      </Link>
      <Link
        target="_blank"
        to="https://wa.me/8866248170?text=Hey%20%F0%9F%91%8B%2C%20how%20can%20I%20help%20you%3F"
        className="group transition transform hover:scale-110"
      >
        <img
          src={WhatsappLogo}
          alt="WhatsApp"
          className="w-7 h-7 md:w-10 md:h-10 transition-transform duration-300"
        />
      </Link>
      <Link
        target="_blank"
        to="https://www.instagram.com/tirth_patel_0209/"
        className="group transition transform hover:scale-110"
      >
        <img
          src={InstagramLogo}
          alt="Instagram"
          className="w-7 h-7 md:w-10 md:h-10 transition-transform duration-300"
        />
      </Link>
    </div>
  );
};

export default SocialIcons;
