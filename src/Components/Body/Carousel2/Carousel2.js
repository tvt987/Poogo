import classNames from 'classnames/bind';
import styles from './Carousel2.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Carousel2() {
    return (
        <div className={cx('carousel-2')}>
            <div className={cx('header')}>
                <div className={cx('title')}>Toàn bộ sản phẩm đều là chính hãng</div>
                <div className={cx('list-products')}>DANH MỤC SẢN PHẨM</div>
            </div>
            <div className={cx('gallery')}>
                <a className={cx('gallery-item')}>
                    <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/section_home_category1.jpg?1708418149368" />
                    <div className={cx('caption')}>Chạy bộ</div>
                </a>
                <a className={cx('gallery-item')}>
                    <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/section_home_category2.jpg?1708418149368" />
                    <div className={cx('caption')}>Leo núi</div>
                </a>
                <a className={cx('gallery-item')}>
                    <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/section_home_category3.jpg?1708418149368" />
                    <div className={cx('caption')}>Quần vợt</div>
                </a>
                <a className={cx('gallery-item')}>
                    <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/section_home_category4.jpg?1708418149368" />
                    <div className={cx('caption')}>Giày bóng rổ</div>
                </a>
            </div>
            <marquee className={cx('slide-1')} behavior="scroll" direction="left" scrollamount="20">
                <span>
                    {' '}
                    <FontAwesomeIcon icon={faBolt} /> Tặng quà trên mỗi đơn hàng từ 500k
                </span>
                <span>
                    {' '}
                    <FontAwesomeIcon icon={faBolt} /> Giảm 15% cho đơn hàng đầu tiên từ 699k
                </span>
                <span>
                    {' '}
                    <FontAwesomeIcon icon={faBolt} /> Miễn phí vận chuyển từ đơn hàng 599k
                </span>
                <span>
                    {' '}
                    <FontAwesomeIcon icon={faBolt} /> Đổi hàng trong 30 ngày
                </span>
                <span>
                    {' '}
                    <FontAwesomeIcon icon={faBolt} /> Tặng quà trên mỗi đơn hàng từ 500k
                </span>
                <span>
                    {' '}
                    <FontAwesomeIcon icon={faBolt} /> Giảm 15% cho đơn hàng đầu tiên từ 699k
                </span>
                <span>
                    {' '}
                    <FontAwesomeIcon icon={faBolt} /> Miễn phí vận chuyển từ đơn hàng 599k
                </span>
                <span>
                    {' '}
                    <FontAwesomeIcon icon={faBolt} /> Đổi hàng trong 30 ngày
                </span>
                <span>
                    {' '}
                    <FontAwesomeIcon icon={faBolt} /> Tặng quà trên mỗi đơn hàng từ 500k
                </span>
                <span>
                    {' '}
                    <FontAwesomeIcon icon={faBolt} /> Giảm 15% cho đơn hàng đầu tiên từ 699k
                </span>
                <span>
                    {' '}
                    <FontAwesomeIcon icon={faBolt} /> Miễn phí vận chuyển từ đơn hàng 599k
                </span>
                <span>
                    {' '}
                    <FontAwesomeIcon icon={faBolt} /> Đổi hàng trong 30 ngày
                </span>
            </marquee>
        </div>
    );
}

export default Carousel2;
