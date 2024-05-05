import classNames from 'classnames/bind';
import styles from './Body.module.scss';
import { CircleIcon } from '~/Static/icons/icons';

const cx = classNames.bind(styles);
function Body() {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>lịch sử mua hàng</div>

                <div className={cx('body')}>
                    <div className={cx('left')}>
                        <div className={cx('item')}>
                            <div className={cx('title')}>
                                Khai trương
                                <div className={cx('icon')}>
                                    <CircleIcon></CircleIcon>
                                </div>
                            </div>
                            <div className={cx('content')}>
                                Cửa hàng Poogo có những điểm nổi bật như thiết kế đa dạng, phong phú và độc đáo, phù hợp
                                với nhiều loại hình thể thao. Ngoài ra, sản phẩm của Poogo được làm từ các chất liệu cao
                                cấp, đảm bảo sự thoải mái và độ bền cao cho người sử dụng.
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('wrapper-img')}>
                                <img src="https://bizweb.dktcdn.net/100/505/077/files/about2.jpg" />
                            </div>
                        </div>
                        <div className={cx('item', 'last-item')}>
                            <div className={cx('title')}>
                                Khai trương
                                <div className={cx('icon')}>
                                    <CircleIcon></CircleIcon>
                                </div>
                            </div>
                            <div className={cx('content')}>
                                Cửa hàng Poogo có những điểm nổi bật như thiết kế đa dạng, phong phú và độc đáo, phù hợp
                                với nhiều loại hình thể thao. Ngoài ra, sản phẩm của Poogo được làm từ các chất liệu cao
                                cấp, đảm bảo sự thoải mái và độ bền cao cho người sử dụng.
                            </div>
                        </div>
                    </div>
                    <div className={cx('right')}>
                        <div className={cx('item')}>
                            <div className={cx('wrapper-img')}>
                                <img src="https://bizweb.dktcdn.net/100/505/077/files/about2.jpg" />
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('title')}>
                                Khai trương
                                <div className={cx('icon')}>
                                    <CircleIcon></CircleIcon>
                                </div>
                            </div>
                            <div className={cx('content')}>
                                Cửa hàng Poogo có những điểm nổi bật như thiết kế đa dạng, phong phú và độc đáo, phù hợp
                                với nhiều loại hình thể thao. Ngoài ra, sản phẩm của Poogo được làm từ các chất liệu cao
                                cấp, đảm bảo sự thoải mái và độ bền cao cho người sử dụng.
                            </div>
                        </div>
                        <div className={cx('item', 'last-item')}>
                            <div className={cx('wrapper-img')}>
                                <img src="https://bizweb.dktcdn.net/100/505/077/files/about2.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Body;
