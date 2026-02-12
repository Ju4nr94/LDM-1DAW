function listaCompra() {
    const productos = [
        { nombre: "Teclado", descripcion: "Teclado mecánico", unidades: 2, precio: 50 },
        { nombre: "Ratón", descripcion: "Ratón inalámbrico", unidades: 1, precio: 25 },
        { nombre: "Monitor", descripcion: "Monitor 24 pulgadas", unidades: 1, precio: 180 },
    ];
    const lista = document.getElementById('productos');
    const total = document.getElementById('total');
    let precioFinal = 0;
    productos.forEach(function(n) {
        const li = document.createElement("li");
        li.textContent = n.descripcion + " | Precio por unidad: " + n.precio + "€ | Unidades: " + n.unidades+ " | Subtotal: " + (n.precio * n.unidades) + "€";
        lista.appendChild(li);
        precioFinal = precioFinal + n.precio;
    })
    precioFinal = precioFinal + (precioFinal * 0.21);
    total.textContent = "Total: " + precioFinal + "€";
}
