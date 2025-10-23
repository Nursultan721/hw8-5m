import { useEffect, useState } from "react";
import { Cart } from "../../features";
import './menu.scss';
import axios from 'axios';

export const Dish = () => {
    const [dishes, setDishes] = useState([]);
    const [catogory, setCategory] = useState('all');
    const [filtered, setFiltered] = useState();    

    const filter = () => {
        if(catogory === 'all'){
            setFiltered(dishes);
        }else{
            const filterData = dishes.filter((dish) => dish.type === catogory);
            setFiltered(filterData);
        }
    }

    useEffect(() => {
        filter();
    })

    useEffect(() => {
        axios('http://localhost:5000/dishes')
        .then(({data}) => {setDishes(data)})
    }, [])
    
    return (
        <div className="container">
            <div className="navigate">
                <p onClick={() => {setCategory('all')}}>Все</p>
                <p onClick={() => {setCategory('lanch')}}>Завтрак</p>
                <p onClick={() => {setCategory('firstDishes')}}>1 блюдо</p>
                <p onClick={() => {setCategory('secondDishes')}}>2 блюдо</p>
                <p onClick={() => {setCategory('desert')}}>Десерты</p>
                <p onClick={() => {setCategory('drinks')}}>Напитки</p>
            </div> 
            <div className="dishes">
                {
                    filtered &&
                    filtered.map((dish) => (
                        // <Link to={`/card-page/${dish.id}`}>
                            <Cart 
                                key={dish.id} 
                                id={dish.id}
                                img={dish.img} 
                                text={dish.title} 
                                price={dish.price} />
                        // </Link>
                    ))
                }
            </div> 
        </div>
    );
}

