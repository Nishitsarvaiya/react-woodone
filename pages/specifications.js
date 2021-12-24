import gsap from 'gsap';
import { useEffect } from 'react';
import { Gallery, Header, OrderBtn } from '../components';
import useLocoScroll from '../hooks/useLocoScroll';

const Specifications = () => {
    useLocoScroll();

    useEffect(() => {
        gsap.fromTo(
            ['.specs-header h1', '.specs-header h4'],
            1.5,
            { y: '200%' },
            { y: '0', delay: 0.75, ease: 'power3.out', stagger: 0.3 }
        );

        gsap.fromTo('.order-btn', 1.5, { scale: 0 }, { scale: 1, delay: 1, ease: 'power3.out' });

        gsap.fromTo('.spec-title h2', 1.5, { y: '100%' }, { delay: 1.8, y: '0', ease: 'power3.out', stagger: 0.07 });
        gsap.fromTo(
            '.spec-line__outer',
            1.5,
            { width: '0' },
            { delay: 1.5, width: '100%', ease: 'power3.out', stagger: 0.08 }
        );
        gsap.fromTo(
            ['.spec-left p', '.spec-right p'],
            1.5,
            { y: '100%' },
            { delay: 2, y: '0', ease: 'power3.out', stagger: 0.05 }
        );
        gsap.fromTo(
            '.spec-line__inner',
            1.5,
            { width: '0' },
            { delay: 1.8, width: '100%', ease: 'power3.out', stagger: 0.08 }
        );
    }, []);

    return (
        <main>
            <Header />
            <section className='specs-section' data-scroll-section>
                <div className='specs-header' data-scroll data-scroll-speed='2'>
                    <div className='clipper'>
                        <h1>Specifications</h1>
                    </div>
                    <div className='clipper'>
                        <h4>
                            Minimalist and stylish high quality desks made of real oak <br /> wood to make your
                            workspace modern and elegant.
                        </h4>
                    </div>
                </div>
                <div className='specs' data-scroll data-scroll-speed='0'>
                    <div className='spec'>
                        <div className='spec-title'>
                            <div className='clipper'>
                                <h2>Worktop</h2>
                            </div>
                        </div>
                        <div className='spec-line__outer'></div>
                        <div className='spec-rows'>
                            <div className='spec-row'>
                                <div className='spec-left'>
                                    <p>Wood</p>
                                </div>
                                <div className='spec-right'>
                                    <p>
                                        Oak (Three wood classes to pick: A / B / C.
                                        <a href='#'>Learn More</a>)
                                    </p>
                                </div>
                            </div>
                            <div className='spec-line__inner'></div>
                            <div className='spec-row'>
                                <div className='spec-left'>
                                    <p>Thickness</p>
                                </div>
                                <div className='spec-right'>
                                    <p>30 - 40 mm</p>
                                </div>
                            </div>
                            <div className='spec-line__inner'></div>
                            <div className='spec-row'>
                                <div className='spec-left'>
                                    <p>Width</p>
                                </div>
                                <div className='spec-right'>
                                    <p>1400 - 1800 mm</p>
                                </div>
                            </div>
                            <div className='spec-line__inner'></div>
                            <div className='spec-row'>
                                <div className='spec-left'>
                                    <p>Depth</p>
                                </div>
                                <div className='spec-right'>
                                    <p>600 - 800 mm</p>
                                </div>
                            </div>
                            <div className='spec-line__inner'></div>
                            <div className='spec-row'>
                                <div className='spec-left'>
                                    <p>Colors</p>
                                </div>
                                <div className='spec-right'>
                                    <p>Natural oak brown shade</p>
                                </div>
                            </div>
                            <div className='spec-line__inner'></div>
                            <div className='spec-row'>
                                <div className='spec-left'>
                                    <p>Finishing</p>
                                </div>
                                <div className='spec-right'>
                                    <p>Varnished, sharpen edges</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='spec'>
                        <div className='spec-title'>
                            <div className='clipper'>
                                <h2>Frame</h2>
                            </div>
                        </div>
                        <div className='spec-line__outer'></div>
                        <div className='spec-rows'>
                            <div className='spec-row'>
                                <div className='spec-left'>
                                    <p>Material</p>
                                </div>
                                <div className='spec-right'>
                                    <p>Metal</p>
                                </div>
                            </div>
                            <div className='spec-line__inner'></div>
                            <div className='spec-row'>
                                <div className='spec-left'>
                                    <p>Width</p>
                                </div>
                                <div className='spec-right'>
                                    <p>1100 - 1900 mm</p>
                                </div>
                            </div>
                            <div className='spec-line__inner'></div>
                            <div className='spec-row'>
                                <div className='spec-left'>
                                    <p>Height</p>
                                </div>
                                <div className='spec-right'>
                                    <p>580 - 1230 mm</p>
                                </div>
                            </div>
                            <div className='spec-line__inner'></div>
                            <div className='spec-row'>
                                <div className='spec-left'>
                                    <p>Capacity</p>
                                </div>
                                <div className='spec-right'>
                                    <p>125 kg</p>
                                </div>
                            </div>
                            <div className='spec-line__inner'></div>
                            <div className='spec-row'>
                                <div className='spec-left'>
                                    <p>Colors</p>
                                </div>
                                <div className='spec-right'>
                                    <p>Black</p>
                                </div>
                            </div>
                            <div className='spec-line__inner'></div>
                            <div className='spec-row'>
                                <div className='spec-left'>
                                    <p>Features</p>
                                </div>
                                <div className='spec-right'>
                                    <p>Adjustable (height), Convertible, Extendable, Quick assembly</p>
                                </div>
                            </div>
                            <div className='spec-line__inner'></div>
                            <div className='spec-row'>
                                <div className='spec-left'>
                                    <p>Warranty</p>
                                </div>
                                <div className='spec-right'>
                                    <p>3 Years on non-artifical damage</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Gallery />
            <OrderBtn />
        </main>
    );
};

export default Specifications;
