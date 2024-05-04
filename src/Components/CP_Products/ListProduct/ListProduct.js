import classNames from 'classnames/bind';
import styles from './ListProduct.module.scss';
import { GridIcon, ListIcon } from '~/Static/icons/icons';

const cx = classNames.bind(styles);
function ListProduct() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('layout')}>
                    <div className={cx('icon', 'grid-icon')}>
                        <GridIcon></GridIcon>
                    </div>
                    <div className={cx('icon', 'list-icon')}>
                        <ListIcon></ListIcon>
                    </div>
                </div>
                <div className={cx('arrange')}>
                    <div className={cx('title')}>Sắp xếp: </div>
                    <select>
                        <option>Mặc định</option>
                        <option>Mặc định</option>
                        <option>Mặc định</option>
                        <option>Mặc định</option>
                        <option>Mặc định</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default ListProduct;
