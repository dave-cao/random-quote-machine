function NavBar(backgroundColor) {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-light position-absolute w-100 navbar-padding"
      style={{ backgroundColor: backgroundColor }}
    >
      <a className="navbar-brand" href="#">
        Quote Machine
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              target="_blank"
              href="https://davidcao.xyz"
              rel="noreferrer"
            >
              Portfolio <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              target="_blank"
              href="https://github.com/dave-cao"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              target="_blank"
              href="https://www.youtube.com/channel/UCEnBPbnNnqhQIIhW1uLXrLA"
              rel="noreferrer"
            >
              Youtube
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
