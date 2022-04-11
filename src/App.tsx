import './App.css'
import products from './database/products.json'
import { ShoppingCard } from './components/ShoppingCart'


function App() {
  
  const shopping_cart = products.map(product => {
      return (
        <ShoppingCard
          id={product.id}
          product_name={product.product_name}
          price={product.price}
          stock={product.stock}
          has_forecast={product.has_forecast}
          day_for_forecast={product.day_for_forecast}
          product_limited={product.product_limited}
        />
      )
    })
  

  return (
    <div className="App">
      <h1>Carrinho de compras</h1>
      {shopping_cart}
      
      <footer>
        <p>Desenvolvido por <a href="https://github.com/EuCarlos/" target="_blank">Carlos Alves</a></p>
        <p><a href="https://carlosalves.vercel.app/" target="_blank">carlosalves.vercel.app</a></p>
      </footer>
    </div>
  )
}

export default App
