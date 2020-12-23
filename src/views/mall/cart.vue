<template>
    <main id="main-container" class="main-container">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-content">
                        <h5 class="section-content__title">加购的商品</h5>
                    </div>
                    <div class="table-content table-responsive cart-table-content m-t-30">
                        <table>
                            <thead class="gray-bg" >
                            <tr>
                                <th>图片</th>
                                <th>商品图片</th>
                                <th>商品单价</th>
                                <th>数量</th>
                                <th>商品总价</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td class="product-thumbnail">
                                    <a href="Details.html"><img class="img-fluid" src="../../assets/img/banner/shouban.png" alt=""></a>
                                </td>
                                <td class="product-name"><a href="Details.html" title="查看详情">独角兽</a></td>
                                <td class="product-price-cart"><span class="amount">¥100.00</span></td>
                                <td class="product-quantities">
                                    <div class="quantity d-inline-block">
                                        <input type="number" min="1" step="1" value="1">
                                    </div>
                                </td>
                                <td class="product-subtotal">¥100.00</td>
                                <td class="product-remove">
                                    <a href="wishlist.html" title="添加到喜欢"><i class="fa fa-heart"></i></a>
                                    <a href="#"><i class="fa fa-times"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td class="product-thumbnail">
                                    <a href="Details.html"><img class="img-fluid" src="../../assets/img/banner/shouban.png" alt=""></a>
                                </td>
                                <td class="product-name"><a href="Details.html">独角兽</a></td>
                                <td class="product-price-cart"><span class="amount">¥100.00</span></td>
                                <td class="product-quantities">
                                    <div class="quantity d-inline-block">
                                        <input type="number" min="1" step="1" value="1">
                                    </div>
                                </td>
                                <td class="product-subtotal">¥100.00</td>
                                <td class="product-remove">
                                    <a href="wishlist.html" title="添加到喜欢"><i class="fa fa-heart"></i></a>
                                    <a href="#"><i class="fa fa-times"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td class="product-thumbnail">
                                    <a href="Details.html"><img class="img-fluid" src="../../assets/img/banner/shouban.png" alt=""></a>
                                </td>
                                <td class="product-name"><a href="Details.html">独角兽</a></td>
                                <td class="product-price-cart"><span class="amount">¥100.00</span></td>
                                <td class="product-quantities">
                                    <div class="quantity d-inline-block">
                                        <input type="number" min="1" step="1" value="1">
                                    </div>
                                </td>
                                <td class="product-subtotal">¥100.00</td>
                                <td class="product-remove">
                                    <a href="wishlist.html" title="添加到喜欢"><i class="fa fa-heart"></i></a>
                                    <a href="#"><i class="fa fa-times"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td class="product-thumbnail">
                                    <a href="Details.html"><img class="img-fluid" src="../../assets/img/banner/shouban.png" alt=""></a>
                                </td>
                                <td class="product-name"><a href="Details.html">独角兽</a></td>
                                <td class="product-price-cart"><span class="amount">¥100.00</span></td>
                                <td class="product-quantities">
                                    <div class="quantity d-inline-block">
                                        <input type="number" min="1" step="1" value="1">
                                    </div>
                                </td>
                                <td class="product-subtotal">¥100.00</td>
                                <td class="product-remove">
                                    <a href="wishlist.html" title="添加到喜欢"><i class="fa fa-heart"></i></a>
                                    <a href="#"><i class="fa fa-times"></i></a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="cart-table-button m-t-10">
                        <div class="cart-table-button--left">
                            <a href="mall.html" class="btn btn--box btn--large btn--gray btn--uppercase btn--weight m-t-20">继续购物</a>
                        </div>
                        <div class="cart-table-button--right">
                            <a href="#erweima" data-toggle="modal" class="btn btn--box btn--large btn--blue btn--uppercase btn--weight m-t-20">结算</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
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
    export default {
        name: "cart"
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
</style>