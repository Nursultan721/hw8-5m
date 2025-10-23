import './modal.scss';
import logo from '../../img/logo.svg';
import { IoCloseSharp } from "react-icons/io5";

export const Modal = ({open, setOpen}) => {
    if(!open) return;

    return (
        <div onClick={() => {setOpen(false)}} className='modal'>
            <div className='order'>
                <img src={logo} alt="" />
                <button><IoCloseSharp /></button>
                <h2>Забронировать столик</h2>
                <input type="text" />
                <input type="text" />
                <div>
                    <input type="text" />
                    <input type="text" />
                </div>
                <button>Забронировать</button>
            </div>
        </div>
    );
}
