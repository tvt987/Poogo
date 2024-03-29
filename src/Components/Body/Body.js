import classNames from 'classnames/bind';
import styles from './Body.module.scss';

import Carousel2 from './Carousel2/Carousel2';
import Carousel1 from './Carousel1/Carousel1';
import FlashSale from './FlashSale/FlashSale';

const cx = classNames.bind(styles);
function Body() {
    return (
        <div>
            <Carousel1></Carousel1>
            <Carousel2></Carousel2>
            <FlashSale></FlashSale>
        </div>
    );
}

export default Body;
