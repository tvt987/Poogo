import classNames from 'classnames/bind';
import styles from './News.module.scss';
import TitlePage from '~/Components/components/TitlePage/TitlePage';
import SideBar from '~/Components/SideBar/SideBar';

const cx = classNames.bind(styles);

function News() {
    return (
        <div className={cx('container')}>
            <TitlePage title="tin tức" name1="Trang chủ" name2="Tin tức"></TitlePage>

            <div className={cx('wrapper')}>
                <div className={cx('body')}>
                    <SideBar news></SideBar>
                    <div className={cx('content')}>
                        <div className={cx('item')}>
                            <div className={cx('wrapper-img')}>
                                <img src="https://bizweb.dktcdn.net/thumb/large/100/505/077/articles/layer-2.jpg?v=1706065248850" />
                            </div>
                            <div className={cx('content')}>
                                <div className={cx('title')}>top các mẫu nike dunk được tìm kiếm nhiều nhất 2024</div>
                                <div className={cx('info')}>
                                    <div className={cx('name')}>Trương Văn Tình</div>
                                    <div className={cx('date')}> - 18</div>
                                    <div className={cx('number')}> - 0</div>
                                    <div className={cx('comment')}> bình luận</div>
                                </div>
                                <div className={cx('text')}>
                                    Nike Dunk Low - một trong những dòng giày nổi tiếng và lâu đời của thương hiệu giày
                                    Nike, gây ấn tượng bởi phong cách thiết kế đơn giản, cổ điển đặc trưng nhưng vẫn
                                    mang một màu sắc đường phố hiện đại. Giày Nike Dunk vẫn luôn được săn đón khắp nơi
                                    bởi các tín đồ yêu thích giày sneakers và các tín đồ thời trang khắp thế giới.
                                    Tín...
                                </div>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('wrapper-img')}>
                                <img src="https://bizweb.dktcdn.net/thumb/large/100/505/077/articles/layer-2.jpg?v=1706065248850" />
                            </div>
                            <div className={cx('content')}>
                                <div className={cx('title')}>top các mẫu nike dunk được tìm kiếm nhiều nhất 2024</div>
                                <div className={cx('info')}>
                                    <div className={cx('name')}>Trương Văn Tình</div>
                                    <div className={cx('date')}> - 18</div>
                                    <div className={cx('number')}> - 0</div>
                                    <div className={cx('comment')}> bình luận</div>
                                </div>
                                <div className={cx('text')}>
                                    Nike Dunk Low - một trong những dòng giày nổi tiếng và lâu đời của thương hiệu giày
                                    Nike, gây ấn tượng bởi phong cách thiết kế đơn giản, cổ điển đặc trưng nhưng vẫn
                                    mang một màu sắc đường phố hiện đại. Giày Nike Dunk vẫn luôn được săn đón khắp nơi
                                    bởi các tín đồ yêu thích giày sneakers và các tín đồ thời trang khắp thế giới.
                                    Tín...
                                </div>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('wrapper-img')}>
                                <img src="https://bizweb.dktcdn.net/thumb/large/100/505/077/articles/layer-2.jpg?v=1706065248850" />
                            </div>
                            <div className={cx('content')}>
                                <div className={cx('title')}>top các mẫu nike dunk được tìm kiếm nhiều nhất 2024</div>
                                <div className={cx('info')}>
                                    <div className={cx('name')}>Trương Văn Tình</div>
                                    <div className={cx('date')}> - 18</div>
                                    <div className={cx('number')}> - 0</div>
                                    <div className={cx('comment')}> bình luận</div>
                                </div>
                                <div className={cx('text')}>
                                    Nike Dunk Low - một trong những dòng giày nổi tiếng và lâu đời của thương hiệu giày
                                    Nike, gây ấn tượng bởi phong cách thiết kế đơn giản, cổ điển đặc trưng nhưng vẫn
                                    mang một màu sắc đường phố hiện đại. Giày Nike Dunk vẫn luôn được săn đón khắp nơi
                                    bởi các tín đồ yêu thích giày sneakers và các tín đồ thời trang khắp thế giới.
                                    Tín...
                                </div>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('wrapper-img')}>
                                <img src="https://bizweb.dktcdn.net/thumb/large/100/505/077/articles/layer-2.jpg?v=1706065248850" />
                            </div>
                            <div className={cx('content')}>
                                <div className={cx('title')}>top các mẫu nike dunk được tìm kiếm nhiều nhất 2024</div>
                                <div className={cx('info')}>
                                    <div className={cx('name')}>Trương Văn Tình</div>
                                    <div className={cx('date')}> - 18</div>
                                    <div className={cx('number')}> - 0</div>
                                    <div className={cx('comment')}> bình luận</div>
                                </div>
                                <div className={cx('text')}>
                                    Nike Dunk Low - một trong những dòng giày nổi tiếng và lâu đời của thương hiệu giày
                                    Nike, gây ấn tượng bởi phong cách thiết kế đơn giản, cổ điển đặc trưng nhưng vẫn
                                    mang một màu sắc đường phố hiện đại. Giày Nike Dunk vẫn luôn được săn đón khắp nơi
                                    bởi các tín đồ yêu thích giày sneakers và các tín đồ thời trang khắp thế giới.
                                    Tín...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default News;
