import classNames from 'classnames/bind';
import styles from './Category.module.scss';
import { DownIcon } from '~/Static/icons/icons';

const cx = classNames.bind(styles);

function Category() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>danh mục</div>
            <div className={cx('body')}>
                <div className={cx('item')}>Trang chủ</div>
                <div className={cx('item')}>Giới thiệu</div>
                <div className={cx('item')}>
                    Sản phẩm{' '}
                    <div className={cx('icon')}>
                        <DownIcon></DownIcon>
                    </div>{' '}
                </div>
                <div className={cx('item')}>
                    Tin tức{' '}
                    <div className={cx('icon')}>
                        <DownIcon></DownIcon>
                    </div>{' '}
                </div>
                <div className={cx('item')}>Liên hệ</div>
                <div className={cx('item')}>Hệ thống cửa hàng</div>
            </div>
        </div>
    );
}

export default Category;
