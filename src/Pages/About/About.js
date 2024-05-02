import classNames from 'classnames/bind';
import styles from './About.module.scss';
import AboutUs1 from '~/Components/CP_About/AboutUs-1/AboutUs-1';
import AboutUs2 from '~/Components/CP_About/AboutUs-2/AboutUs-2';

const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx('wrapper')}>
            <AboutUs1></AboutUs1>
            <AboutUs2></AboutUs2>
        </div>
    );
}

export default About;
