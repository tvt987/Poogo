import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Carousel1 from '~/Components/CP_Home/Carousel1/Carousel1';
import Carousel2 from '~/Components/CP_Home/Carousel2/Carousel2';
import FlashSale from '~/Components/CP_Home/FlashSale/FlashSale';
import LookBook from '~/Components/CP_Home/LookBook/LookBook';
import Shipping from '~/Components/CP_Home/Shipping/Shipping';
import NewProduct from '~/Components/CP_Home/NewProduct/NewProduct';
import Picture from '~/Components/CP_Home/Picture/Picture';
import News from '~/Components/CP_Home/News/News';
import Logos from '~/Components/CP_Home/Logos/Logos';
import TeamCompany from '~/Components/CP_Home/TeamCompany/TeamCompany';
import Gallery from '~/Components/CP_Home/Gallery/Gallery';
import WrapperCompare from '~/Components/CP_Compare/WrapperCompare/WrapperCompare';

const cx = classNames.bind(styles);
function Home() {
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
            <WrapperCompare></WrapperCompare>
        </div>
    );
}

export default Home;
