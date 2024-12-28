//Configacion del boton Carrito para que oculte y muestre los productos seleccionados

const btnCarrito = document.querySelector('.contenedor-productos-para-comprar');
const contenedorProductosSeleccionados = document.querySelector('.contenedor-productos-card');

btnCarrito.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace recargue la página (Ya lo solucione poniendo un # en el href)
    contenedorProductosSeleccionados.classList.toggle('ocultar-card');
});
  
//Configuracion para que se agregen los productos al carrito
const cardInfo = document.querySelector('.card-producto');
const filaProducto = document.querySelector('.fila-productos');

//Lista de todos los contenedores de los productos
const productosLista = document.querySelector('#productos');

//Variable de arreglos de Productos
let todosLosProductos = [];
const totalProductosPagar = document.querySelector('.total-pagar');

if(productosLista){
  productosLista.addEventListener('click', e => {
  
    if(e.target.classList.contains('btn-anadir-card')){
      const producto = e.target.parentElement;
  
      const infoProducto = {
        cantidad: 1,
        titulo: producto.querySelector('h2').textContent,
        precio: producto.querySelector('p').textContent,
      };
  
      const existeProducto = todosLosProductos.some(product => product.titulo === infoProducto.titulo);
  
      if(existeProducto){
         const productos = todosLosProductos.map(product => {
          if(product.titulo === infoProducto.titulo){
            product.cantidad++;
            return product;
          }
          else{return product;}
         })
  
         todosLosProductos = [...productos];
      }
      else{
        // El ... lo que hace es que si la lista ya tiene elementos este se añade al final
        todosLosProductos = [...todosLosProductos, infoProducto];
      }
      
      guardarCarritoEnLocalStorage();
      mostrarEnHTML();
    }
  });
}

//Funcion para eliminar un producto del carrito
filaProducto.addEventListener('click', (e) =>{

  if(e.target.classList.contains('fa-xmark')){
    const producto = e.target.parentElement;
    const titulo = producto.querySelector('p').textContent;

    const productoEncontrado = todosLosProductos.find(product => product.titulo === titulo);

    if(productoEncontrado){
      if(productoEncontrado.cantidad > 1){
        productoEncontrado.cantidad--;
      }
      else{
        todosLosProductos = todosLosProductos.filter(product => product.titulo !== titulo);
      }
    }

    // Actualizar el LocalStorage después de eliminar el producto
    localStorage.setItem('carrito', JSON.stringify(todosLosProductos));

    // Actualizar la vista del carrito
    mostrarEnHTML();
  }
});

//Funcion para mostrar en el HTML
const mostrarEnHTML = () => {
  
  //Limpio el HTML para que no se agregen duplicados
  filaProducto.innerHTML = '';

  let totalPagar = 0;

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

    totalPagar = totalPagar + parseInt(producto.cantidad * producto.precio.slice(1)); //Con el slice me aseguro que empiece de la posicion 1 para que no tome el signo $ y de error el parseInt()
    
  });

  totalProductosPagar.innerText = `$${totalPagar}`;
};

// Guardo los productos en LocalStorage
const guardarCarritoEnLocalStorage = () => {
  localStorage.setItem('carrito', JSON.stringify(todosLosProductos));
}

//Recupero los productos del LocalStorage
const cargarCarritoDesdeLocalStorage = () => {
  const carritoGuardado = localStorage.getItem('carrito');
  if(carritoGuardado){
    todosLosProductos = JSON.parse(carritoGuardado);
    mostrarEnHTML();
  }
}

// Sirve para que el carrito se mantenga con los productos al cambiar de pagina
document.addEventListener('DOMContentLoaded', cargarCarritoDesdeLocalStorage);

//Pagina Pagar se cargan los producto del carrito una vez que el DOM este cargado
document.addEventListener('DOMContentLoaded', () => {
  const mostrarFilaProductos = document.querySelector('.mostrar-fila-productos');
  const mostrarTotalPagar = document.querySelector('.mostrar-total-pagar');

  const productosGuardados = JSON.parse(localStorage.getItem('carrito')) || [];

  let totalPagar = 0;

  productosGuardados.forEach(producto => {
      const contenedorProducto = document.createElement('div');
      contenedorProducto.classList.add('producto-en-carrito');

      contenedorProducto.innerHTML = `
          <div class="producto-detalle">
              <img src="../Imagenes/Productos/${producto.titulo.replace(/\s/g, '_')}.jpg" alt="${producto.titulo}" class="imagen-producto-carrito">
              <p class="titulo-producto">${producto.titulo}</p>
              <p class="precio-unitario">Precio unitario: ${producto.precio}</p>
              <p class="precio-total">Total: $${producto.cantidad * parseInt(producto.precio.slice(1))}</p>
              <button class="btn-eliminar" data-titulo="${producto.titulo}">Eliminar</button>
          </div>
      `;

      totalPagar += producto.cantidad * parseInt(producto.precio.slice(1));
      mostrarFilaProductos.appendChild(contenedorProducto);
  });

  mostrarTotalPagar.innerText = `$${totalPagar}`;

  mostrarFilaProductos.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-eliminar')) {
        const tituloProducto = e.target.getAttribute('data-titulo');
        const indexProducto = productosGuardados.findIndex(producto => producto.titulo === tituloProducto);
        if (indexProducto > -1) {
            productosGuardados.splice(indexProducto, 1);
            localStorage.setItem('carrito', JSON.stringify(productosGuardados));
            e.target.parentElement.remove();

            // Recalcular total
            let nuevoTotal = 0;
            productosGuardados.forEach(producto => {
                nuevoTotal += producto.cantidad * parseInt(producto.precio.slice(1));
            });
            mostrarTotalPagar.innerText = `$${nuevoTotal}`;
        }
    }
});
});

//Mas adelante añadir un metodo de pago
const btnPagar = document.querySelector('.btn-pagar-total');
console.log(btnPagar);
if(btnPagar){
  btnPagar.addEventListener('click', () => {
    if (todosLosProductos.length === 0) {
      alert('Debe añadir al menos un producto al carrito para proceder con el pago.');
    } else {
      alert('El pago está deshabilitado por ahora. Intente más tarde.');
    }
  });
}