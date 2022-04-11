import '../../App.css'
import trash_icon from '../../Vector.svg'

type Products = {
    "id": string,
    "product_name": string,
    "price": number,
    "stock": boolean,
    "has_forecast": boolean,
    "day_for_forecast": number,
    "product_limited": number
  }

export function ShoppingCard (props: Products) {
    function hasStock (stock: boolean, hasForecast: boolean, dayForForecast: number) {
        let color, result;
        
        if (stock === true) color = "green", result = "Em estoque"
        else if (stock === false && hasForecast === true) color = "gray", result = `Disponivel em ${dayForForecast} dias`
        else color = "red", result = "Fora de Estoque"

        return (<div className={color}>{result}</div>)
    }
    return (
        <section>
            <div className="product_image"></div>
            <div className="info">
                <h2>{props.product_name}</h2>
                <div className="price_and_stock">
                    <div className="price">R$ {props.price.toLocaleString("pt-BR")}</div> 
                    { hasStock(props.stock, props.has_forecast, props.day_for_forecast)}
                </div>
                
                <div className="unities">
                    <p>Unidade: <input type="number" min="0" max={props.product_limited}/></p>
                    <a href={`/delete?id="${props.id}"`}>
                        <img src={trash_icon} alt="trash" width="20"/>
                    </a>
                </div>
            </div>
        </section>
    )
}