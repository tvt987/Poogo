import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { useEffect, useRef, useState } from 'react';
import Header from '../Components/Header/Header';
import Home from '~/Pages/Home/Home';
import Footer from '~/Static/Layout/Components/Footer/Footer';
import About from '~/Pages/About/About';
import Products from '~/Pages/Products/Products';
import News from '~/Pages/News/News';
import Contact from '~/Pages/Contact/Contact';
import Chain from '~/Pages/Chain/Chain';
import HoverImage from '~/Pages/Test/Test';
import Detail from '~/Pages/Detail/Detail';
import Login from '~/Pages/Login/Login';
import Compare from '~/Pages/Compare/Compare';
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
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
}

export default DefaultLayout;
