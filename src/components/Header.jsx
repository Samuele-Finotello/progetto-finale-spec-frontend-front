import { Link } from "react-router-dom"

export default function Header() {

  return (
    <header>
      <div id="left-header">
        <div className="px-10">
          <Link to={'/'}>
            <img src="../public/icona-vino.png" alt="Icona" />
          </Link>
        </div>
        <div>
          <Link className="link-text" to={'/'}>
            <h1>La Cantina del Borgo</h1>
          </Link>
        </div>
      </div>
      <div id="right-header" className="px-10">
        <Link className="link-text" to={'/comparator'}>
          <span className="px-10"><i className="fa-solid fa-scale-balanced"></i></span>
        </Link>
        <Link className="link-text" to={'/favourites'}>
          <span className="px-10"><i className="fa-solid fa-heart"></i></span>
        </Link>
      </div>
    </header>
  )
}