Vue.component("container-cp", {
    props: ['titulo', 'items'],
    template: /* html */ `
                <div class="album py-1 bg-light">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 justify-content-center container-banner">
                                <div class="container mt-3">
                                    <h2>{{titulo}}</h2>
                                    <table class="table table-based">
                                        <thead>
                                            <tr>
                                                <th>Nombre</th>
                                                <th>Precio</th>
                                                <th>Promocionado</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item, index) in items" :key="index" :class="item.promocionado ? 'table-success' : 'table-info'">
                                                <td> {{ item.titulo }} </td>
                                                <td>$ {{ item.costo }} </td>
                                                <td v-if="item.promocionado"> 10% OFF </td>
                                                <td v-else> sin promocion </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
});


const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Bienvenidos a Comidas Webaaaa',
        items: [{
            id: 1,
            titulo: "Anana",
            costo: 51,
            imagen: "images/fyv/anana.jpeg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "fyv",
            promocionado: true
        }, {
            id: 2,
            titulo: "Arandano",
            costo: 35,
            imagen: "images/fyv/arandano.jpeg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "fyv",
            promocionado: true
        }, {
            id: 3,
            titulo: "Frutilla",
            costo: 50,
            imagen: "images/fyv/frutilla.jpeg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "fyv",
            promocionado: false
        }, {
            id: 4,
            titulo: "Higo",
            costo: 35,
            imagen: "images/fyv/higo.jpeg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "fyv",
            promocionado: true
        }, {
            id: 5,
            titulo: "Limon",
            costo: 50,
            imagen: "images/fyv/limon.jpeg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "fyv",
            promocionado: false
        }, {
            id: 6,
            titulo: "Manzana",
            costo: 35,
            imagen: "images/fyv/manzana.jpeg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "fyv",
            promocionado: false
        }, {
            id: 7,
            titulo: "Naranja",
            costo: 50,
            imagen: "images/fyv/naranja.jpeg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "fyv",
            promocionado: true
        }, {
            id: 8,
            titulo: "Pera",
            costo: 35,
            imagen: "images/fyv/pera.jpeg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "fyv",
            promocionado: true
        }, {
            id: 9,
            titulo: "Remolacha",
            costo: 50,
            imagen: "images/fyv/remolacha.jpeg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "fyv",
            promocionado: false
        }, {
            id: 10,
            titulo: "Zanahoria",
            costo: 35,
            imagen: "images/fyv/zanahoria.jpeg",
            descripcion: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomise",
            tipo: "fyv",
            promocionado: false
        }]
    }
})