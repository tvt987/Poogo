import classNames from 'classnames/bind';
import styles from './HeaderProducts.module.scss';

const cx = classNames.bind(styles);
function HeaderProducts() {
    return (
        <div className={cx('product-content')}>
            <div className={cx('content-header')}>
                <div className={cx('content')}>
                    <h3>SẢN PHẨM MỚI NHẤT</h3>
                    <div>Giày chạy bộ</div>
                    <div>Giày Nike</div>
                    <div>Giày Addidass</div>
                    <div>Giày thể thao</div>
                </div>
                <div className={cx('content')}>
                    <h3>SẢN PHẨM NỔI BẬT</h3>
                    <div>Giày cho nam</div>
                    <div>Giày cho nữ</div>
                </div>
                <div className={cx('content')}>
                    <h3>SẢN PHẨM BÁN CHẠY</h3>
                    <div>Giày Puma</div>
                    <div>Nike Air</div>
                </div>
            </div>

            <div className={cx('content-body')}>
                <div className={cx('content-body-item')}>
                    <a href="#">
                        <img src="//bizweb.dktcdn.net/100/505/077/themes/934930/assets/mega-menu-images1.png?1708418149368" />
                    </a>
                </div>
                <div className={cx('content-body-item')}>
                    <a href="#">
                        <img src="//bizweb.dktcdn.net/100/505/077/themes/934930/assets/mega-menu-images2.png?1708418149368" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HeaderProducts;
