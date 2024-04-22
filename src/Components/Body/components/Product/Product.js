import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { CompareIcon, DiscountIcon, EyeIcon, FireIcon, HeartIcon, ListIcon, StarIconR } from '~/Static/icons/icons';

const cx = classNames.bind(styles);

function Product({ content, col = 4 }) {
    const colClass = col ? styles[`col-${col}`] : '';
    return (
        <div
            className={cx('item', {
                [colClass]: colClass,
            })}
        >
            <img src="https://bizweb.dktcdn.net/thumb/large/100/505/077/products/layer18cde9e508ba14790a6210491.jpg?v=1702350243257"></img>
            <div className={cx('tag-new')}>
                <FireIcon></FireIcon> Mới
            </div>
            <div className={cx('discount')}>
                -21%
                <span>
                    <DiscountIcon></DiscountIcon>
                </span>
            </div>
            <div className={cx('heart')}>
                <HeartIcon></HeartIcon>
            </div>
            <div className={cx('action')}>
                <div className={cx('seen')}>
                    <EyeIcon></EyeIcon>
                </div>
                <div className={cx('option')}>
                    <ListIcon></ListIcon>
                </div>
                <div className={cx('compare')}>
                    <CompareIcon></CompareIcon>
                </div>
            </div>
            <div className={cx('product-color')}>
                <div className={cx('item-color', 'item-color--red')}></div>
                <div className={cx('item-color', 'item-color--blue')}></div>
                <div className={cx('item-color', 'item-color--green')}></div>
            </div>
            <div className={cx('name')}>{content}</div>
            <div className={cx('price')}>
                <div className={cx('price-new')}>3.200.000đ</div>
                <div className={cx('price-old')}>4.500.000đ</div>
            </div>
            <div className={cx('count-item')}>
                <div className={cx('count-down')}></div>
                <div className={cx('quantity-sold')}>
                    Đã bán:
                    <span> 80 sản phẩm</span>
                </div>
            </div>
            <div className={cx('stars')}>
                <StarIconR></StarIconR>&nbsp;
                <StarIconR></StarIconR>&nbsp;
                <StarIconR></StarIconR>&nbsp;
                <StarIconR></StarIconR>&nbsp;
                <StarIconR></StarIconR>
            </div>
        </div>
    );
}

export default Product;
