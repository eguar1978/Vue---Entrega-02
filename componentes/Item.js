Vue.component('item-cp', {
    props: ["item"],
    template: /* html */ `
                    <!-- INICIO DE CARD -->
                    
                        <div class="card shadow-sm">
                            <img class="img-producto" :src="item.imagen" alt="" srcset="" />
                            <div class="card-body">
                                <h3> { Fruta } </h3>
                                <p class="card-text">{ Descripcion }</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        { Precio }
                                    </div>
                                    <small class="text-muted">{ Boton Comprar }</small>
                                </div>
                            </div>
                        </div>
                    
                    <!-- FIN DE CARD -->
    `,
    data: {
        items: [{
            id: 1,
            titulo: "Anana",
            costo: 50,
            imagen: "images/fyv/anana.jepg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "fyv"
        }, {
            id: 2,
            titulo: "Arandano",
            costo: 35,
            imagen: "images/fyv/arandano.jpeg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "fyv"
        }, {
            id: 3,
            titulo: "Frutilla",
            costo: 50,
            imagen: "images/fyv/frutilla.jepg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "fyv"
        }, {
            id: 4,
            titulo: "Higo",
            costo: 35,
            imagen: "images/fyv/higo.jpeg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "fyv"
        }, {
            id: 5,
            titulo: "Limon",
            costo: 50,
            imagen: "images/fyv/limon.jepg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "fyv"
        }, {
            id: 6,
            titulo: "Manzana",
            costo: 35,
            imagen: "images/fyv/manzana.jpeg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "fyv"
        }, {
            id: 7,
            titulo: "Naranja",
            costo: 50,
            imagen: "images/fyv/naranja.jepg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "fyv"
        }, {
            id: 8,
            titulo: "Pera",
            costo: 35,
            imagen: "images/fyv/pera.jpeg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "fyv"
        }, {
            id: 9,
            titulo: "Remolacha",
            costo: 50,
            imagen: "images/fyv/remolacha.jepg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "fyv"
        }, {
            id: 10,
            titulo: "Zanahoria",
            costo: 35,
            imagen: "images/fyv/zanahoria.jpeg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "fyv"
        }, {
            id: 1,
            titulo: "Menu 1",
            costo: 50,
            imagen: "images/comidas/menu1.jepg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "comida"
        }, {
            id: 2,
            titulo: "Menu 2",
            costo: 35,
            imagen: "images/comidas/menu2.jpeg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "comida"
        }, {
            id: 3,
            titulo: "Menu 3",
            costo: 50,
            imagen: "images/comidas/menu3.jepg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "comida"
        }, {
            id: 4,
            titulo: "Menu 4",
            costo: 35,
            imagen: "images/comidas/manu4.jpeg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "comida"
        }, {
            id: 5,
            titulo: "Menu 5",
            costo: 50,
            imagen: "images/comidas/menu5.jepg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "comida"
        }, {
            id: 6,
            titulo: "Manu 6",
            costo: 35,
            imagen: "images/comidas/menu6.jpeg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "comida"
        }, {
            id: 7,
            titulo: "Menu 7",
            costo: 50,
            imagen: "images/comidas/menu7.jepg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "comida"
        }, ]
    }
})