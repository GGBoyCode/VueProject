<template>
   <div>
       <main id="main-container" class="main-container">
           <div class="container">
               <div class="row">
                   <div class="col-12">
                       <div class="product-details">
                           <div class="row">
                               <div class="col-md-6">
                                   <div class="product-gallery-box m-b-60">
                                       <div class="product-image--large overflow-hidden">
                                           <img class="img-fluid" id="img-zoom" src="../../assets/img/banner/shouban.png" data-zoom-image="../../assets/img/banner/shouban.png" alt=""><!--data-zoom-image 图片放大效果-->
                                       </div>
                                       <div class="pos-relative m-t-30">
                                           <div id="gallery-zoom" class="product-image--thumb product-image--thumb-horizontal overflow-hidden swiper-outside-arrow-hover m-lr-30">
                                               <div class="swiper-wrapper">
                                                   <div class="swiper-slide">
                                                       <a class="zoom-active" data-image="../../assets/img/banner/diaoshi.jpg" data-zoom-image="../../assets/img/banner/diaoshi.jpg">
                                                           <img class="img-fluid" src="../../assets/img/banner/diaoshi.jpg" alt="">
                                                       </a>
                                                   </div>
                                                   <div class="swiper-slide">
                                                       <a  data-image="../../assets/img/banner/wawa.jpg" data-zoom-image="../../assets/img/banner/wawa.jpg">
                                                           <img class="img-fluid" src="../../assets/img/banner/wawa.jpg" alt="">
                                                       </a>
                                                   </div>
                                                   <div class="swiper-slide">
                                                       <a  data-image="../../assets/img/banner/wawa.jpg" data-zoom-image="../../assets/img/banner/wawa.jpg">
                                                           <img class="img-fluid" src="../../assets/img/banner/wawa.jpg" alt="">
                                                       </a>
                                                   </div>
                                                   <div class="swiper-slide">
                                                       <a  data-image="../../assets/img/banner/wawa.jpg" data-zoom-image="../../assets/img/banner/wawa.jpg">
                                                           <img class="img-fluid" src="../../assets/img/banner/wawa.jpg" alt="">
                                                       </a>
                                                   </div>
                                                   <div class="swiper-slide">
                                                       <a  data-image="../../assets/img/banner/wawa.jpg" data-zoom-image="../../assets/img/banner/wawa.jpg">
                                                           <img class="img-fluid" src="../../assets/img/banner/wawa.jpg" alt="">
                                                       </a>
                                                   </div>
                                               </div>
                                           </div>
                                           <!--
                                               作者：1016226614@qq.com
                                               时间：2020-11-30
                                               描述：第三部分-2  商品详情--滑动按钮
                                               -->
                                           <div class="swiper-buttons">
                                               <div class="swiper-button-next gallery__nav gallery__nav--next"><i class="fal fa-chevron-right"></i></div>
                                               <div class="swiper-button-prev gallery__nav gallery__nav--prev"><i class="fal fa-chevron-left"></i></div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <!--
                                   作者：1016226614@qq.com
                                   时间：2020-11-30
                                   描述：第四部分  商品具体信息
                               -->
                               <div class="col-md-6">
                                   <div class="product-details-box">
                                       <h5 class="section-content__title">商品名称:夜行独角兽</h5>
                                       <span class="text-reference">商家:西华师范大学&nbsp;&nbsp;地址：四川省南充市顺庆区华凤街道师大路四段1号</span>
                                       <!-- 评价星数-->
                                       <div class="review-box">
                                           <ul class="product__review m-t-10 m-b-15">
                                               <li class="product__review--fill"><i class="icon-star"></i></li>
                                               <li class="product__review--fill"><i class="icon-star"></i></li>
                                               <li class="product__review--fill"><i class="icon-star"></i></li>
                                               <li class="product__review--fill"><i class="icon-star"></i></li>
                                               <li class="product__review--blank"><i class="icon-star"></i></li>
                                           </ul>
                                           <!--评论（查看  写）-->
                                           <a href="#product-review" class="link--gray link--icon-left  m-b-5"><i class="fal fa-comment-dots"></i>查看评论 (99+) </a>
                                           <a href="#modalReview" data-toggle="modal" class="link--gray link--icon-left m-b-5"><i class="fal fa-edit"></i> 我也要评论</a>
                                       </div>
                                       <div class="product__price">
                                           <span class="product__price-del">¥100.00</span>
                                           <span class="product__price-reg">¥88.98</span>
                                       </div>
                                       <div>
                                           <p>
                                               付款人数:389
                                           </p>
                                       </div>
                                       <div class="product__desc m-t-25 m-b-30">
                                           <p>手工艺品，俗称"民间手工艺品"，是指民间的劳动人民为适应生活需要和审美要求，就地取材，以手工生产为主的一种工艺美术品。手工艺品的品种非常繁多，如皮具、宋锦、竹编、草编、手工刺绣、蓝印花布、蜡染、手工木雕、油纸伞、泥塑、剪纸、服饰、民间玩具等。</p>
                                       </div>
                                       <div class="product-var p-t-30">
                                           <div class="product-size product-var__item">
                                               <span class="product-var__text">尺寸</span>
                                               <select id="product-size-real">
                                                   <option value="small">迷你</option>
                                                   <option value="medium">小</option>
                                                   <option value="large">中</option>
                                                   <option value="extraLarge">大</option>
                                                   <option value="doubleLarge">超大</option>
                                               </select>
                                           </div>
                                           <div class="product-color product-var__item">
                                               <span class="product-var__text">颜色</span>
                                               <div class="color-filter ">
                                                   <label class="product-color"><input name="product-color-select" type="radio" class="product-color-select" value="color-red"><span></span></label>
                                                   <label class="product-color" ><input name="product-color-select" type="radio" class="product-color-select"   value="color-green" checked><span></span></label>
                                                   <label class="product-color" ><input name="product-color-select" type="radio" class="product-color-select"   value="color-blue"><span></span></label>
                                               </div>
                                           </div>
                                           <div class="product-quantity product-var__item">
                                               <span class="product-var__text">数量</span>
                                               <div class="product-quantity-box">
                                                   <div class="quantity">
                                                       <input type="number" min="1" max="9" step="1" value="1">
                                                   </div>
                                                   <a href="#modalAddCart" data-toggle="modal" data-dismiss="modal" class="btn btn--box btn--small btn--blue btn--uppercase btn--weight m-l-20">添加到购物车</a>
                                               </div>

                                           </div>
                                       </div>
                                       <!-- 添加到喜欢-->
                                       <div class="product-links ">
                                           <a href="wishlist.html" class="link--gray link--icon-left shop__wishlist-icon m-b-5"><i class="icon-heart"></i>添加到喜欢</a>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <!--
                       作者：1016226614@qq.com
                       时间：2020-11-30
                       描述：第五部分  商品细节
                   -->
                   <div class="col-12">
                       <div class="product product--1 border-around product-details-tab-area">
                           <div class="row">
                               <div class="col-12">
                                   <div class="section-content--border">
                                       <ul class="tablist tablist--style-black tablist--style-title tablist--style-gap-70 nav">
                                           <li><a class="nav-link active" data-toggle="tab" href="#product-desc">商品描述</a></li>
                                           <li><a class="nav-link" data-toggle="tab" href="#product-dis">商品参数</a></li>
                                           <li><a class="nav-link" data-toggle="tab" href="#product-review">评论</a></li>
                                       </ul>
                                   </div>
                               </div>
                               <div class="col-md-12">
                                   <div class="product-details-tab-box m-t-50">
                                       <div class="tab-content">
                                           <!-- 商品具体描述 -->
                                           <div class="tab-pane show active" id="product-desc">
                                               <div class="para__content">
                                                   <p class="para__text">手工艺是指以手工劳动进行制作的具有独特艺术风格的工艺美术。有别于以大工业机械化方式批量生产规格化日用工艺品的工艺美术。 手工艺品指的是纯手工或借助工具制作的产品。可以使用机械工具，但前提是工艺师直接的手工作业仍然为成品的最主要来源。手工艺品由自然材料制成，能够无限量制作。此类产品实用、美观，具有艺术性和创新性，能传达文化内涵，富有装饰性、功能性和传统性，同时具有宗教或社会象征意义和重要性。“工艺”一词具有多重含义，其中重要的内涵之一，是指一种特殊的工艺技能，尤其指手工艺术的诸多门类。</p>

                                                   <p class="para__text">手艺人的作业对象有石材、金属和陶瓷，作品大致分为两类：一类是民间美术，为宗教、魔法服务，也有表现自身生活的作品；另一类是为统治阶级服务的宫廷美术，两类雕塑都内容丰富、形式多样，富有装饰性，富有表现力，视觉冲击力强。</p>

                                                   <h6 class="para__title">商品亮点:</h6>
                                                   <ul class="para__list">
                                                       <li>亮点一:这是亮点一！</li>
                                                       <li>亮点二:这是亮点二！</li>
                                                       <li>亮点三:这是亮点三！</li>
                                                       <li>亮点四:这是亮点四！</li>
                                                       <li>亮点五:这是亮点五！</li>
                                                       <li>亮点六:这是亮点六！</li>
                                                   </ul>
                                               </div>
                                           </div>

                                           <!-- 商品细节 -->
                                           <div class="tab-pane" id="product-dis">
                                               <div class="product-dis__content">
                                                   <img src="../../assets/img/banner/logo.png" alt="">
                                                   <div class="table-responsive-md">
                                                       <table class="product-dis__list table table-bordered">
                                                           <tbody>
                                                           <tr>
                                                               <td class="product-dis__title">重量</td>
                                                               <td class="product-dis__text">400g</td>
                                                           </tr>
                                                           <tr>
                                                               <td class="product-dis__title">材料</td>
                                                               <td class="product-dis__text">100% 塑料</td>
                                                           </tr>
                                                           <tr>
                                                               <td class="product-dis__title">尺寸</td>
                                                               <td class="product-dis__text">底座:8cm x 8cm 高:12cm</td>
                                                           </tr>
                                                           <tr>
                                                               <td class="product-dis__title">产地</td>
                                                               <td class="product-dis__text">南充市 西华师范大学</td>
                                                           </tr>
                                                           </tbody>
                                                       </table>
                                                   </div>
                                               </div>
                                           </div>
                                           <!-- 评论-->
                                           <div class="tab-pane " id="product-review">
                                               <ul class="comment">

                                                   <li class="comment__list">
                                                       <div class="comment__wrapper">
                                                           <div class="comment__img">
                                                               <img src="../../assets/img/banner/user.jpg" alt="">
                                                           </div>
                                                           <div class="comment__content">
                                                               <div class="comment__content-top">
                                                                   <div class="comment__content-left">
                                                                       <h6 class="comment__name">张三</h6>
                                                                       <ul class="product__review">
                                                                           <li class="product__review--fill"><i class="icon-star"></i></li>
                                                                           <li class="product__review--fill"><i class="icon-star"></i></li>
                                                                           <li class="product__review--fill"><i class="icon-star"></i></li>
                                                                           <li class="product__review--fill"><i class="icon-star"></i></li>
                                                                           <li class="product__review--blank"><i class="icon-star"></i></li>
                                                                       </ul>
                                                                   </div>
                                                                   <div class="comment__content-right">
                                                                       <a href="#" class="link--gray link--icon-left m-b-5"><i class="fas fa-reply"></i>回复</a>
                                                                   </div>
                                                               </div>

                                                               <div class="para__content">
                                                                   <p class="para__text">以前实体店看到了就想买，被老婆劝说网上肯定更划算，结果回家就忘了……前两天偶然看到了，说明还是有缘！很有设计感的好东西，很治愈～</p>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   <li class="comment__list">
                                                       <div class="comment__wrapper">
                                                           <div class="comment__img">
                                                               <img src="../../assets/img/banner/user2.jpg" alt="">
                                                           </div>
                                                           <div class="comment__content">
                                                               <div class="comment__content-top">
                                                                   <div class="comment__content-left">
                                                                       <h6 class="comment__name">李四</h6>
                                                                       <ul class="product__review">
                                                                           <li class="product__review--fill"><i class="icon-star"></i></li>
                                                                           <li class="product__review--fill"><i class="icon-star"></i></li>
                                                                           <li class="product__review--fill"><i class="icon-star"></i></li>
                                                                           <li class="product__review--fill"><i class="icon-star"></i></li>
                                                                           <li class="product__review--blank"><i class="icon-star"></i></li>
                                                                       </ul>
                                                                   </div>
                                                                   <div class="comment__content-right">
                                                                       <a href="#" class="link--gray link--icon-left m-b-5"><i class="fas fa-reply"></i>回复</a>
                                                                   </div>
                                                               </div>

                                                               <div class="para__content">
                                                                   <p class="para__text">以前实体店看到了就想买，被老婆劝说网上肯定更划算，结果回家就忘了……前两天偶然看到了，说明还是有缘！很有设计感的好东西，很治愈～</p>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </li>
                                               </ul>

                                               <a href="#modalReview" data-toggle="modal" class="btn btn--box btn--small btn--blue btn--uppercase btn--weight m-t-30">我也要评论</a>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>

                   <div class="col-12">
                       <!--
                           作者：1016226614@qq.com
                           时间：2020-11-30
                           描述：第六部分 相似产品
                       -->
                       <div class="product product--1 swiper-outside-arrow-hover">
                           <div class="row">
                               <div class="col-12">
                                   <div class="section-content section-content--border d-flex align-items-center justify-content-between">
                                       <h5 class="section-content__title">猜您喜欢: </h5>
                                   </div>
                               </div>
                           </div>
                           <div class="row">
                               <div class="col-12">
                                   <div class="swiper-outside-arrow-fix pos-relative">
                                       <div class="product-default-slider-5grid overflow-hidden  m-t-50">
                                           <div class="swiper-wrapper">
                                               <div class="product__box product__box--default product__box--border-hover swiper-slide text-center">
                                                   <div class="product__img-box">
                                                       <a href="#" class="product__img--link">
                                                           <img class="product__img" src="../../assets/img/banner/shouban.png" alt="">
                                                       </a>

                                                       <a href="#modalAddCart" data-toggle="modal" class="btn btn--box btn--small btn--gray btn--uppercase btn--weight btn--hover-zoom product__upper-btn">加入购物车</a>
                                                       <span class="product__tag product__tag--new">New</span>
                                                       <a href="wishlist.html" class="product__wishlist-icon"><i class="icon-heart"></i></a>
                                                   </div>
                                                   <div class="product__price m-t-10">
                                                       <span class="product__price-reg">¥100</span>
                                                   </div>
                                                   <a href="#" class="product__link product__link--underline product__link--weight-light m-t-15">
                                                       白夜童话女生日礼物摆件装饰轻奢艺术品创意
                                                   </a>
                                               </div>

                                               <div class="product__box product__box--default product__box--border-hover swiper-slide text-center">
                                                   <div class="product__img-box">
                                                       <a href="#" class="product__img--link">
                                                           <img class="product__img" src="../../assets/img/banner/shouban.png" alt="">
                                                       </a>

                                                       <a href="#modalAddCart" data-toggle="modal" class="btn btn--box btn--small btn--gray btn--uppercase btn--weight btn--hover-zoom product__upper-btn">加入购物车</a>
                                                       <span class="product__tag product__tag--new">New</span>
                                                       <a href="wishlist.html" class="product__wishlist-icon"><i class="icon-heart"></i></a>
                                                   </div>
                                                   <div class="product__price m-t-10">
                                                       <span class="product__price-reg">¥100</span>
                                                   </div>
                                                   <a href="#" class="product__link product__link--underline product__link--weight-light m-t-15">
                                                       白夜童话女生日礼物摆件装饰轻奢艺术品创意
                                                   </a>
                                               </div>

                                               <div class="product__box product__box--default product__box--border-hover swiper-slide text-center">
                                                   <div class="product__img-box">
                                                       <a href="#" class="product__img--link">
                                                           <img class="product__img" src="../../assets/img/banner/shouban.png" alt="">
                                                       </a>

                                                       <a href="#modalAddCart" data-toggle="modal" class="btn btn--box btn--small btn--gray btn--uppercase btn--weight btn--hover-zoom product__upper-btn">加入购物车</a>
                                                       <span class="product__tag product__tag--new">New</span>
                                                       <a href="wishlist.html" class="product__wishlist-icon"><i class="icon-heart"></i></a>
                                                   </div>
                                                   <div class="product__price m-t-10">
                                                       <span class="product__price-reg">¥100</span>
                                                   </div>
                                                   <a href="#" class="product__link product__link--underline product__link--weight-light m-t-15">
                                                       白夜童话女生日礼物摆件装饰轻奢艺术品创意
                                                   </a>
                                               </div>

                                               <div class="product__box product__box--default product__box--border-hover swiper-slide text-center">
                                                   <div class="product__img-box">
                                                       <a href="#" class="product__img--link">
                                                           <img class="product__img" src="../../assets/img/banner/shouban.png" alt="">
                                                       </a>

                                                       <a href="#modalAddCart" data-toggle="modal" class="btn btn--box btn--small btn--gray btn--uppercase btn--weight btn--hover-zoom product__upper-btn">加入购物车</a>
                                                       <span class="product__tag product__tag--new">New</span>
                                                       <a href="wishlist.html" class="product__wishlist-icon"><i class="icon-heart"></i></a>
                                                   </div>
                                                   <div class="product__price m-t-10">
                                                       <span class="product__price-reg">¥100</span>
                                                   </div>
                                                   <a href="#" class="product__link product__link--underline product__link--weight-light m-t-15">
                                                       白夜童话女生日礼物摆件装饰轻奢艺术品创意
                                                   </a>
                                               </div>

                                               <div class="product__box product__box--default product__box--border-hover swiper-slide text-center">
                                                   <div class="product__img-box">
                                                       <a href="#" class="product__img--link">
                                                           <img class="product__img" src="../../assets/img/banner/shouban.png" alt="">
                                                       </a>

                                                       <a href="#modalAddCart" data-toggle="modal" class="btn btn--box btn--small btn--gray btn--uppercase btn--weight btn--hover-zoom product__upper-btn">加入购物车</a>
                                                       <span class="product__tag product__tag--new">New</span>
                                                       <a href="wishlist.html" class="product__wishlist-icon"><i class="icon-heart"></i></a>
                                                   </div>
                                                   <div class="product__price m-t-10">
                                                       <span class="product__price-reg">¥100</span>
                                                   </div>
                                                   <a href="#" class="product__link product__link--underline product__link--weight-light m-t-15">
                                                       白夜童话女生日礼物摆件装饰轻奢艺术品创意
                                                   </a>
                                               </div>

                                               <div class="product__box product__box--default product__box--border-hover swiper-slide text-center">
                                                   <div class="product__img-box">
                                                       <a href="#" class="product__img--link">
                                                           <img class="product__img" src="../../assets/img/banner/shouban.png" alt="">
                                                       </a>

                                                       <a href="#modalAddCart" data-toggle="modal" class="btn btn--box btn--small btn--gray btn--uppercase btn--weight btn--hover-zoom product__upper-btn">加入购物车</a>
                                                       <span class="product__tag product__tag--new">New</span>
                                                       <a href="wishlist.html" class="product__wishlist-icon"><i class="icon-heart"></i></a>
                                                   </div>
                                                   <div class="product__price m-t-10">
                                                       <span class="product__price-reg">¥100</span>
                                                   </div>
                                                   <a href="#" class="product__link product__link--underline product__link--weight-light m-t-15">
                                                       白夜童话女生日礼物摆件装饰轻奢艺术品创意
                                                   </a>
                                               </div>

                                               <div class="product__box product__box--default product__box--border-hover swiper-slide text-center">
                                                   <div class="product__img-box">
                                                       <a href="#" class="product__img--link">
                                                           <img class="product__img" src="../../assets/img/banner/shouban.png" alt="">
                                                       </a>

                                                       <a href="#modalAddCart" data-toggle="modal" class="btn btn--box btn--small btn--gray btn--uppercase btn--weight btn--hover-zoom product__upper-btn">加入购物车</a>
                                                       <span class="product__tag product__tag--new">New</span>
                                                       <a href="wishlist.html" class="product__wishlist-icon"><i class="icon-heart"></i></a>
                                                   </div>
                                                   <div class="product__price m-t-10">
                                                       <span class="product__price-reg">¥100</span>
                                                   </div>
                                                   <a href="#" class="product__link product__link--underline product__link--weight-light m-t-15">
                                                       白夜童话女生日礼物摆件装饰轻奢艺术品创意
                                                   </a>
                                               </div>

                                               <div class="product__box product__box--default product__box--border-hover swiper-slide text-center">
                                                   <div class="product__img-box">
                                                       <a href="#" class="product__img--link">
                                                           <img class="product__img" src="../../assets/img/banner/shouban.png" alt="">
                                                       </a>

                                                       <a href="#modalAddCart" data-toggle="modal" class="btn btn--box btn--small btn--gray btn--uppercase btn--weight btn--hover-zoom product__upper-btn">加入购物车</a>
                                                       <span class="product__tag product__tag--new">New</span>
                                                       <a href="wishlist.html" class="product__wishlist-icon"><i class="icon-heart"></i></a>
                                                   </div>
                                                   <div class="product__price m-t-10">
                                                       <span class="product__price-reg">¥100</span>
                                                   </div>
                                                   <a href="#" class="product__link product__link--underline product__link--weight-light m-t-15">
                                                       白夜童话女生日礼物摆件装饰轻奢艺术品创意
                                                   </a>
                                               </div>

                                               <div class="product__box product__box--default product__box--border-hover swiper-slide text-center">
                                                   <div class="product__img-box">
                                                       <a href="#" class="product__img--link">
                                                           <img class="product__img" src="../../assets/img/banner/shouban.png" alt="">
                                                       </a>

                                                       <a href="#modalAddCart" data-toggle="modal" class="btn btn--box btn--small btn--gray btn--uppercase btn--weight btn--hover-zoom product__upper-btn">加入购物车</a>
                                                       <span class="product__tag product__tag--new">New</span>
                                                       <a href="wishlist.html" class="product__wishlist-icon"><i class="icon-heart"></i></a>
                                                   </div>
                                                   <div class="product__price m-t-10">
                                                       <span class="product__price-reg">¥100</span>
                                                   </div>
                                                   <a href="#" class="product__link product__link--underline product__link--weight-light m-t-15">
                                                       白夜童话女生日礼物摆件装饰轻奢艺术品创意
                                                   </a>
                                               </div>
                                           </div>
                                           <div class="swiper-buttons">
                                               <!-- 左右滚动 -->
                                               <div class="swiper-button-next default__nav default__nav--next"><i class="fal fa-chevron-right"></i></div>
                                               <div class="swiper-button-prev default__nav default__nav--prev"><i class="fal fa-chevron-left"></i></div>
                                           </div>
                                       </div>

                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </main>

       <!--
           作者：1016226614@qq.com
           时间：2020-11-30
           描述：第八部分 模态框
       -->
       <!-- 购物车模态框-->
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
                                               <img class="img-fluid" src="../../assets/img/banner/shouban.png" alt="">
                                           </div>
                                       </div>
                                       <div class="col-md-6">
                                           <span class="modal__product-title">夜行独角兽</span>
                                           <span class="modal__product-price m-tb-15">¥100.00</span>
                                           <ul class="modal__product-info ">
                                               <li>尺寸:<span>20 cm</span></li>
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


       <!-- 评论模态框 -->
       <div class="modal fade" id="modalReview" tabindex="-1" role="dialog" aria-hidden="true">
           <div class="modal-dialog  modal-dialog-centered modal-sm" role="document">
               <div class="modal-content">
                   <div class="modal-header">
                       <h5 class="modal-title text-center">说说你的看法</h5>
                       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                       </button>
                   </div>
                   <div class="modal-body">
                       <div class="container-fluid">
                           <div class="row">
                               <div class="col-md-6">
                                   <div class="modal-review-img">
                                       <img class="img-fluid  border-around" src="../../assets/img/banner/shouban.png" alt="">
                                   </div>
                                   <span class="modal__product-title m-t-25">白夜童话  夜行独角兽</span>
                                   <div class="product__desc m-t-15">
                                       <p>那些夜晚亮如白昼甜蜜而忧伤梦里的女孩徐徐讲述每个人的童话...</p>
                                   </div>
                               </div>
                               <div class="col-md-6">
                                   <h6>我的评价</h6>
                                   <div class="review-box">
                                       <span>星级</span>
                                       <ul class="product__review">
                                           <li class="product__review--fill"><i class="icon-star"></i></li>
                                           <li class="product__review--fill"><i class="icon-star"></i></li>
                                           <li class="product__review--fill"><i class="icon-star"></i></li>
                                           <li class="product__review--fill"><i class="icon-star"></i></li>
                                           <li class="product__review--blank"><i class="icon-star"></i></li>
                                       </ul>
                                   </div>
                                   <form action="#" method="post" class="form-box">
                                       <div class="form-box__single-group">
                                           <label for="form-message">标题</label>
                                           <input type="text" id="form-message">
                                       </div>
                                       <div class="form-box__single-group">
                                           <label for="form-review">描述*</label>
                                           <textarea id="form-review" rows="15"></textarea>
                                       </div>

                                       <div class="from-box__buttons d-flex justify-content-between d-flex-warp m-t-25 align-items-center">
                                           <div class="from-box__left">
                                               <button class="btn btn--box btn--small btn--blue btn--uppercase btn--weight" type="button">发表</button>
                                           </div>
                                           <div class="form-box-right">
                                               <button class="btn btn--box btn--small btn--blue btn--uppercase btn--weight" type="button" data-dismiss="modal" aria-label="Close">下次再说</button>
                                           </div>
                                       </div>
                                   </form>
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
        name: "detail"
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