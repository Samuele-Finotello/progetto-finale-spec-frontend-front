
export default function Header() {

  return (
    <header>
      <div id="left-header">
        <div className="py-10">
          <img src="../public/icona-vino.png" alt="Icona" />
        </div>
        <div>
          <h1>La Cantina del Borgo</h1>
        </div>
      </div>
      <div id="right-header" className="py-10">
        <span className="py-10"><i className="fa-solid fa-scale-balanced"></i></span>
        <span className="py-10"><i className="fa-solid fa-heart"></i></span>
      </div>
    </header>
  )
}