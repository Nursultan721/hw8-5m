import { useParams } from 'react-router-dom';
import './cardPage.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const CardPage = () => {
    const { id } = useParams();
    const [dish, setDish] = useState();
    const [count, setCount] = useState();

    useEffect(() => {
        axios.get(`http://localhost:5000/dishes/${id}`)
        .then(({data}) => {setDish(data)})
        .catch((error) => console.log(error))
    }, [id]);

    const fetchPostBasket = (dish) => {
        axios.post('http://localhost:5000/basket', dish)
        .then(() => {setCount(1)})
        .catch((error) => console.log(error))
    }
    
    return (
        <div className='container'>
            {
                dish &&
                (
                    <div className='cartDetail'>
                        <div>
                            <img src={dish.img} alt="" />
                        </div>
                        <div>
                            <h2>{dish.title}</h2>
                            <p>{dish.price}</p>
                            <p>Введите количество</p>
                            <input 
                                placeholder='1' 
                                type="number" 
                                min={1} 
                                max={10}
                                value={count}
                                onChange={(e) => setCount(e.target.value)}
                            />
                            <button onClick={() => fetchPostBasket({
                                name: dish.title, 
                                img: dish.img,
                                price: dish.price,
                                count: count
                            })}>В корзину</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

