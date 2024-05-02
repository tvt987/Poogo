import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import HeaderMain from './HeaderMain/HeaderMain';
import HeaderNav from './HeaderNav/HeaderNav';
import { useRef, useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function Header() {
    const headerRef = useRef();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef && window.scrollY > 0) {
                headerRef.current.classList.add(styles.scrolled);
                setScrolled(true);
            } else if (headerRef && window.screenY == 0) {
                headerRef.current.classList.remove(styles.scrolled);
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll());
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [window.scrollY]);

    return (
        <header ref={headerRef} className={cx('wrapper')}>
            <div className={cx('container')}>
                <HeaderMain scrolled={scrolled} />
                <HeaderNav scrolled={scrolled} />
            </div>
        </header>
    );
}

export default Header;
