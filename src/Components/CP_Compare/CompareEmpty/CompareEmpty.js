import classNames from 'classnames/bind';
import styles from './CompareEmpty.module.scss';
const { ArchiveIcon } = require('~/Static/icons/icons');

const cx = classNames.bind(styles);
function CompareEmpty() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('icon')}>
                <ArchiveIcon></ArchiveIcon>
            </div>
            <div className={cx('content')}>Bạn chưa có sản phẩm nào để so sánh hãy thêm vào nhé</div>
        </div>
    );
}
export default CompareEmpty;
