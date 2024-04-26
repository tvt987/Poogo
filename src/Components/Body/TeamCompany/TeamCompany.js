import classNames from 'classnames/bind';
import styles from './TeamCompany.module.scss';
import { StarIconR, StarIconS } from '~/Static/icons/icons';

const cx = classNames.bind(styles);

function TeamCompany() {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>khách hàng nói gì</div>
                <div className={cx('items')}>
                    <div className={cx('item')}>
                        <div className={cx('content')}>
                            Tôi rất yên tâm bởi đây là công nghệ đã được các tổ chức uy tín trên thế giới như FDA (Hoa
                            Kỳ), CE (Châu Âu), chứng nhận về hiệu quả và độ an toàn, Bây giờ mặt tôi không còn vết nám
                            nào cả. Cảm ơn spa rất nhiều! Chúc Bery! Beauty & Spa làm ăn phát đạt!
                        </div>
                        <div className={cx('stars')}>
                            <StarIconS></StarIconS>
                            <StarIconS></StarIconS>
                            <StarIconS></StarIconS>
                            <StarIconS></StarIconS>
                            <StarIconS></StarIconS>
                        </div>
                        <div className={cx('info')}>
                            <div className={cx('name')}>nguyễn thị minh</div>
                            <div className={cx('role')}>Giám đốc</div>
                        </div>
                        <div className={cx('wrapper-img')}>
                            <img src="//bizweb.dktcdn.net/100/505/077/themes/934930/assets/section_company_team1.png?1708418149368" />
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('content')}>
                            Tôi rất yên tâm bởi đây là công nghệ đã được các tổ chức uy tín trên thế giới như FDA (Hoa
                            Kỳ), CE (Châu Âu), chứng nhận về hiệu quả và độ an toàn, Bây giờ mặt tôi không còn vết nám
                            nào cả. Cảm ơn spa rất nhiều! Chúc Bery! Beauty & Spa làm ăn phát đạt!
                        </div>
                        <div className={cx('stars')}>
                            <StarIconS></StarIconS>
                            <StarIconS></StarIconS>
                            <StarIconS></StarIconS>
                            <StarIconS></StarIconS>
                            <StarIconS></StarIconS>
                        </div>
                        <div className={cx('info')}>
                            <div className={cx('name')}>nguyễn thị minh</div>
                            <div className={cx('role')}>Giám đốc</div>
                        </div>
                        <div className={cx('wrapper-img')}>
                            <img src="//bizweb.dktcdn.net/100/505/077/themes/934930/assets/section_company_team2.png?1708418149368" />
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('content')}>
                            Tôi rất yên tâm bởi đây là công nghệ đã được các tổ chức uy tín trên thế giới như FDA (Hoa
                            Kỳ), CE (Châu Âu), chứng nhận về hiệu quả và độ an toàn, Bây giờ mặt tôi không còn vết nám
                            nào cả. Cảm ơn spa rất nhiều! Chúc Bery! Beauty & Spa làm ăn phát đạt!
                        </div>
                        <div className={cx('stars')}>
                            <StarIconS></StarIconS>
                            <StarIconS></StarIconS>
                            <StarIconS></StarIconS>
                            <StarIconS></StarIconS>
                            <StarIconS></StarIconS>
                        </div>
                        <div className={cx('info')}>
                            <div className={cx('name')}>nguyễn thị minh </div>
                            <div className={cx('role')}>Giám đốc</div>
                        </div>
                        <div className={cx('wrapper-img')}>
                            <img src="//bizweb.dktcdn.net/100/505/077/themes/934930/assets/section_company_team3.png?1708418149368" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamCompany;
