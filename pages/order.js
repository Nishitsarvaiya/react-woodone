import gsap from 'gsap';
import { useEffect } from 'react';
import { CustomSelect, Header } from '../components';
import useLocoScroll from '../hooks/useLocoScroll';

const Order = () => {
	const options = {
		width: [
			{
				id: 1,
				value: 1500,
			},
			{
				id: 2,
				value: 1800,
			},
			{
				id: 3,
				value: 2000,
			},
		],
		depth: [
			{
				id: 1,
				value: 30,
			},
			{
				id: 2,
				value: 40,
			},
			{
				id: 3,
				value: 50,
			},
		],
		quality: [
			{
				id: 1,
				value: 'Teak Wood',
			},
			{
				id: 2,
				value: 'Sal Wood',
			},
			{
				id: 3,
				value: 'Oak Wood',
			},
			{
				id: 4,
				value: 'Mahogany Wood',
			},
		],
		quantity: [
			{
				id: 1,
				value: 1,
			},
			{
				id: 2,
				value: 2,
			},
			{
				id: 3,
				value: 3,
			},
			{
				id: 4,
				value: 4,
			},
			{
				id: 5,
				value: 5,
			},
		],
	};

	useLocoScroll();

	useEffect(() => {
		gsap.fromTo(
			'.order-title__line',
			1.5,
			{ y: '200%', scaleX: 1.5 },
			{ y: '0', delay: 1, scaleX: 1, transformOrigin: 'left', ease: 'power3.out', stagger: 0.1 }
		);

		gsap.fromTo(
			['.order-text', '.order-message'],
			1,
			{ y: '50%', opacity: 0 },
			{ delay: 1.8, y: '0', opacity: 1, ease: 'power3.out', stagger: 0.3 }
		);

		gsap.fromTo(
			'.order-form-section-title h3',
			1,
			{ y: '50%', opacity: 0 },
			{ delay: 1.8, y: '0', opacity: 1, ease: 'power3.out', stagger: 0.3 }
		);

		gsap.fromTo(
			'.order-form-section .title-line',
			1.5,
			{ scaleX: '0' },
			{ delay: 1.8, scaleX: '1', ease: 'power3.out', stagger: 0.7 }
		);

		gsap.fromTo(
			'.custom-select-wrapper',
			1.5,
			{ y: '100%', opacity: 0 },
			{ delay: 2, y: '0', opacity: 1, ease: 'power3.out', stagger: 0.2 }
		);

		gsap.fromTo(
			'.order-info > *',
			1,
			{ y: '100%', opacity: 0 },
			{ delay: 3, y: '0', opacity: 1, ease: 'power3.out', stagger: 0.3 }
		);

		gsap.fromTo(
			'.order-price > *',
			1,
			{ y: '100%', opacity: 0 },
			{ delay: 3, y: '0', opacity: 1, ease: 'power3.out', stagger: 0.3 }
		);

		gsap.fromTo(
			'input',
			1.5,
			{ y: '100%', opacity: 0 },
			{ delay: 3.5, y: '0', opacity: 1, ease: 'power3.out', stagger: 0.2 }
		);

		gsap.fromTo(
			'.submit-btn',
			1.5,
			{ y: '100%', opacity: 0 },
			{ delay: 3.8, y: '0', opacity: 1, ease: 'power3.out' }
		);
	}, []);

	return (
		<main>
			<Header />
			<section className='order-section' data-scroll-section>
				<div className='order-grid'>
					<div className='order-col' data-scroll data-scroll-speed='-3' data-scroll-position='top'>
						<h1 className='order-title'>
							<div className='order-title__line'>Order your</div>
							<div className='order-title__line'>new desk</div>
						</h1>
						<p className='order-text'>
							Right now we&apos;re preparing to launch the sales of desks. <br />
							Please leave your email if you are interested in purchase
							<br /> of Woodone&apos;s desks and <span>you will receive 10% discount.</span>
						</p>
						<p className='order-message'>
							We will let you know when the sale starts. <br />
							Woodone Team.
						</p>
					</div>
					<div className='order-col'>
						<div className='order-form'>
							<div className='order-form-section'>
								<div className='order-form-section-title'>
									<h3>Desk</h3>
									<h3>01 / 02</h3>
								</div>
								<div className='title-line'></div>
								<div className='order-form-section-inputs'>
									<CustomSelect defaultText='Select width *' options={options.width} />
									<CustomSelect defaultText='Select depth *' options={options.depth} />
									<CustomSelect defaultText='Wood quality *' options={options.quality} />
									<CustomSelect defaultText='Quantity *' options={options.quantity} />
								</div>
							</div>
							<div className='order-form-section'>
								<div className='order'>
									<div className='order-info'>
										<div className='title'>My Desk</div>
										<p>1400mm x 60mm x 40mm, A-class Oak Wood</p>
										<p>Electric Standing Frame</p>
									</div>
									<div className='order-price'>
										<div className='title'>Cost</div>
										<div className='price'>$699.00</div>
										<div className='bottom'>includes VAT</div>
									</div>
								</div>
							</div>
							<div className='order-form-section'>
								<div className='order-form-section-title'>
									<h3>Personal</h3>
									<h3>02 / 02</h3>
								</div>
								<div className='title-line'></div>
								<div className='order-form-section-inputs'>
									<input type='text' placeholder='First Name *' data-cursor-target />
									<input type='text' placeholder='Last Name *' data-cursor-target />
									<input type='text' placeholder='Email *' data-cursor-target />
									<input type='text' placeholder='Phone' data-cursor-target />
									<input type='text' placeholder='Country *' data-cursor-target />
									<input type='text' placeholder='City *' data-cursor-target />
									<input type='text' placeholder='Street *' data-cursor-target />
									<input type='text' placeholder='Postal Code *' data-cursor-target />
								</div>
							</div>
							<button className='submit-btn' data-cursor-target data-cursor-stick>
								<div className='icon'>
									<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
										<path d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z' />
									</svg>
								</div>
								<div className='text'>Notify Me</div>
								<div className='price'>$699.00 (1)</div>
							</button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Order;
