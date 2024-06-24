import classNames from 'classnames/bind';
import styles from './WrapperCompare.module.scss';
const cx = classNames.bind(styles);

function WrapperCompare() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('hide')}>Ẩn so sánh</div>
                <div className={cx('item')}>
                    <div className={cx('wrapper-img')}>
                        <img src="//bizweb.dktcdn.net/thumb/medium/100/505/077/products/layer12137b41646ee49b99d29fc01.jpg?v=1702350249013" />
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('name')}>Giày Nam Men's Air Jordan 2 Retro</div>
                        <div className={cx('prices')}>
                            <div className={cx('price-new')}>3.200.000đ</div>
                            <div className={cx('price-old')}>3.200.000đ</div>
                        </div>
                        <button>Xóa</button>
                    </div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('wrapper-img')}>
                        <img src="//bizweb.dktcdn.net/thumb/medium/100/505/077/products/layer12137b41646ee49b99d29fc01.jpg?v=1702350249013" />
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('name')}>Giày Nam Men's Air Jordan 2 Retro</div>
                        <div className={cx('prices')}>
                            <div className={cx('price-new')}>3.200.000đ</div>
                            <div className={cx('price-old')}>3.200.000đ</div>
                        </div>
                        <button>Xóa</button>
                    </div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('wrapper-img')}>
                        <img src="//bizweb.dktcdn.net/thumb/medium/100/505/077/products/layer12137b41646ee49b99d29fc01.jpg?v=1702350249013" />
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('name')}>Giày Nam Men's Air Jordan 2 Retro</div>
                        <div className={cx('prices')}>
                            <div className={cx('price-new')}>3.200.000đ</div>
                            <div className={cx('price-old')}>3.200.000đ</div>
                        </div>
                        <button>Xóa</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WrapperCompare;
