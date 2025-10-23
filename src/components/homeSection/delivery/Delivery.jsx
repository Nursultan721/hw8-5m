import './delivery.scss';

export const Delivery = () => {
    return (
        <div className='delivery-container container'>
			<div className='line-box'>
				<h3>доставка</h3>
				<div className='line'></div>
			</div>
			<h1 className='title'>Служба доставки</h1>
			<div className='text-box'>
				<p>
					Phasellus diam, ultrices lobortis integer et. Diam, purus vel
					sagittis, non, a. In risus, venenatis enim vitae mauris aliquet orci.
					Consectetur nibh interdum nullam ut lobortis eu etiam sem. Et in vitae
					pellentesque non, lectus orci natoque faucibus suspendisse. Semper
					aliquam id et ultrices velit donec lacus. In odio sit nibh volutpat
					cras placerat sit feugiat dignissim. Rutrum et suspendisse tortor,
					lobortis eleifend in fringilla. Egestas cursus imperdiet cursus dui,
					nulla id massa. Hendrerit nam enim semper porttitor imperdiet diam
					semper. Nulla sit etiam cras morbi enim elementum euismod sapien.
				</p>
				<div className='btns'>
					<button className='btn grey'>Подробнее</button>
					<button className='btn white'>Условия доставки</button>
				</div>
			</div>
		</div>
    );
}

