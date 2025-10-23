import './Header.css'

export const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="brand">FashionLook</h1>
        <nav className="nav">
          <a href="#" className="nav-link">Looks</a>
          <a href="#" className="nav-link">Products</a>
          <a href="#" className="nav-link">About</a>
        </nav>
      </div>
    </header>
  )
}