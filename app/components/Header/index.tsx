import Magnetic from '../common/Magnetic';

const Header = () => {
  return (
    <div className="header">
      <Magnetic>
        <div className="credits-top">
          <div className="btn btn-link btn-left-top">
            <a href="/" className="btn-click magnetic">
              <span className="btn-text">
                <div className="credit">
                  <div className="copyright">©</div>
                </div>
                <div className="name">
                  <span className="codeBy">Code by </span>
                  <span className="dennis">
                    <span className="maxime">Maxime</span>{' '}
                    <span className="alainMaxime">Kagorora</span>
                  </span>
                </div>
              </span>
            </a>
          </div>
        </div>
      </Magnetic>
      <div className="links-wrapper">
        <ul>
          <Magnetic>
            <li className="btn btn-link">
              <a
                href="/work"
                className="btn-click magnetic"
                data-strength="20"
                data-strength-text="10"
              >
                <span className="btn-text el">
                  <span className="btn-text-inner">Work</span>
                  <div className="indicator"></div>
                </span>
              </a>
            </li>
          </Magnetic>

          <Magnetic>
            <li className="btn btn-link">
              <a
                href="/about"
                className="btn-click magnetic"
                data-strength="20"
                data-strength-text="10"
              >
                <span className="btn-text el">
                  <span className="btn-text-inner">About</span>
                  <div className="indicator"></div>
                </span>
              </a>
            </li>
          </Magnetic>

          <Magnetic>
            <li className="btn btn-link">
              <a
                href="/contact"
                className="btn-click magnetic"
                data-strength="20"
                data-strength-text="10"
              >
                <span className="btn-text el">
                  <span className="btn-text-inner">Contact</span>
                  <div className="indicator"></div>
                </span>
              </a>
            </li>
          </Magnetic>
        </ul>
      </div>
    </div>
  );
};

export default Header;
