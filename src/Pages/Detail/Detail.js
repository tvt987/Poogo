import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import Right from '~/Components/CP_Detail/Right/Right';
import Left from '~/Components/CP_Detail/Left/Left';
import TitlePage from '~/Components/components/TitlePage/TitlePage';
import Product from '~/Components/components/Product/Product';

const cx = classNames.bind(styles);
function Detail() {
    return (
        <div className={cx('container')}>
            <TitlePage title="GIÀY NAM NIKE AIR MAX"></TitlePage>
            <div className={cx('wrapper')}>
                <div className={cx('left')}>
                    <Left></Left>
                </div>
                <div className={cx('right')}>
                    <Right></Right>
                </div>
            </div>
            <div className={cx('types')}>
                <div className={cx('header')}>sản phẩm đã xem</div>
                <div className={cx('list')}>
                    <Product col={6}></Product>
                    <Product col={6}></Product>
                    <Product col={6}></Product>
                    <Product col={6}></Product>
                    <Product col={6}></Product>
                    <Product col={6}></Product>
                </div>
            </div>
        </div>
    );
}

export default Detail;
