import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareXTwitter,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialMediaIcons() {
  return (
    <ul className="flex items-center justify-between gap-4 text-xl">
      <li>
        <a href="#">
          <FontAwesomeIcon
            className="text-gray-300 hover:text-white"
            icon={faSquareFacebook}
          />
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon
            className="text-gray-300 hover:text-white"
            icon={faSquareInstagram}
          />
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon
            className="text-gray-300 hover:text-white"
            icon={faSquareXTwitter}
          />
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon
            className="text-gray-300 hover:text-white"
            icon={faSquareYoutube}
          />
        </a>
      </li>
    </ul>
  );
}

export default SocialMediaIcons;
