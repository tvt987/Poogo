import classNames from 'classnames/bind';
import styles from './Left.module.scss';
import { AddIcon, CheckIcon, FireIcon, MinusIcon } from '~/Static/icons/icons';

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
                    <div className={cx('flash-sale')}>
                        <div className={cx('left')}>
                            <div className={cx('wrapper-img')}>
                                <FireIcon></FireIcon>
                            </div>
                            <div className={cx('title')}>flash sale</div>
                        </div>
                        <div className={cx('right')}>
                            <div className={cx('days')}>
                                <div className={cx('number')}>122</div>
                                <div className={cx('text')}>ngày</div>
                            </div>
                            <div className={cx('hours')}>
                                <div className={cx('number')}>122</div>
                                <div className={cx('text')}>ngày</div>
                            </div>
                            <div className={cx('minutes')}>
                                <div className={cx('number')}>122</div>
                                <div className={cx('text')}>ngày</div>
                            </div>
                            <div className={cx('seconds')}>
                                <div className={cx('number')}>122</div>
                                <div className={cx('text')}>ngày</div>
                            </div>
                        </div>
                    </div>
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
                    <div className={cx('numbers')}>
                        <div className={cx('minus')}>
                            <MinusIcon />
                        </div>
                        <div className={cx('wrapper-ipt')}>
                            <input placeholder="1" type="text" />
                        </div>
                        <div className={cx('add')}>
                            <AddIcon />
                        </div>
                        <button>Mua ngay</button>
                    </div>
                    <div className={cx('ship')}>
                        <div className={cx('div-1')}>
                            <div className={cx('left')}>
                                <div className={cx('wrapper-img')}>
                                    <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/product_detail_chinh_sach1.jpg?1708418149368" />
                                </div>
                                <div className={cx('title')}>Đổi trả cực dễ chỉ cần số điện thoại</div>
                            </div>
                            <div className={cx('right')}>
                                <div className={cx('wrapper-img')}>
                                    <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/product_detail_chinh_sach2.jpg?1708418149368" />
                                </div>
                                <div className={cx('title')}>Miễn phí vận chuyển cho đơn hàng trên 200K</div>
                            </div>
                        </div>
                        <div className={cx('div-2')}>
                            <div className={cx('left')}>
                                <div className={cx('wrapper-img')}>
                                    <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/product_detail_chinh_sach3.jpg?1708418149368" />
                                </div>
                                <div className={cx('title')}>60 ngày đổi và trả vì bất kỳ lý do gì</div>
                            </div>

                            <div className={cx('right')}>
                                <div className={cx('wrapper-img')}>
                                    <img src="https://bizweb.dktcdn.net/100/505/077/themes/934930/assets/product_detail_chinh_sach4.jpg?1708418149368" />
                                </div>
                                <div className={cx('title')}>Hotline 19006750 hỗ trợ từ 8h30 - 22h</div>
                            </div>
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
