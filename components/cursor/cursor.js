import gsap from 'gsap';
import { useEffect, useRef, useState, useContext } from 'react';
import { CursorContext } from './cursor.manager.js';

const Cursor = () => {
    const { size } = useContext(CursorContext);
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
        skew: 0,
        speed: 0.76,
        raf: -1,
    });

    useEffect(() => {
        const setSkew = (skew) => (skew ? (mouseRef.current.skew = skew) : 1);
        setSkew(2);

        document.body.addEventListener('mouseenter', () => setIsVisible(true));
        document.body.addEventListener('mouseleave', () => setIsVisible(false));
        window.addEventListener('mousemove', function (e) {
            gsap.to(mouseRef.current.pos, {
                x: e.clientX - cursorRef.current.getBoundingClientRect().width / 2,
                y: e.clientY - cursorRef.current.getBoundingClientRect().height / 2,
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
            document.body.removeEventListener('mouseenter');
            document.body.removeEventListener('mouseleave');
            window.removeEventListener('mousemove');
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

    return (
        <div className={isVisible ? 'base-cursor is-visible' : 'base-cursor'} ref={cursorRef}>
            <div className='outer-cursor'>
                <div className={`inner-cursor cursor-${size}`}></div>
            </div>
        </div>
    );
};

export default Cursor;
