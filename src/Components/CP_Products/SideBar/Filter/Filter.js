import classNames from 'classnames/bind';
import styles from './Filter.module.scss';
import { SquareIcon } from '~/Static/icons/icons';

const cx = classNames.bind(styles);
function Filter() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>bộ lọc</div>
            <div className={cx('body')}>
                <div className={cx('price')}>
                    <div className={cx('title')}>Giá sản phẩm</div>
                    <div className={cx('body')}>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <SquareIcon></SquareIcon>
                            </div>
                            <div className={cx('text')}>Giá dưới 100.000đ</div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <SquareIcon></SquareIcon>
                            </div>
                            <div className={cx('text')}>Giá dưới 100.000đ</div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <SquareIcon></SquareIcon>
                            </div>
                            <div className={cx('text')}>Giá dưới 100.000đ</div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <SquareIcon></SquareIcon>
                            </div>
                            <div className={cx('text')}>Giá dưới 100.000đ</div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <SquareIcon></SquareIcon>
                            </div>
                            <div className={cx('text')}>Giá dưới 100.000đ</div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <SquareIcon></SquareIcon>
                            </div>
                            <div className={cx('text')}>Giá dưới 100.000đ</div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <SquareIcon></SquareIcon>
                            </div>
                            <div className={cx('text')}>Giá dưới 100.000đ</div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <SquareIcon></SquareIcon>
                            </div>
                            <div className={cx('text')}>Giá dưới 100.000đ</div>
                        </div>
                    </div>
                </div>
                <div className={cx('type')}>
                    <div className={cx('title')}>Loại</div>
                    <div className={cx('body')}>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <SquareIcon></SquareIcon>
                            </div>
                            <div className={cx('text')}>Giày Nam</div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <SquareIcon></SquareIcon>
                            </div>
                            <div className={cx('text')}>Giày Nữ</div>
                        </div>
                    </div>
                </div>
                <div className={cx('brand')}>
                    <div className={cx('title')}>Thương hiệu</div>
                    <div className={cx('body')}>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <SquareIcon></SquareIcon>
                            </div>
                            <div className={cx('text')}>Nike Air</div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <SquareIcon></SquareIcon>
                            </div>
                            <div className={cx('text')}>Nike Air Max</div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <SquareIcon></SquareIcon>
                            </div>
                            <div className={cx('text')}>Nike Jordan</div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <SquareIcon></SquareIcon>
                            </div>
                            <div className={cx('text')}>Puma</div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <SquareIcon></SquareIcon>
                            </div>
                            <div className={cx('text')}>Nike Jordan</div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <SquareIcon></SquareIcon>
                            </div>
                            <div className={cx('text')}>Puma</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;
