Vue.component('navbar-cp', {
    template: /* html */ `
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="https://img.icons8.com/office/40/000000/hamburger.png"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="comidas.html">Comidas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="frutasyverduras.html">Frutas y Verduas</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `
})