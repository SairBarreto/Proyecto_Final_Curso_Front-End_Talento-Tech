//Configacion del boton Carrito para que oculte y muestre los productos seleccionados

const btnCarrito = document.querySelector('.contenedor-productos-para-comprar')
const contenedorProductosSeleccionados = document.querySelector('.contenedor-productos-card')

btnCarrito.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace recargue la página (Ya lo solucione poniendo un # en el href)
    contenedorProductosSeleccionados.classList.toggle('ocultar-card')
})
/* Otra version de lo anterior
document.getElementById("toggleCarrito").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que la página recargue
    const carritoDiv = document.querySelector(".contenedor-productos-card");
  
    // Alterna la clase 'ocultar-card' en el div del carrito
    carritoDiv.classList.toggle("ocultar-card");
  });
*/
  
