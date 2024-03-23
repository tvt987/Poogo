import Header from '~/Components/Header/Header';
import Body from '~/Components/Body/Body';
import Footer from '~/Components/Footer';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { useEffect, useRef, useState } from 'react';
const cx = classNames.bind(styles);
function DefaultLayout() {
    const [scrolled, setScrolled] = useState();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                // Cuộn
                setScrolled(true);
            } else {
                // Không cuộn
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div>
            <Header scrolled={scrolled}></Header>
            <Body></Body>
            <Footer></Footer>
        </div>
    );
}

export default DefaultLayout;
