import { useEffect, useState } from 'react';
import './basketPage.scss';
import axios from 'axios';

const BasketPage = () => {
    const [data, setData] = useState();

    const fetchBasket = () => {
        axios.get('http://localhost:5000/basket')
        .then(({data}) => {setData(data)})
        .catch((error) => {console.log(error)})
    }

    useEffect(() => {
        fetchBasket()
    }, [])

    const orderDish = (order) => {
        axios.post('http://localhost:5000/order', order)
        .then(() => {})
    }
    return (
        <div className='container'>
            {
                data &&
                data.map((dish) => (
                    <div className='dish-basket'>
                        <div>
                            <img src={dish.img} alt="" />
                        </div>
                        <div>
                            <h2>{dish.title}</h2>
                            <p>{(+dish.price) * dish.count} сом</p>
                            <p>{dish.count}</p>
                            <button>Delete</button>
                            <button>Chenge</button>
                        </div>
                    </div>
                ))
            }

            <h2>Общая сумма: {
                data &&
                data.reduce((acc, sum) => acc + (+sum.price * sum.count), 0)    
            } сом</h2>

            <button onClick={() => {
                orderDish({
                    name: 'user',
                    order: data
                })
            }}>Заказать</button>
        </div>
    );
}

export default BasketPage;
