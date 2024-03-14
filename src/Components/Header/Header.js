import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import HeaderMain from './HeaderMain/HeaderMain';
import HeaderNav from './HeaderNav/HeaderNav';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <HeaderMain></HeaderMain>
                <HeaderNav></HeaderNav>
            </div>
        </header>
    );
}

export default Header;
