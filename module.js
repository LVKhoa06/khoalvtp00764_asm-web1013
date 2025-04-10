// Module START
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<header>
        <div id="grid">
            <div class="header-top">
                <div class="header-top_list">
                    <a class="header-top_item" href="#">
                        <i class="fa-solid fa-envelope"></i>
                        <span>phothongcaodang@fpt.edu.vn</span>
                    </a>
                    <a class="header-top_item" href="#">
                        <i class="fa-solid fa-phone"></i>
                        <span>096 3400865</span>
                    </a>
                    <a class="header-top_item" href="#">
                        <i class="fa-solid fa-globe"></i>
                        <span>Liên hệ</span>
                    </a>
                    <a class="header-top_item" href="#">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </a>
                </div>
            </div>
        </div>

        <hr>
        <div class="header-bottom-fixed">
            <div class="header-bottom" id="grid">
                <div class="header-bottom-left">
                    <a href="index.html">
                        <img src="./assets/img/logo-white.png" alt="">
                    </a>
                </div>
                <div class="header-bottom-right">
                    <div class="header-bottom_item">
                        Tuyển sinh
                        <i class="fa-solid fa-angle-down"></i>
                        <div class="header-bottom_list">
                            <a href="./pages/tuyen-sinh" class="header-bottom_link">Thông báo tuyển sinh</a>
                            <a href="./pages/tuyen-sinh" class="header-bottom_link">Đăng ký tư vấn trực
                                tuyến</a>
                            <a href="./pages/tuyen-sinh" class="header-bottom_link">Quy chế tuyển sinh</a>
                            <a href="./pages/tuyen-sinh" class="header-bottom_link">Học phí</a>
                            <a href="./pages/tuyen-sinh" class="header-bottom_link">Thông tin chuyển
                                khoản</a>
                            <a href="./pages/tuyen-sinh" class="header-bottom_link">Phiếu đăng ký học</a>
                            <a href="./pages/tuyen-sinh" class="header-bottom_link">Trắc nghiệm nghề
                                nghiệp</a>
                            <a href="./pages/tuyen-sinh" class="header-bottom_link">Hỏi đáp</a>
                        </div>
                    </div>
                    <div class="header-bottom_item">
                        Chương trình đào tạo
                        <i class="fa-solid fa-angle-down"></i>
                        <div class="header-bottom_list">
                            <div class="header-bottom_link-parent header-bottom_link">
                                <span>Ngành công nghệ thông tin <i class="fa-solid fa-chevron-right"></i></span>
                                <div class="header-bottom_link-child">
                                    <a href="./pages/chuong-trinh-dao-tao" class="header-bottom_link">Phát
                                        triển phần mềm</a>
                                    <a href="./pages/chuong-trinh-dao-tao" class="header-bottom_link">Lập
                                        trình web</a>
                                    <a href="./pages/chuong-trinh-dao-tao" class="header-bottom_link">Ứng
                                        dụng phần mềm</a>
                                </div>
                            </div>
                            <div class="header-bottom_link-parent header-bottom_link">
                                <span>Ngành thiết kế đồ họa <i class="fa-solid fa-chevron-right"></i></span>
                                <div class="header-bottom_link-child">
                                    <a href="./pages/chuong-trinh-dao-tao" class="header-bottom_link">Thiết
                                        kế đồ họa</a>
                                </div>
                            </div>
                            <div class="header-bottom_link-parent header-bottom_link">
                                <span>Ngành quản trị kinh doanh <i class="fa-solid fa-chevron-right"></i></span>
                                <div class="header-bottom_link-child">
                                    <a href="./pages/chuong-trinh-dao-tao" class="header-bottom_link">Digital
                                        Marketing</a>
                                    <a href="./pages/chuong-trinh-dao-tao" class="header-bottom_link">Quản
                                        trị khách sạn nhà hàng</a>
                                    <a href="./pages/chuong-trinh-dao-tao" class="header-bottom_link">Logistics</a>
                                    <a href="./pages/chuong-trinh-dao-tao" class="header-bottom_link">Truyền
                                        thông và tổ chức sự kiện</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="header-bottom_item">
                        Môi trường học tập
                        <i class="fa-solid fa-angle-down"></i>
                        <div class="header-bottom_list">
                            <a href="./pages/moi-truong-hoc-tap" class="header-bottom_link">Cơ sở đào tạo</a>
                            <a href="./pages/moi-truong-hoc-tap" class="header-bottom_link">Hoạt động sinh
                                viên</a>
                            <a href="./pages/moi-truong-hoc-tap" class="header-bottom_link">Dành cho phụ
                                huynh</a>
                            <a href="./pages/moi-truong-hoc-tap" class="header-bottom_link">Dành cho học
                                sinh</a>
                            <a href="./pages/moi-truong-hoc-tap" class="header-bottom_link">Gắn kết cộng
                                đồng</a>
                        </div>
                    </div>
                    <div class="header-bottom_item">
                        Tin tức
                        <i class="fa-solid fa-angle-down"></i>
                        <div class="header-bottom_list">
                            <a href="./pages/tin-tuc" class="header-bottom_link">FPT Education</a>
                            <a href="./pages/tin-tuc" class="header-bottom_link">Tin tức chung</a>
                            <a href="./pages/tin-tuc" class="header-bottom_link">Tuyển sinh lớp 10</a>
                            <a href="./pages/tin-tuc" class="header-bottom_link">Tin học đường</a>
                            <a href="./pages/tin-tuc" class="header-bottom_link">Hướng nghiệp</a>
                            <a href="./pages/tin-tuc" class="header-bottom_link">Kiến thức chuyên
                                nghành</a>
                            <a href="./pages/tin-tuc" class="header-bottom_link">Báo chí nói về FPT
                                PolySchool</a>
                        </div>
                    </div>
                    <div class="header-bottom_item">
                        <a class="item-no-list" href="./pages/tin-hoc-bong">Tin học bổng</a>
                    </div>
                    <div class="header-bottom_item">
                        Cơ hội nghề nghiệp
                        <i class="fa-solid fa-angle-down"></i>
                        <div class="header-bottom_list">
                            <a href="./pages/co-hoi-nghe-nghiep" class="header-bottom_link">Doanh nghiệp
                                tuyển dụng</a>
                            <a href="./pages/co-hoi-nghe-nghiep" class="header-bottom_link">Doanh nghiệp hợp
                                tác</a>
                            <a href="./pages/co-hoi-nghe-nghiep" class="header-bottom_link">Tuyển dụng</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>`;
    }
}

class MySecondHeader extends HTMLElement {
    connectedCallback() {
        const url = this.getAttribute('url') || '';

        this.innerHTML = `<header class="header-pages">
        <div id="grid">
            <div class="header-top">
                <div class="header-top_list">
                    <a class="header-top_item" href="#">
                        <i class="fa-solid fa-envelope"></i>
                        <span>phothongcaodang@fpt.edu.vn</span>
                    </a>
                    <a class="header-top_item" href="#">
                        <i class="fa-solid fa-phone"></i>
                        <span>096 3400865</span>
                    </a>
                    <a class="header-top_item" href="#">
                        <i class="fa-solid fa-globe"></i>
                        <span>Liên hệ</span>
                    </a>
                    <a class="header-top_item" href="#">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </a>
                </div>
            </div>
        </div>

        <hr>
        <div class="header-bottom-fixed">
            <div class="header-bottom" id="grid">
                <div class="header-bottom-left">
                    <a href="../../index.html">
                        <img src="../../assets/img/logo-white.png" alt="">
                    </a>
                </div>
                <div class="header-bottom-right">
                    <div class="header-bottom_item">
                        Tuyển sinh
                        <i class="fa-solid fa-angle-down"></i>
                        <div class="header-bottom_list">
                            <a href="../tuyen-sinh" class="header-bottom_link">Thông báo tuyển sinh</a>
                            <a href="../tuyen-sinh" class="header-bottom_link">Đăng ký tư vấn trực
                                tuyến</a>
                            <a href="../tuyen-sinh" class="header-bottom_link">Quy chế tuyển sinh</a>
                            <a href="../tuyen-sinh" class="header-bottom_link">Học phí</a>
                            <a href="../tuyen-sinh" class="header-bottom_link">Thông tin chuyển
                                khoản</a>
                            <a href="../tuyen-sinh" class="header-bottom_link">Phiếu đăng ký học</a>
                            <a href="../tuyen-sinh" class="header-bottom_link">Trắc nghiệm nghề
                                nghiệp</a>
                            <a href="../tuyen-sinh" class="header-bottom_link">Hỏi đáp</a>
                        </div>
                    </div>
                    <div class="header-bottom_item">
                        Chương trình đào tạo
                        <i class="fa-solid fa-angle-down"></i>
                        <div class="header-bottom_list">
                            <div class="header-bottom_link-parent header-bottom_link">
                                <span>Ngành công nghệ thông tin <i class="fa-solid fa-chevron-right"></i></span>
                                <div class="header-bottom_link-child">
                                    <a href="../chuong-trinh-dao-tao" class="header-bottom_link">Phát
                                        triển phần mềm</a>
                                    <a href="../chuong-trinh-dao-tao" class="header-bottom_link">Lập
                                        trình web</a>
                                    <a href="../chuong-trinh-dao-tao" class="header-bottom_link">Ứng
                                        dụng phần mềm</a>
                                </div>
                            </div>
                            <div class="header-bottom_link-parent header-bottom_link">
                                <span>Ngành thiết kế đồ họa <i class="fa-solid fa-chevron-right"></i></span>
                                <div class="header-bottom_link-child">
                                    <a href="../chuong-trinh-dao-tao" class="header-bottom_link">Thiết
                                        kế đồ họa</a>
                                </div>
                            </div>
                            <div class="header-bottom_link-parent header-bottom_link">
                                <span>Ngành quản trị kinh doanh <i class="fa-solid fa-chevron-right"></i></span>
                                <div class="header-bottom_link-child">
                                    <a href="../chuong-trinh-dao-tao" class="header-bottom_link">Digital
                                        Marketing</a>
                                    <a href="../chuong-trinh-dao-tao" class="header-bottom_link">Quản
                                        trị khách sạn nhà hàng</a>
                                    <a href="../chuong-trinh-dao-tao" class="header-bottom_link">Logistics</a>
                                    <a href="../chuong-trinh-dao-tao" class="header-bottom_link">Truyền
                                        thông và tổ chức sự kiện</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="header-bottom_item">
                        Môi trường học tập
                        <i class="fa-solid fa-angle-down"></i>
                        <div class="header-bottom_list">
                            <a href="../moi-truong-hoc-tap" class="header-bottom_link">Cơ sở đào tạo</a>
                            <a href="../moi-truong-hoc-tap" class="header-bottom_link">Hoạt động sinh
                                viên</a>
                            <a href="../moi-truong-hoc-tap" class="header-bottom_link">Dành cho phụ
                                huynh</a>
                            <a href="../moi-truong-hoc-tap" class="header-bottom_link">Dành cho học
                                sinh</a>
                            <a href="../moi-truong-hoc-tap" class="header-bottom_link">Gắn kết cộng
                                đồng</a>
                        </div>
                    </div>
                    <div class="header-bottom_item">
                        Tin tức
                        <i class="fa-solid fa-angle-down"></i>
                        <div class="header-bottom_list">
                            <a href="../tin-tuc" class="header-bottom_link">FPT Education</a>
                            <a href="../tin-tuc" class="header-bottom_link">Tin tức chung</a>
                            <a href="../tin-tuc" class="header-bottom_link">Tuyển sinh lớp 10</a>
                            <a href="../tin-tuc" class="header-bottom_link">Tin học đường</a>
                            <a href="../tin-tuc" class="header-bottom_link">Hướng nghiệp</a>
                            <a href="../tin-tuc" class="header-bottom_link">Kiến thức chuyên
                                nghành</a>
                            <a href="../tin-tuc" class="header-bottom_link">Báo chí nói về FPT
                                PolySchool</a>
                        </div>
                    </div>
                    <div class="header-bottom_item">
                        <a class="item-no-list" href="../tin-hoc-bong">Tin học bổng</a>
                    </div>
                    <div class="header-bottom_item">
                        Cơ hội nghề nghiệp
                        <i class="fa-solid fa-angle-down"></i>
                        <div class="header-bottom_list">
                            <a href="../co-hoi-nghe-nghiep" class="header-bottom_link">Doanh nghiệp
                                tuyển dụng</a>
                            <a href="../co-hoi-nghe-nghiep" class="header-bottom_link">Doanh nghiệp hợp
                                tác</a>
                            <a href="../co-hoi-nghe-nghiep" class="header-bottom_link">Tuyển dụng</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>`;
    }
}

class MyFooter extends HTMLElement {
    connectedCallback() {
        const imgUrl = this.getAttribute('url') || '../../';

        this.innerHTML = `<footer>
        <div class="footer-container" id="grid">
            <div class="footer-1st">
                <img src="${imgUrl}assets/img/logo-white.png" alt="">
                <h3>Thông tin liên hệ</h3>
                <p>Điện thoại: 0963 400 865</p>
                <p>Email: Phothongcaodang@fpt.edu.vn</p>
                <div class="footer-1st_icons">
                    <a href="#">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-wikipedia-w"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-tiktok"></i>
                    </a>
                </div>
            </div>
            <div class="footer-2nd">
                <h2>Khu vực miền Bắc</h2>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="#">Cơ sở tại Hà Nội</a>
                </p>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="#">Cơ sở tại Thái Nguyên</a>
                </p>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="#">Cơ sở tại Bắc Giang</a>
                </p>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="#">Cơ sở tại Hải Phòng</a>
                </p>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="#">Cơ sở tại Hà Nam</a>
                </p>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="#">Cơ sở tại Vĩnh Phúc</a>
                </p>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="#">Cơ sở tại Nam Định</a>
                </p>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="#">Cơ sở tại Quảng Ninh</a>
                </p>
            </div>
            <div class="footer-3rd">
                <h2>Khu vực miền Trung</h2>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="#">Cơ sở tại Thanh Hóa</a>
                </p>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="#">Cơ sở tại Huế</a>
                </p>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="#">Cơ sở tại Đà Nẵng</a>
                </p>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="#">Cơ sở tại Bình Định</a>
                </p>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="#">Cơ sở tại Quảng Nam</a>
                </p>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="#">Cơ sở tại Nghệ An</a>
                </p>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="#">Cơ sở tại Tây Nguyên</a>
                </p>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="#">Cơ sở tại Nha Trang</a>
                </p>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="#">Cơ sở tại Gia Lai</a>
                </p>
            </div>
            <div class="footer-4th">
                <h2>Khu vực miền Nam</h2>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="#">Cơ sở tại Bình Dương</a>
                </p>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="#">Cơ sở tại Bình Phước</a>
                </p>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="#">Cơ sở tại Đồng Nai</a>
                </p>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="#">Cơ sở tại Cần Thơ</a>
                </p>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="#">Cơ sở tại TP. Hồ Chí Minh</a>
                </p>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="#">Cơ sở tại Bà Rịa - Vũng Tàu</a>
                </p>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="#">Cơ sở tại Cà Mau</a>
                </p>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="#">Cơ sở tại Tây Ninh</a>
                </p>
            </div>
        </div>
    </footer>`;
    }
}

class ContactNow extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div onclick="show('form-contact-now')" class="contact-now">
        <img src="https://public-gcs.subiz-cdn.com/dashboard-v4/public/img/bubble/bubble_lib_03.svg" alt="">
    </div>

    <div id="form-contact-now" class="form-contact-now">
        <i onclick="hide('form-contact-now')" class="form-contact-now-close-icon fa-solid fa-xmark"></i>
        <div class="form-contact-now-top">
            <div class="form-contact-now-top-left">
                <img src="https://vcdn.subiz-cdn.com/file/firvyxehbkeksjzwewoq_128_11710e111b155447aea7b5089dcc1c261ec3cbb2a30a07d749c0b4c829208bbb_acqowkjdndlcwgulxswz_acqowkjdndlcwgulxswz"
                    alt="">
            </div>
            <div class="form-contact-now-top-right">
                <h4>FPT Polyschool</h4>
                <p>Bạn có thắc mắc gì, hãy hỏi ngay nhé! Cán bộ trường sẽ tư vấn chi tiết cho bạn!</p>
            </div>
        </div>
        <div class="form-contact-now-center">
            <div class="form-contact-now-center-top">
                <p>
                    Hiện tại, chúng tôi không trực tuyến. Bạn vui lòng để lại tin nhắn, chúng tôi sẽ sớm liên hệ lại với
                    bạn.
                </p>
                <div class="form-contact-now-center-top-input">
                    <label for="">Họ và tên <span>*</span></label>
                    <input type="text">
                </div>
                <div class="form-contact-now-center-top-input">
                    <label for="">Số điện thoại <span>*</span></label>
                    <input type="text">
                </div>
                <div class="form-contact-now-center-top-input form-contact-now-center-top-input-message">
                    <label for="">Tin nhắn <span>*</span></label>
                    <textarea aria-controls="none" name="" id=""></textarea>
                </div>

            </div>
            <div class="form-contact-now-center-bottom">
                <a href="#"><i class="fa-brands fa-facebook-messenger"></i> <span>Messenger</span></a>

            </div>
        </div>
        <div class="form-contact-now-bottom">
            <button>Để lại tin nhắn</button>
        </div>
    </div>`;
    }
}

class ButtonOnTop extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div onclick="backToTop();" id="btn-ontop">
        <i class="fa-solid fa-chevron-up"></i>
    </div>`;
    }
}

class MyTitle extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'Hello World';

        this.innerHTML = `<div class="title">
            <h1>${title}</h1>
            <hr>
        </div>`;
    }
}

class MyImgInfo extends HTMLElement {
    connectedCallback() {
        const imgUrl = this.getAttribute('url') || 'Hello World';
        const info = this.getAttribute('info') || 'Hello World';

        this.innerHTML = `<div class="img-info">
                    <a href="#">
                        <img src="${imgUrl}" alt="">
                    </a>
                    <p>${info}</p>
                </div>`;
    }
}

customElements.define("my-header", MyHeader);
customElements.define("my-footer", MyFooter);
customElements.define("my-second-header", MySecondHeader);
customElements.define("contact-now", ContactNow);
customElements.define("button-top", ButtonOnTop);
customElements.define("my-title", MyTitle);
customElements.define("my-img-info", MyImgInfo);
// Module END