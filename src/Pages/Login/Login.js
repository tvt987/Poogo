import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import TitlePage from '~/Components/components/TitlePage/TitlePage';

const cx = classNames.bind(styles);
function Login() {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <TitlePage title="đăng nhập tài khoản" name1="Trang chủ" name2="Đăng nhập tài khoản"></TitlePage>
                <div className={cx('form')}>
                    <div className={cx('header')}>
                        <div>đăng nhập tài khoản</div>
                        <div className={cx('title')}>
                            <div>Nếu bạn đã có tài khoản, đăng nhập tại đây.</div>
                            <div>Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua email.</div>
                        </div>
                    </div>
                    <div className={cx('body')}>
                        <div className={cx('left')}>
                            <div className="email">
                                <label>Email: </label>
                                <input placeholder="Email..." type="email" />
                            </div>
                            <div>
                                <label>Mật khẩu: </label>
                                <input placeholder="Mật khẩu..." type="password" />
                            </div>
                            <div className={cx('buttons')}>
                                <button className={cx('btn', 'btn-login')}>Đăng nhập</button>
                                <button className={cx('btn', 'btn-register')}>Đăng ký</button>
                            </div>
                            <div className={cx('social-netword')}>
                                <div>Đăng nhập bằng Facebook hoặc Google</div>
                                <div className={cx('buttons')}>
                                    <button>
                                        <img src="https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg" />
                                    </button>
                                    <button>
                                        <img src="https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('right')}>
                            <div className={cx('email')}>
                                <label>Email: </label>
                                <input placeholder="Email..." type="email" />
                            </div>
                            <button className={cx('forgot-password')}>Lấy lại mật khẩu</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
