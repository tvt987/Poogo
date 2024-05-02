import classNames from 'classnames/bind';
import styles from './NewProduct.module.scss';
import Product from '../Product/Product';

const cx = classNames.bind(styles);
function NewProduct({ isNew = false }) {
    let title = isNew ? 'sản phẩm mới nhất' : 'sản phẩm nổi bật';
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('title')}>{title}</div>
                <div className={cx('all')}>Xem tất cả</div>
            </div>
            <div className={cx('products')}>
                <Product col={5}></Product>
                <Product col={5}></Product>
                <Product col={5}></Product>
                <Product col={5}></Product>
                <Product col={5}></Product>
            </div>
        </div>
    );
}

export default NewProduct;
