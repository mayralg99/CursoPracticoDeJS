const precioConDescuento = (precio, descuento) => precio - ((precio*descuento)/100);

function calcularPrecioDescuento(){
    const precio = document.getElementById('precio').value;
    const descuento = document.getElementById('descuento').value;
    const precioAPagar = precioConDescuento(precio, descuento);
    
    document.getElementById('precioDescuento').innerText = `$ ${precioAPagar}`
}