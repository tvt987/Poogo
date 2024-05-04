import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { CircleIcon } from '~/Static/icons/icons';

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('header')}>
            <div className={cx('title')}>tất cả sản phẩm</div>
            <div className={cx('content')}>
                <div className={cx('content-1')}>Trang chủ</div>
                <div className={cx('icon')}>
                    <CircleIcon></CircleIcon>
                </div>
                <div className={cx('content-2')}>Tất cả sản phẩm</div>
            </div>
        </div>
    );
}

export default Header;
