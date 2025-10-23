import './menu.scss';
import img1 from '../../../img/menu-first-img.png'
import img2 from '../../../img/menu-second-img.png'

export const Menu = () => {
    return (
        <div className='menu-container container'>
			<div className='line-box'>
				<h3>Меню</h3>
				<div className='line'></div>
			</div>
			<div className='columns'>
				<div className='column-1'>
					<h1 className='title'>Меню</h1>
					<div className='text-box'>
						<p>
							At faucibus nullam mauris vitae ut non. Augue libero non nibh nec,
							et eget erat. Nascetur nunc neque, varius massa aliquam interdum
							turpis massa. Ac tortor aliquam risus, interdum nisl mauris sit.
							Ut placerat fermentum pellentesque ac at. Vitae venenatis faucibus
							urna mi eget vitae quam eu. Euismod sed mauris id turpis iaculis.
							Erat rutrum dolor, vitae morbi.
						</p>
						<p>
							Nunc cras cras aliquet blandit faucibus massa sagittis semper.
						</p>
					</div>
				</div>
				<div className='column-2'>
					<div className='box'>
						<img src={img1} alt='' />
						<div className='line-box'>
							<h3>Основное меню</h3>
							<div className='line'></div>
						</div>
					</div>
					<div className='box'>
						<img src={img2} alt='' />
						<div className='line-box'>
							<h3>Барная карта</h3>
							<div className='line'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
}

