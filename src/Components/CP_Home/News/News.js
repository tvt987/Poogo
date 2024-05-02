import classNames from 'classnames/bind';
import styles from './News.module.scss';

const cx = classNames.bind(styles);
function News() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('title')}>tin tức</div>
                <div className={cx('all')}>những bài viết mới nhất</div>
            </div>
            <div className={cx('article')}>
                <div className={cx('item')}>
                    <div className={cx('wrapper-img')}>
                        <img src="https://bizweb.dktcdn.net/100/505/077/articles/layer-2.jpg?v=1706065248850" />
                        <div className={cx('left')}></div>
                        <div className={cx('right')}></div>
                    </div>
                    <div className={cx('date')}>18/04/2024</div>
                    <div className={cx('name')}>top các mẫu nike dunk được tìm kiếm nhiều nhất 2024</div>
                    <div className={cx('content')}>
                        Nike Dunk Low - một trong những dòng giày nổi tiếng và lâu đời của thương hiệu giày Nike Dunk
                        Low
                    </div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('wrapper-img')}>
                        <img src="https://bizweb.dktcdn.net/100/505/077/articles/layer-1.jpg?v=1706065151103" />
                        <div className={cx('left')}></div>
                        <div className={cx('right')}></div>
                    </div>
                    <div className={cx('date')}>18/04/2024</div>
                    <div className={cx('name')}>top các mẫu nike dunk được tìm kiếm nhiều nhất 2024</div>
                    <div className={cx('content')}>
                        Nike Dunk Low - một trong những dòng giày nổi tiếng và lâu đời của thương hiệu giày Nike Dunk
                        Low
                    </div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('wrapper-img')}>
                        <img src="https://bizweb.dktcdn.net/100/505/077/articles/layer-3.jpg?v=1706065302570" />
                        <div className={cx('left')}></div>
                        <div className={cx('right')}></div>
                    </div>
                    <div className={cx('date')}>18/04/2024</div>
                    <div className={cx('name')}>top các mẫu nike dunk được tìm kiếm nhiều nhất 2024</div>
                    <div className={cx('content')}>
                        Nike Dunk Low - một trong những dòng giày nổi tiếng và lâu đời của thương hiệu giày Nike Dunk
                        Low
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
