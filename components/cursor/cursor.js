import gsap from 'gsap';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState, useContext } from 'react';
import { CursorContext } from './cursor.manager.js';

const Cursor = () => {
    const router = useRouter();
    const { size, setSize } = useContext(CursorContext);
    const [isVisible, setIsVisible] = useState(false);
    const cursorRef = useRef();
    const mouseRef = useRef({
        pos: {
            x: 0,
            y: 0,
        },
        vel: {
            x: 0,
            y: 0,
        },
        stick: false,
        skew: 0,
        speed: 0.76,
        raf: -1,
    });

    const setStick = (el) => {
        mouseRef.current.stick = {
            x: el.getBoundingClientRect().left + el.getBoundingClientRect().width / 2,
            y: el.getBoundingClientRect().top + el.getBoundingClientRect().height / 2,
        };
    };
    const removeStick = () => {
        mouseRef.current.stick = false;
    };
    const setSkew = (skew) => (skew ? (mouseRef.current.skew = skew) : 1);
    const removeSkew = () => (mouseRef.current.skew = 0);

    useEffect(() => {
        document.body.addEventListener('mouseenter', () => setIsVisible(true));
        document.body.addEventListener('mouseleave', () => setIsVisible(false));
        window.addEventListener('mousemove', function (e) {
            gsap.to(mouseRef.current.pos, {
                x: mouseRef.current.stick
                    ? mouseRef.current.stick.x - 0.1 * (mouseRef.current.stick.x - e.clientX)
                    : e.clientX,
                y: mouseRef.current.stick
                    ? mouseRef.current.stick.y - 0.1 * (mouseRef.current.stick.y - e.clientY)
                    : e.clientY,
                overwrite: true,
                ease: 'expo.out',
                duration: mouseRef.current.speed,
                onUpdate: function () {
                    return (mouseRef.current.vel = {
                        x: e.clientX - mouseRef.current.pos.x,
                        y: e.clientY - mouseRef.current.pos.y,
                    });
                },
            });
        });

        return () => {
            document.body.removeEventListener('mouseenter', null);
            document.body.removeEventListener('mouseleave', null);
            window.removeEventListener('mousemove', null);
        };
    }, []);

    useEffect(() => {
        const getScale = (a, b) => Math.abs(Math.min(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)) / 1e3, 0.04));
        const getAngle = (a, b) => (180 * Math.atan2(b, a)) / Math.PI;

        const move = () => {
            mouseRef.current.raf = requestAnimationFrame(move);
            if (0 === mouseRef.current.vel.y || (0 === mouseRef.current.vel.x && !mouseRef.current)) {
                return false;
            }
            let angle = getAngle(mouseRef.current.vel.x, mouseRef.current.vel.y);
            let scaleFactor = getScale(mouseRef.current.vel.x, mouseRef.current.vel.y) * mouseRef.current.skew;

            gsap.set(cursorRef.current, {
                x: mouseRef.current.pos.x,
                y: mouseRef.current.pos.y,
                rotation: angle,
                scaleX: 1 + scaleFactor,
                scaleY: 1 - scaleFactor,
            });
        };

        mouseRef.current.raf = requestAnimationFrame(move);
    }, []);

    useEffect(() => {
        let targets = document.querySelectorAll('[data-cursor-target]');
        let stickers = document.querySelectorAll('[data-cursor-stick]');

        targets.forEach((target) => {
            target.addEventListener('mouseenter', (e) => {
                if (e.target.classList.contains('image')) {
                    setSize('lg');
                } else if (e.target.classList.contains('order-btn')) {
                    removeSkew();
                    setSize('lg');
                } else {
                    removeSkew();
                    setSize('md');
                }
            });
            target.addEventListener('mouseleave', () => {
                setSize('sm');
                setSkew(2);
            });
            target.addEventListener('click', () => setSize('sm'));
        });

        stickers.forEach((sticker) => {
            sticker.addEventListener('mouseenter', () => {
                setStick(sticker);
            });
            sticker.addEventListener('mouseleave', () => removeStick());
            sticker.addEventListener('click', () => removeStick());
        });

        return () => {
            targets.forEach((target) => {
                target.removeEventListener('mouseenter', null);
                target.removeEventListener('mouseleave', null);
                target.removeEventListener('click', null);
            });
            stickers.forEach((sticker) => {
                sticker.removeEventListener('mouseenter', null);
                sticker.removeEventListener('mouseleave', null);
            });
        };
    }, [router.asPath]);

    return (
        <div className={isVisible ? 'base-cursor is-visible' : 'base-cursor'} ref={cursorRef}>
            <div className='outer-cursor'>
                <div className={`inner-cursor cursor-${size}`}></div>
            </div>
        </div>
    );
};

export default Cursor;
