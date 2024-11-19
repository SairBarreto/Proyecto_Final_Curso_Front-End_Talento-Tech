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
  
//Configuracion para que se agregen los productos al carrito
const cardInfo = document.querySelector('.card-producto')
const filaProducto = document.querySelector('.fila-productos')

//Lista de todos los contenedores de los productos
const productosLista = document.querySelector('#productos')

//Variable de arreglos de Productos
let todosLosProductos = []

productosLista.addEventListener('click', e => {
  
  if(e.target.classList.contains('btn-anadir-card')){
    const producto = e.target.parentElement

    const infoProducto = {
      cantidad: 1,
      titulo: producto.querySelector('h2').textContent,
      precio: producto.querySelector('p').textContent,
    }

    const existeProducto = todosLosProductos.some(product => product.titulo === infoProducto.titulo)

    if(existeProducto){
       const productos = todosLosProductos.map(product => {
        if(product.titulo === infoProducto.titulo){
          product.cantidad++;
          return product
        }
        else{return product}
       })

       todosLosProductos = [...productos]
    }
    else{
      // El ... lo que hace es que si la lista ya tiene elementos este se añade al final
    todosLosProductos = [...todosLosProductos, infoProducto];
    }
    
    mostrarEnHTML();
  }
})

//Funcion para mostrar en el HTML
const mostrarEnHTML = () => {
  
  //Limpio el HTML para que no se agregen duplicados
  filaProducto.innerHTML = '';

  todosLosProductos.forEach(producto => {
    const contenedorProducto = document.createElement('div');
    contenedorProducto.classList.add('card-producto');

    contenedorProducto.innerHTML = `
    <div class="informacion-producto-card">
        <div class="cantidad-producto-carrito">${producto.cantidad}</div>
        <p class="titulo-producto-carrito">${producto.titulo}</p>
        <span class="precio-producto-carrito">${producto.precio}</span>
    </div>
    <i class="fa-solid fa-xmark"></i>
    `;

    filaProducto.append(contenedorProducto);
  });
};