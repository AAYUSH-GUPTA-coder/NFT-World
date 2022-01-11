import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Link from "next/link";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="navbar" style={{ width: "100%" }}>
        <label
          className="navbar-toggle"
          id="js-navbar-toggle"
          htmlFor="chkToggle"
        >
          <i className="fa fa-bars"></i>
        </label>
        <a style={{ marginLeft: "20px" }} href="/" className="neonText">
          NFT WORLD
        </a>
        <input type="checkbox" id="chkToggle"></input>
        <ul className="main-nav" id="js-menu">
          <li>
            <Link href="/">
              <a className="nav-links">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/create-item">
              <a className="nav-links">Sell Digital Asset</a>
            </Link>
          </li>
          <li>
            <Link href="/my-assets">
              <a className="nav-links">My Digital Assets</a>
            </Link>
          </li>

          <li>
            <Link href="/creator-dashboard">
              <a className="nav-links neon">Creator Dashboard</a>
            </Link>
          </li>
        </ul>
      </nav>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
