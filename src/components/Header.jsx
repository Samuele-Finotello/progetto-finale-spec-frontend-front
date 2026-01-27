import { Link } from "react-router-dom"

export default function Header() {

  return (
    <header>
      <div id="left-header">
        <div className="px-10">
          <Link to={'/'}>
            <img src="/icona-vino.png" alt="Icona" />
          </Link>
        </div>
        <div>
          <Link className="link-text" to={'/'}>
            <h1>La Cantina del Borgo</h1>
          </Link>
        </div>
      </div>
      <div id="right-header" className="px-10">
        <span className="px-10">
          <Link className="link-text" to={'/comparator'}><i className="fa-solid fa-scale-balanced"></i></Link>
        </span>
        <span className="px-10">
          <Link className="link-text" to={'/favourites'}><i className="fa-solid fa-heart"></i></Link>
        </span>
        <span className="px-10">
          <Link className="link-text" to={'/'}><i className="fa-solid fa-house"></i></Link>
        </span>
      </div>
    </header>
  )
}