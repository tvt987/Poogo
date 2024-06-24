import classNames from 'classnames/bind';
import styles from './Compare.module.scss';
import TitlePage from '~/Components/components/TitlePage/TitlePage';
import { ArchiveIcon } from '~/Static/icons/icons';
import Compares from '~/Components/CP_Compare/Compares/Compares';
import CompareEmpty from '~/Components/CP_Compare/CompareEmpty/CompareEmpty';

const cx = classNames.bind(styles);
function Compare() {
    return (
        <div className={cx('container')}>
            <TitlePage title="so sánh sản phẩm" name1="Trang chủ" name2="So sánh sản phẩm"></TitlePage>
            <div className={cx('wrapper')}>
                <Compares></Compares>
            </div>
        </div>
    );
}

export default Compare;
