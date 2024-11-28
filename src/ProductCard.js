
import './ProductCard.css';

function ProductCard({ url, alt, name, price, description }) {

    return (

        <>

            <div className="product-card">
                <img className="img" src={url} alt={alt} />
                <h2> {name}</h2><br />
                <p>Price is : ${price}</p>
                <p>Description is :{description}</p>
                <button className="button">Add to cart</button>
            </div >

        </>
    );
}

export default ProductCard