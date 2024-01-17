const Header = () => {
  return (
    <div className="header">
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
                  <span className="maxime"> Maxime</span>{' '}
                  <span className="alainMaxime">Alain Kagorora</span>
                </span>
              </div>
            </span>
          </a>
        </div>
      </div>
      {/* <div>
        <ul>
          <li className="btn btn-link">
            <a
              href="/work"
              className="btn-click magnetic"
              data-strength="20"
              data-strength-text="10"
            >
              <span className="btn-text">
                <span className="btn-text-inner">Work</span>
              </span>
            </a>
          </li>
          <li className="btn btn-link">
            <a
              href="/about"
              className="btn-click magnetic"
              data-strength="20"
              data-strength-text="10"
            >
              <span className="btn-text">
                <span className="btn-text-inner">About</span>
              </span>
            </a>
          </li>
          <li className="btn btn-link">
            <a
              href="/contact"
              className="btn-click magnetic"
              data-strength="20"
              data-strength-text="10"
            >
              <span className="btn-text">
                <span className="btn-text-inner">Contact</span>
              </span>
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Header;
