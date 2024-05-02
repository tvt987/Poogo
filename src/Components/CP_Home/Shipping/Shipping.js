import classNames from 'classnames/bind';
import styles from './Shipping.module.scss';

const cx = classNames.bind(styles);
function Shipping() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('item')}>
                <div className={cx('wrapper-img')}>
                    <img src="//bizweb.dktcdn.net/100/505/077/themes/934930/assets/section_home_shipping1.jpg?1708418149368" />
                </div>
                <div className={cx('title')}>Giao hàng miễn phí</div>
                <div className={cx('content')}>Đăng ký để cập nhật và nhận giao hàng miễn phí</div>
            </div>
            <div className={cx('item')}>
                <div className={cx('wrapper-img')}>
                    <img src="//bizweb.dktcdn.net/100/505/077/themes/934930/assets/section_home_shipping2.jpg?1708418149368" />
                </div>
                <div className={cx('title')}>Giao hàng trong 30 phút</div>
                <div className={cx('content')}>Mọi thứ bạn đặt hàng sẽ nhanh chóng được giao đến tận nơi</div>
            </div>
            <div className={cx('item')}>
                <div className={cx('wrapper-img')}>
                    <img src="//bizweb.dktcdn.net/100/505/077/themes/934930/assets/section_home_shipping3.jpg?1708418149368" />
                </div>
                <div className={cx('title')}>Đảm bảo chất lượng tốt nhất</div>
                <div className={cx('content')}>Poogo là một chuỗi cửa hàng gia đình quốc gia.</div>
            </div>
        </div>
    );
}

export default Shipping;
