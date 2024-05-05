import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import Header from '../../Components/CP_Products/Header/Header';
import SideBar from '~/Components/SideBar/SideBar';
import ListProduct from '~/Components/CP_Products/ListProduct/ListProduct';
import TitlePage from '~/Components/components/TitlePage/TitlePage';

const cx = classNames.bind(styles);

function Products() {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <TitlePage title="tất cả sản phẩm" name1="Trang chủ" name2="Tất cả sản phẩm"></TitlePage>
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
