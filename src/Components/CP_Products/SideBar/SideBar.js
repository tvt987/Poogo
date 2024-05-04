import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import Category from './Category/Category';
import Filter from './Filter/Filter';
import BuyNow from './BuyNow/BuyNow';

const cx = classNames.bind(styles);
function SideBar() {
    return (
        <div className={cx('wrapper')}>
            <Category></Category>
            <Filter></Filter>
            <BuyNow></BuyNow>
        </div>
    );
}

export default SideBar;
