import classNames from 'classnames/bind';
import styles from './HeaderNav.module.scss';
import { SearchIcon } from '~/Static/icons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faAngleDown, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import HeaderProducts from './HeaderProducts/HeaderProducts';

const cx = classNames.bind(styles);
function HeaderNav() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('nav')}>
                <nav>
                    <ul className={cx('list')}>
                        <li className={cx('item')}>TRANG CHỦ</li>
                        <li className={cx('item')}>GIỚI THIỆU</li>
                        <li className={cx('item', 'item-products')}>
                            SẢN PHẨM
                            <FontAwesomeIcon className={cx('icon')} icon={faAngleDown}></FontAwesomeIcon>
                            <div className={cx('product-content')}>
                                <HeaderProducts></HeaderProducts>
                            </div>
                        </li>

                        <li className={cx('item', 'item-news')}>
                            TIN TỨC
                            <FontAwesomeIcon className={cx('icon')} icon={faAngleDown}></FontAwesomeIcon>
                            <div className={cx('news-content')}>
                                <ul>
                                    <li>
                                        <span>Tin tức lv1</span>
                                    </li>
                                    <li>
                                        Tin tức lv2
                                        <FontAwesomeIcon className={cx('icon')} icon={faAngleRight}></FontAwesomeIcon>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className={cx('item')}>LIÊN HỆ</li>
                        <li className={cx('item')}>HỆ THỐNG CỬA HÀNG</li>
                    </ul>
                </nav>
            </div>
            <div className={cx('search')}>
                <SearchIcon></SearchIcon>
            </div>
        </div>
    );
}

export default HeaderNav;
