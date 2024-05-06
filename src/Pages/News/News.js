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
                                <img src="https://bizweb.dktcdn.net/thumb/large/100/505/077/articles/layer-1.jpg?v=1706065151103" />
                            </div>
                            <div className={cx('content')}>
                                <div className={cx('title')}>ADIDAS CHO TRÌNH LÀNG MẪU GIÀY SUPERNOVA ĐẲNG CẤP MỚI</div>
                                <div className={cx('info')}>
                                    <div className={cx('name')}>Trương Văn Tình</div>
                                    <div className={cx('date')}> - 18</div>
                                    <div className={cx('number')}> - 0</div>
                                    <div className={cx('comment')}> bình luận</div>
                                </div>
                                <div className={cx('text')}>
                                    Sau dịch bệnh covid -19 khiến mọi người bị cấm cửa và không được ra ngoài thời gian
                                    dài thì nhu cầu tập thể dục được khá nhiều người quan tâm. Bởi nắm bắt được xu thế
                                    hiện nay nên adidas đã cho ra mắt phiên bản Supernova. Mẫu giày này ra đời nhằm
                                    khuyến khích mọi người hoạt động nhiều hơn cũng như để chào đón một cuộc sống bình
                                    thường mới Quá trình h...
                                </div>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('wrapper-img')}>
                                <img src="https://bizweb.dktcdn.net/thumb/large/100/505/077/articles/layer-3.jpg?v=1706065302570" />
                            </div>
                            <div className={cx('content')}>
                                <div className={cx('title')}>
                                    BẢO QUẢN GIÀY AIR JORDAN HIỆU QUẢ KHI SỬ DỤNG MỖI NGÀY
                                </div>
                                <div className={cx('info')}>
                                    <div className={cx('name')}>Trương Văn Tình</div>
                                    <div className={cx('date')}> - 18</div>
                                    <div className={cx('number')}> - 0</div>
                                    <div className={cx('comment')}> bình luận</div>
                                </div>
                                <div className={cx('text')}>
                                    Giày là một món đồ không thể thiếu đối với tất cả mọi người (đặc biệt là giới trẻ
                                    hiện nay). Mọi người thường đi giày cho những ngày phải vận động nhiều và để dễ di
                                    chuyển hơn. Hay đơn giản là để thể hiện cá tính của bản thân.Vậy nên vệ sinh giày
                                    cho sạch cũng là vấn đề được khá nhiều người đi cũng như yêu giày quan tâm. Bài viết
                                    này sẽ chia sẻ một số&nbs...
                                </div>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('wrapper-img')}>
                                <img src="https://bizweb.dktcdn.net/thumb/large/100/505/077/articles/layer-4.jpg?v=1706065349577" />
                            </div>
                            <div className={cx('content')}>
                                <div className={cx('title')}>
                                    BÍ QUYẾT BẢO QUẢN GIÀY ULTRA BOOST ĐƯỢC BỀN & LÂU DÀI NHẤT
                                </div>
                                <div className={cx('info')}>
                                    <div className={cx('name')}>Trương Văn Tình</div>
                                    <div className={cx('date')}> - 18</div>
                                    <div className={cx('number')}> - 0</div>
                                    <div className={cx('comment')}> bình luận</div>
                                </div>
                                <div className={cx('text')}>
                                    Thời tiết không ổn định có thể khiến đôi giày Adidas UltraBoost của bạn gặp phải
                                    tình trạng bám bẩn, ố vàng và hơn thế nữa, rất khó vệ sinh và bảo dưỡng. Tất nhiên,
                                    không ai trong chúng ta muốn tình huống này xảy ra với mình khi ra đường. Vì vậy,
                                    hãy nhanh chóng khôi phục vẻ đẹp cho đôi giày của bạn bằng cách tham khảo nội dung
                                    dưới đây. Nên bi...
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
                                <img src="https://bizweb.dktcdn.net/thumb/large/100/505/077/articles/layer-1.jpg?v=1706065151103" />
                            </div>
                            <div className={cx('content')}>
                                <div className={cx('title')}>ADIDAS CHO TRÌNH LÀNG MẪU GIÀY SUPERNOVA ĐẲNG CẤP MỚI</div>
                                <div className={cx('info')}>
                                    <div className={cx('name')}>Trương Văn Tình</div>
                                    <div className={cx('date')}> - 18</div>
                                    <div className={cx('number')}> - 0</div>
                                    <div className={cx('comment')}> bình luận</div>
                                </div>
                                <div className={cx('text')}>
                                    Sau dịch bệnh covid -19 khiến mọi người bị cấm cửa và không được ra ngoài thời gian
                                    dài thì nhu cầu tập thể dục được khá nhiều người quan tâm. Bởi nắm bắt được xu thế
                                    hiện nay nên adidas đã cho ra mắt phiên bản Supernova. Mẫu giày này ra đời nhằm
                                    khuyến khích mọi người hoạt động nhiều hơn cũng như để chào đón một cuộc sống bình
                                    thường mới Quá trình h...
                                </div>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('wrapper-img')}>
                                <img src="https://bizweb.dktcdn.net/thumb/large/100/505/077/articles/layer-3.jpg?v=1706065302570" />
                            </div>
                            <div className={cx('content')}>
                                <div className={cx('title')}>
                                    BẢO QUẢN GIÀY AIR JORDAN HIỆU QUẢ KHI SỬ DỤNG MỖI NGÀY
                                </div>
                                <div className={cx('info')}>
                                    <div className={cx('name')}>Trương Văn Tình</div>
                                    <div className={cx('date')}> - 18</div>
                                    <div className={cx('number')}> - 0</div>
                                    <div className={cx('comment')}> bình luận</div>
                                </div>
                                <div className={cx('text')}>
                                    Giày là một món đồ không thể thiếu đối với tất cả mọi người (đặc biệt là giới trẻ
                                    hiện nay). Mọi người thường đi giày cho những ngày phải vận động nhiều và để dễ di
                                    chuyển hơn. Hay đơn giản là để thể hiện cá tính của bản thân.Vậy nên vệ sinh giày
                                    cho sạch cũng là vấn đề được khá nhiều người đi cũng như yêu giày quan tâm. Bài viết
                                    này sẽ chia sẻ một số&nbs...
                                </div>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('wrapper-img')}>
                                <img src="https://bizweb.dktcdn.net/thumb/large/100/505/077/articles/layer-4.jpg?v=1706065349577" />
                            </div>
                            <div className={cx('content')}>
                                <div className={cx('title')}>
                                    BÍ QUYẾT BẢO QUẢN GIÀY ULTRA BOOST ĐƯỢC BỀN & LÂU DÀI NHẤT
                                </div>
                                <div className={cx('info')}>
                                    <div className={cx('name')}>Trương Văn Tình</div>
                                    <div className={cx('date')}> - 18</div>
                                    <div className={cx('number')}> - 0</div>
                                    <div className={cx('comment')}> bình luận</div>
                                </div>
                                <div className={cx('text')}>
                                    Thời tiết không ổn định có thể khiến đôi giày Adidas UltraBoost của bạn gặp phải
                                    tình trạng bám bẩn, ố vàng và hơn thế nữa, rất khó vệ sinh và bảo dưỡng. Tất nhiên,
                                    không ai trong chúng ta muốn tình huống này xảy ra với mình khi ra đường. Vì vậy,
                                    hãy nhanh chóng khôi phục vẻ đẹp cho đôi giày của bạn bằng cách tham khảo nội dung
                                    dưới đây. Nên bi...
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
