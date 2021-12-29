import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useLocoScroll = () => {
    const router = useRouter();

    useEffect(() => {
        let scroll = null;
        const scrollEl = document.querySelector('[data-scroll-container]');

        import('locomotive-scroll').then((LocomotiveScroll) => {
            scroll = new LocomotiveScroll.default({
                el: scrollEl,
                smooth: true,
                inertia: 0.76,
                class: 'is-revealed',
            });
        });

        return () => {
            if (scroll) {
                scroll.destroy();
                console.log('>>> LocoScroll Killed <<<');
            }
        };
    }, [router.asPath]);
};

export default useLocoScroll;
