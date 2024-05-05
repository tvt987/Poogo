import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('left')}>
                    <h2 className={cx('title')}>về chúng tôi</h2>
                    <div className={cx('content')}>
                        Poogo là một cửa hàng chuyên kinh doanh thời trang thể thao chất lượng cao với mục tiêu mang đến
                        cho khách hàng những sản phẩm đẳng cấp, chất lượng và sự thoải mái khi vận động. Với đội ngũ
                        nhân viên giàu kinh nghiệm và đam mê về thể thao, Poogo cam kết cung cấp những sản phẩm chất
                        lượng tốt nhất và chăm sóc khách hàng một cách chuyên nghiệp.
                    </div>
                </div>
                <div className={cx('right')}>
                    <div className={cx('img')}>
                        <img src="https://bizweb.dktcdn.net/100/505/077/files/about1.jpg" />
                    </div>
                </div>
            </div>
            ;
        </div>
    );
}

export default Header;
