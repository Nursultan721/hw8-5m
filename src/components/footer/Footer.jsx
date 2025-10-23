import './footer.scss';
import Logo from '../../img/logo.svg'

export const Footer = () => {
    return (
        <footer>
			<div className='wrapper'>
				<img src={Logo} alt='' />
				<a href='https://youtu.be/O5cA-erBqd4?si=GfKkLh-ilZbyRcax'>Политика конфиденциальности</a>
				<a href='https://youtu.be/O5cA-erBqd4?si=GfKkLh-ilZbyRcax'>Дизайн d-e-n.ru</a>
			</div>
		</footer>
    );
}

