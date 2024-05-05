import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import Category from './Category/Category';
import Filter from './Filter/Filter';
import BuyNow from './BuyNow/BuyNow';
import RetaledArticles from './RetaledArticles/RetaledArticles';

const cx = classNames.bind(styles);
function SideBar({ news = false }) {
    return (
        <div className={cx('wrapper')}>
            <Category></Category>
            {news ? <RetaledArticles></RetaledArticles> : <Filter></Filter>}
            <BuyNow></BuyNow>
        </div>
    );
}

export default SideBar;
