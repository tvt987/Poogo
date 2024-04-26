import classNames from 'classnames/bind';
import styles from './Body.module.scss';

import Carousel2 from './Carousel2/Carousel2';
import Carousel1 from './Carousel1/Carousel1';
import FlashSale from './FlashSale/FlashSale';
import LookBook from './LookBook/LookBook';
import NewProduct from './NewProduct/NewProduct';
import Shipping from './Shipping/Shipping';
import Picture from './Picture/Picture';
import News from './News/News';
import Logos from './Logos/Logos';
import TeamCompany from './TeamCompany/TeamCompany';
import Gallery from './Gallery/Gallery';

const cx = classNames.bind(styles);
function Body() {
    return (
        <div>
            <Carousel1></Carousel1>
            <Carousel2></Carousel2>
            <FlashSale></FlashSale>
            <LookBook></LookBook>
            <Shipping></Shipping>
            <NewProduct isNew={true}></NewProduct>
            <NewProduct isNew={false}></NewProduct>
            <Picture></Picture>
            <News></News>
            <Logos></Logos>
            <TeamCompany></TeamCompany>
            <Gallery></Gallery>
        </div>
    );
}

export default Body;
