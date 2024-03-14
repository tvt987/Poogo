import Header from '~/Components/Header/Header';
import Body from '~/Components/Body';
import Footer from '~/Components/Footer';

function DefaultLayout() {
    return (
        <div>
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </div>
    );
}

export default DefaultLayout;
