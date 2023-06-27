import { FaTwitter, FaTelegramPlane, FaFileAlt } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="shadow_div"></div>
        <div className="container mx-auto">
          <div className="footer__top"></div>

          <div className="footer__bottom">
            <ul className="footer__secondarylink">
              <li className="perlinlink">
                <a>
                  <div className="perlinlink__text">
                    <p>TetherSwap</p>
                    <span>2023</span>
                  </div>
                </a>
              </li>
            </ul>
            <ul className="footer_links">
              <li>
                <a target="_blank" href="https://t.me/TetherSwapDex">
                  <FaTelegramPlane color="white" size="40px" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/TetherSwapDex">
                  <FaTwitter color="white" size="40px" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://tetherswap.net/whitepaper.pdf">
                  <FaFileAlt color="white" size="40px" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
