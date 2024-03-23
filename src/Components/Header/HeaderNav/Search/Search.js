import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { SearchIcon } from '~/Static/icons/icons';
import { useRef } from 'react';

const cx = classNames.bind(styles);
function Search() {
    const headerRef = useRef();
    const handleOutSide = (e) => {
        e.stopPropagation();
    };
    return (
        <div onClick={(e) => handleOutSide(e)} ref={headerRef} className={cx('header-search')}>
            <input placeholder="Tìm kiếm sản phẩm, tin tức" />
            <div className={cx('icon-search')}>
                <SearchIcon></SearchIcon>
            </div>
        </div>
    );
}

export default Search;
