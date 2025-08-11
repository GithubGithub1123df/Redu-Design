function NavBar() {
    return (<>
        <header className="expand-lg w-100 d-flex align-items-center justify-content-center align-items-center position-sticky top-0 start-0" style={{ height: "6vw", zIndex: "10" }}>
            <div className="w-75 rounded m-2 shadow-lg bg-white d-flex align-items-center justify-content-between p-3" style={{ height: "90%" }}>
                <nav className="navbar-dark dropdown">
                    <a href="#" className="btn btn-light" data-bs-toggle="dropdown" style={{ fontSize: "1vw" }}>
                        <span className="navbar-toggler-icon" style={{
                            filter: "invert(80%) sepia(30%) saturate(500%) hue-rotate(20deg)",
                            transform: "scale(1.2)",
                            fontSize: "1.8vh",
                        }}></span>
                    </a>

                    <div className="dropdown-menu border border-2 rounded-3">
                        <ul style={{
                            height: "100%", width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            padding: "12px"
                        }}>
                            <li className="dropdown-item" style={{ fontSize: "3vw", fontFamily: "Prata" }}><a href="/home" className="text-dark text-decoration-none">Home</a></li>
                            <li className="dropdown-item" style={{ fontSize: "3vw", fontFamily: "Prata" }}><a href="/about" className="text-dark text-decoration-none">About</a></li>
                            <li className="dropdown-item" style={{ fontSize: "3vw", fontFamily: "Prata" }}><a href="/gallery" className="text-dark text-decoration-none">Gallery</a></li>

                        </ul>
                    </div>
                </nav>
                <div>
                    <h3 className="logo"><a href="/" className="text-success text-decoration-none" style={{ fontSize: "3.5vw" }}>Redu Design</a></h3>
                </div>
            </div >
        </header >
    </>)
}

export default NavBar;