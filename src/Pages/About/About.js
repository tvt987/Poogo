import classNames from 'classnames/bind';
import styles from './About.module.scss';
import TitlePage from '~/Components/components/TitlePage/TitlePage';
import AboutUs from '~/Components/CP_About/AboutUs';

const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx('wrapper')}>
            <TitlePage title="Giới thiệu" name1="Trang chủ" name2="Giới thiệu"></TitlePage>
            <AboutUs></AboutUs>
        </div>
    );
}

export default About;
