 export const listaProductos = [
    { 
        id: '1', 
        name: 'Iphone 12', 
        price: 348.000, 
        category: 'celular', 
        img:'../image/i-12.png', 
        stock: 25, 
        description:'Iphone 12 / Negro / 128GB'
    },
    { 
    id: '2', 
    name: 'Notebook Lenovo V15', 
    price: 167.000, 
    category: 'computadora', 
    img:'../image/notebbok.png', 
    stock: 16, 
    description:' Core i5 - 1135G7 / 8gb RAM / SSD 256GB / 15.6"'
},
    
{ 
    id: '3', 
    name: 'Ipad 8va generacion', 
    price: 89.000, 
    category: 'tablet', 
    img:'../image/ipad.png', 
    stock: 10, 
    description:'iPad 10.2" / Wi-Fi / 128GB / Silver'
 },

 { 
    id: '4', 
    name: 'Celular Samsung A32', 
    price: 50.000, 
    category: 'celular', 
    img:'../image/celsamsung.png', 
    stock: 5, 
    description:'Deleitá tus ojos con los intensos detalles gracias a la pantalla FHD+ Super AMOLED, que alcanza los 800 nits¹ para una máxima claridad incluso a plena la luz del día. Eye Comfort Shield² reduce la luz azul y Real Smooth mantiene la vista fluida, ya sea que estés jugando o desplazándote por la pantalla. Todo en la pantalla de Infinity-U de 6,4”.'
 },

 { 
    id: '5', 
    name: 'Notebook HP Pavilon', 
    price: 150.000, 
    category: 'computadora', 
    img:'../image/hp.jpg', 
    stock: 12, 
    description:'Procesador AMD Ryzen™ 5, Windows 11 Home,Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB, 15.6"'
 },

 { 
    id: '6', 
    name: 'Auriculares', 
    price: 8.000, 
    category: 'otros', 
    img:'../image/auriculares.jpg', 
    stock: 10, 
    description:'Auricular Xiaomi Mi Earbuds Basic 2 es un diseño sofisticado y ligero una de las mejores opciones para pasarte al mundo de los auriculares True Wireless. Estos te permiten disfrutar de tu música y de tus entrenamientos como nunca antes, sin líos de cables.'
 },

 



]


  // Exportar el componente Productos 
  export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(listaProductos);
        }, 500);
    })
}
   
  // Exportar el componente Productos por el Id
   export const getProductoById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(listaProductos.find(producto => producto.id === id));
        }, 500);
    }
    )}

   // Exportar el componente Productos por la categoria
    export const getProductoByCategory = (categoryId) => {
        return new  Promise((resolve) => {
            setTimeout(() => {
                resolve(listaProductos.filter(producto => producto.category === categoryId));
            }, 500);
        }
    )}