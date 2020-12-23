<template>
    <div>
        <main id="main-container" class="main-container">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="banner">
                            <div class="row">
                                <div class="col-12">
                                    <div class="banner__box">
                                        <a href="#" class="banner__link">
                                            <img src="../../assets/img/banner/shopbg.jpg" alt="" class="banner__img">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--
                            作者：1016226614@qq.com
                            时间：2020-11-22
                            描述：第三部分  排序
                        -->

                        <div class="sort-box m-tb-30">

                            <div class="sort-box__left">
                                <div class="sort-box__tab">
                                    <ul class="sort-box__tab-list nav">
                                        <li>
                                            <a class="sort-nav-link active" data-toggle="tab" href="#sort-grid"><i class="icon-grid"></i> </a>
                                        </li>
                                        <li>
                                            <a class="sort-nav-link" data-toggle="tab" href="#sort-list"><i class="icon-list"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <span>促销商品</span>
                            </div>

                            <div class="sort-box__right">
                                <span>排序方式：</span>
                                <div class="sort-box__option">
                                    <label class="select-sort__arrow">
                                        <select name="select-sort" class="select-sort">
                                            <option value="1">默认</option>
                                            <option value="2">名称（顺序）</option>
                                            <option value="3"> 名称（倒序）</option>
                                            <option value="4"> 价格（从低到高）</option>
                                            <option value="5">价格（从高到低）</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <!--
                            作者：1016226614@qq.com
                            时间：2020-11-22
                            描述：第四部分  商品列表
                        -->
                        <div class="product-tab-area">
                            <div class="tab-content ">
                                <div class="tab-pane show active clearfix" id="sort-grid">

                                    <div v-for="n in 12" class="product__box product__box--default product__box--border-hover text-center float-left float-4">
                                        <div class="product__img-box">
                                            <a href="Details.html" class="product__img--link">
                                                <img class="product__img" src="../../assets/img/banner/diaoshi.jpg" alt="">
                                            </a>

                                            <a href="#modalAddCart" data-toggle="modal" class="btn btn--box btn--small btn--gray btn--uppercase btn--weight btn--hover-zoom product__upper-btn">添加到购物车</a>
                                            <span class="product__tag product__tag--discount">-12%</span>
                                            <a href="wishlist.html" class="product__wishlist-icon"><i class="icon-heart"></i></a>
                                        </div>
                                        <div class="product__price m-t-10">
                                            <span class="product__price-del">¥11.90</span>
                                            <span class="product__price-reg">¥10.71</span>
                                        </div>
                                        <a href="Details.html" class="product__link product__link--underline product__link--weight-light m-t-15">
                                            商品简介：家居装饰及灯饰系列产品
                                        </a>
                                    </div>
                                </div>
                                <!--
                                    作者：1016226614@qq.com
                                    时间：2020-11-22
                                    描述：第五部分 横向排列
                                -->
                                <div class="tab-pane shop-list" id="sort-list">
                                    <div v-for="n in 3" class="product__box product__box--list">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="product__img-box">
                                                    <a href="#" class="product__img--link">
                                                        <img class="product__img" src="../../assets/img/banner/diaoshi.jpg" alt="">
                                                    </a>
                                                    <span class="product__tag product__tag--discount">-12%</span>

                                                </div>
                                            </div>
                                            <div class="col-md-5 pos-relative">
                                                <div class="border-right pos-absolute"></div>
                                                <div class="product__price">
                                                    <span class="product__price-del">¥11.90</span>
                                                    <span class="product__price-reg">¥10.71</span>
                                                </div>
                                                <a href="#" class="product__link product__link--underline product__link--weight-light m-t-15">
                                                    商品简介：家居装饰及灯饰系列产品
                                                </a>
                                                <div class="product__desc m-t-25 m-b-30">
                                                    <p>吊饰，顾名思义就是吊着的装饰，一般指项坠。它应用范围广，可用于形象广告礼品、纪念赠品、独特创意的摆饰品及品牌、展示牌、展示架、家居装饰及灯饰系列产品。</p>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div>
                                                    <ul class="shop__list-link">
                                                        <li>
                                                            <a href="#modalAddCart" data-toggle="modal" class="btn btn--block btn--small btn--border-blue btn--uppercase btn--weight m-b-15">添加到购物车</a>
                                                        </li>
                                                        <li>
                                                            <a href="wishlist.html" class="link--gray link--icon-left shop__wishlist-icon m-b-5"><i class="icon-heart"></i>添加到我喜欢的</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--
                            作者：1016226614@qq.com
                            时间：2020-11-26
                            描述：第六部分  翻页
                        -->
                        <div class="page-pagination">

                            <ul class="page-pagination__list">
                                <li class="page-pagination__item">
                                    <a class="page-pagination__link btn btn--gray" href="#"><i class="icon-chevron-left"></i> 上一页</a>
                                </li>
                                <li class="page-pagination__item">
                                    <a class="page-pagination__link active btn btn--gray" href="#">1</a>
                                </li>
                                <li class="page-pagination__item">
                                    <a class="page-pagination__link btn btn--gray" href="#">2</a>
                                </li>
                                <li class="page-pagination__item">
                                    <a class="page-pagination__link btn btn--gray" href="#">3</a>
                                </li>
                                <li class="page-pagination__item">
                                    <a class="page-pagination__link btn btn--gray" href="#">4</a>
                                </li>
                                <li class="page-pagination__item">
                                    <a class="page-pagination__link btn btn--gray" href="#">5</a>
                                </li>

                                <li class="page-pagination__item">
                                    <a class="page-pagination__link btn btn--gray" href="#">下一页<i class="icon-chevron-right"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <div class="modal fade" id="modalAddCart" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog  modal-dialog-centered modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-center">商品成功添加到购物车</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="modal__product-img">
                                                <img class="img-fluid" src="../../assets/img/banner/diaoshi.jpg" alt="">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <span class="modal__product-title">星星吊饰</span>
                                            <span class="modal__product-price m-tb-15">¥50.00</span>
                                            <ul class="modal__product-info ">
                                                <li>尺寸（线长）:<span> 1.2米</span></li>
                                                <li>数量:<span>3</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 modal__border">
                                    <span class="modal__product-cart-item">购物车共有3件商品</span>
                                    <ul class="modal__product-shipping-info m-tb-15">
                                        <li>商品价格:<span>¥94.78</span></li>
                                        <li>运费:<span>¥7.00</span></li>
                                        <li>总价: <span>¥101.78</span></li>
                                    </ul>

                                    <div class="modal__product-cart-buttons">
                                        <a href="#" class="btn btn--box btn--large btn--blue btn--uppercase btn--weight" data-dismiss="modal">继续购物</a>
                                        <a href="#" class="btn btn--box btn--large btn--blue btn--uppercase btn--weight">结算</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import "../../assets/js/vendor/bootstrap.bundle.js";
    import "../../assets/js/vendor/jquery-3.5.1.min.js";
    import "../../assets/js/vendor/modernizr-3.7.1.min.js";
    import "../../assets/js/vendor/jquery-ui.min.js";
    import "../../assets/js/plugin/swiper.min.js"
    import "../../assets/js/plugin/jquery.countdown.min.js"
    import "../../assets/js/plugin/material-scrolltop.js"
    import "../../assets/js/plugin/price_range_script.js"
    import "../../assets/js/plugin/in-number.js"
    import "../../assets/js/plugin/jquery.elevateZoom-3.0.8.min.js"
    import "../../assets/js/plugin/venobox.min.js"
    // import "../../assets/js/main.js"
    export default {
        name: "mall"
    }
</script>

<style scoped>
    @import "../../assets/css/vendor/jquery-ui.min.css";
    @import "../../assets/css/vendor/fontawesome.css";
    @import "../../assets/css/vendor/plaza-icon.css";
    @import "../../assets/css/vendor/bootstrap.min.css";
    @import "../../assets/css/plugin/swiper.min.css";
    @import "../../assets/css/plugin/material-scrolltop.css";
    @import "../../assets/css/plugin/price_range_style.css";
    @import "../../assets/css/plugin/in-number.css";
    @import "../../assets/css/plugin/venobox.min.css";
    @import "../../assets/css/main.css";
    .page-pagination {
        justify-content: center
    }
</style>