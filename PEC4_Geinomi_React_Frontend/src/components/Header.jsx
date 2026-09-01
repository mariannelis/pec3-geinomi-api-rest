import { getApiUrl } from '../services/api.js';

function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <img src="/geinomi-logo.svg" alt="Logo de Geinomi" className="brand-logo" />
        <div>
          <p className="eyebrow">Outdoor Store</p>
          <h1>Geinomi</h1>
        </div>
      </div>

      <nav className="nav-links" aria-label="Navegación principal">
        <a href="#catalogo">Catálogo</a>
        <a href="#crear">Crear producto</a>
        <a href={getApiUrl()} target="_blank" rel="noreferrer">API</a>
      </nav>
    </header>
  );
}

export default Header;
