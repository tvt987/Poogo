import classNames from 'classnames/bind';
import styles from './HeaderNav.module.scss';
import { SearchIcon } from '~/Static/icons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faAngleDown, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import HeaderProducts from './HeaderProducts/HeaderProducts';
import HeaderNews from './HeaderNews/HeaderNews';
import Tippy from '@tippyjs/react';
import Search from './Search/Search';
import { useRef } from 'react';

const cx = classNames.bind(styles);
function HeaderNav({ scrolled }) {
    const searchRef = useRef();
    const classNames = cx('wrapper');
    const handleSearch = () => {
        searchRef.current.classList.add(styles.active);
    };
    const handleWrapperSearch = () => {
        searchRef.current.classList.remove(styles.active);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('nav')}>
                <nav>
                    <ul className={cx('list')}>
                        <Tippy className={cx('title')} content="Trang chủ" placement="bottom">
                            <li className={cx('item')}>TRANG CHỦ</li>
                        </Tippy>
                        <Tippy className={cx('title')} placement="bottom" content="Giới thiệu">
                            <li className={cx('item')}>GIỚI THIỆU</li>
                        </Tippy>
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
                                <HeaderNews></HeaderNews>
                            </div>
                        </li>
                        <Tippy className={cx('title')} content="Liên hệ" placement="bottom">
                            <li className={cx('item')}>LIÊN HỆ</li>
                        </Tippy>
                        <Tippy className={cx('title')} content="Hệ thống cửa hàng" placement="bottom">
                            <li className={cx('item')}>HỆ THỐNG CỬA HÀNG</li>
                        </Tippy>
                    </ul>
                </nav>
            </div>
            <div onClick={() => handleSearch()} className={cx('search')}>
                <SearchIcon></SearchIcon>
            </div>
            <div onClick={() => handleWrapperSearch()} ref={searchRef} className={cx('wrapper-search')}>
                <Search></Search>
            </div>
        </div>
    );
}

export default HeaderNav;
