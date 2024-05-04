import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import Header from '../../Components/CP_Products/Header/Header';
import SideBar from '~/Components/CP_Products/SideBar/SideBar';
import ListProduct from '~/Components/CP_Products/ListProduct/ListProduct';

const cx = classNames.bind(styles);

function Products() {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('header-wrapper')}>
                    <Header></Header>
                </div>
                <div className={cx('body')}>
                    <div className={cx('content')}>
                        <SideBar></SideBar>
                        <ListProduct></ListProduct>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
