import './Header.css'

function Header() {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <img src="/logoGenerico.png" alt="tuLogo" className='logo' />
                    <div class="btn-group">
                        <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Nombre Completo
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><button class="dropdown-item text-end" type="button">Ajustes</button></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><button class="dropdown-item text-end" type="button">Inicio</button></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><button class="dropdown-item text-end" type="button">Salir</button></li>
                        </ul>
                    </div>


                </div>
            </nav>
        </>
    )
}

export default Header