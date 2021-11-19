Vue.component('lista-cp', {
    props: ['item'],
    template: /* html */ `
        <tr>
            <td>{{ item.titulo }}</td>
            <td>$ {{ item.costo }}</td>
            <td v-if="item.promocionado">Tiene promoción</td>
            <td v-else>No tiene promoción</td>
        </tr>
    `
})