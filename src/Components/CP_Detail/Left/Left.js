import classNames from 'classnames/bind';
import styles from './Left.module.scss';
import { CheckIcon } from '~/Static/icons/icons';

const cx = classNames.bind(styles);
function Left() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('detail')}>
                <div className={cx('left')}>
                    <div className={cx('main')}>
                        <img src="https://bizweb.dktcdn.net/thumb/grande/100/505/077/products/layer3.jpg" />
                    </div>
                    <div className={cx('list')}>
                        <div className={cx('item')}>
                            <img src="https://bizweb.dktcdn.net/thumb/medium/100/505/077/products/layer3.jpg?v=1702350251907" />
                        </div>
                        <div className={cx('item')}>
                            <img src="https://bizweb.dktcdn.net/thumb/medium/100/505/077/products/layer2.jpg?v=1702350251907" />
                        </div>
                        <div className={cx('item')}>
                            <img src="https://bizweb.dktcdn.net/thumb/medium/100/505/077/products/product.jpg?v=1702350251907" />
                        </div>
                    </div>
                </div>
                <div className={cx('right')}>
                    <div className={cx('name')}>Giày Nam Air Jordan 14 Retro</div>
                    <div className={cx('title')}>
                        <span>Thương hiệu: </span>
                        <span>Nike Air </span>
                        <span>Tình trạng: </span>
                        <span>Còn hàng </span>
                    </div>
                    <div className={cx('price')}>
                        <div className={cx('price-new')}>2.200.000đ</div>
                        <div className={cx('price-old')}>4.500.000đ</div>
                    </div>
                    <div className={cx('colors')}>
                        <div className={cx('header')}>Màu sắc</div>
                        <div className={cx('body')}>
                            <div className={cx('color', 'color--yellow')}>
                                <div className={cx('icon')}>
                                    <CheckIcon></CheckIcon>
                                </div>
                            </div>
                            <div className={cx('color', 'color--red')}></div>
                            <div className={cx('color', 'color--green')}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('description')}></div>
            <div className={cx('types')}></div>
        </div>
    );
}

export default Left;
