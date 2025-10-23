import { Link } from 'react-router-dom';
import './cart.scss';
import axios from 'axios';

export const Cart = ({id, img, text, price}) => {

    const fetchPostBasket = (dish) => {
        axios.post('http://localhost:5000/basket', dish)
        .then(() => {alert('блюдо добавлено')})
        .catch((error) => console.log(error))
    }
    return (
        <div className='cart'>
            <Link to={`/card-page/${id}`}>
                <img src={img} alt="" />
            </Link>
            <p>{text}</p>
            <div className='order'>
                <h3>{price}</h3>
                <button onClick={() => fetchPostBasket({
                    name: text, 
                    img: img,
                    price: price,
                    count: "1"
                })}>В корзину</button>
            </div>
        </div>
    );
}

