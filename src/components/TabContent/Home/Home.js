import Slider from "react-slick";

import classes from './Home.module.scss';
import slogan from '../../../assets/images/slogan.png';
import img1 from '../../../assets/images/img1.svg';
import img2 from '../../../assets/images/img2.svg';
import img3 from '../../../assets/images/img3.svg';

const home = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    };
    return (
        <div className={classes.Home}>
            <img src={slogan} alt="slogan" className={["img-fluid", "d-block", classes.slogan].join(" ")} />
            <div className={classes.Content}>
                <ul>
                    <li>
                        Hái Lộc Xuân
                        <div>
                            nhận Lì xì Tết
                        </div>
                    </li>
                    <li>
                        Nhận ngay quà tặng
                        <div>
                            Phiên Bản Tết
                        </div>
                    </li>
                    <li>
                        Cơ hội trúng giải thưởng
                        <div>
                            100 triệu VND
                        </div>
                    </li>
                    <li>
                        Hàng ngàn giải thưởng
                        <div>
                            quà công nghệ
                        </div>
                    </li>
                </ul>
                <p>
                    * Chương trình áp dụng từ ngày <strong>25/12/2020</strong> đến hết <strong>31/03/2021</strong> hoặc đến khi hết quà tặng
                    </p>
                <div className={classes.Home_ft}>
                    <p>
                        Đến ACB ngay hôm nay
                        </p>
                    <p>
                        Chỉ với mức gửi tiền từ <strong>20 triệu VND/tài khoản</strong>, Quý Khách được tham gia Hái Lộc Xuân nhận lì xì hoặc nhận quà tặng ngay Phiên Bản Tết
                        </p>
                </div>
            </div>
            <div className={classes.slider}>
                <Slider {...settings}>
                    <div>
                        <img src={img1} alt="hinh1" className="img-fluid d-block mx-auto" />
                    </div>
                    <div>
                        <img src={img2} alt="hinh2" className="img-fluid d-block mx-auto" />
                    </div>
                    <div>
                        <img src={img3} alt="hinh3" className="img-fluid d-block mx-auto" />
                    </div>
                </Slider>
            </div>


        </div>
    )
}

export default home;