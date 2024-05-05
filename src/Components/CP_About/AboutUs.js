import classNames from 'classnames/bind';
import styles from './AboutUs.module.scss';
import Header from './Header/Header';
import Body from './Body/Body';

const cx = classNames.bind(styles);

function AboutUs() {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <Body></Body>
        </div>
    );
}

export default AboutUs;
