// var baseUrl = 'http://yipinbao.vmall99.com/api/';//测试域名
var baseUrl = 'http://app.1258998998.com/api/';//正式域名


//article 各种协议
var articleArticle_list = baseUrl + 'article/article_list';//首页公告列表
var articleHomeNotice = baseUrl + 'article/homeNotice';//首页消息列表
var articleXszy = baseUrl + 'article/xszy';//必备工具


//Qudao
var QudaoIndex = baseUrl + 'Qudao/index';//授权备案链接



//home
var homeCompanyMess = baseUrl + 'home/companyMess';//联系客服
var homeTreaty = baseUrl + 'home/treaty';//各种协议接口各种协议接口



//taoke 淘客
var taokeGet_lb_img = baseUrl + 'taoke/get_lb_img';//首页轮播图
var taokeGet_taoke_goods_cate = baseUrl + 'taoke/get_taoke_goods_cate';//首页分类导航
var taokeHomeImg = baseUrl + 'taoke/homeImg';//首页其他图片
var taokeBuyLimitTimes = baseUrl + 'taoke/buyLimitTimes';//限时抢购时间列表返回
var taokeBuyLimitGoods = baseUrl + 'taoke/buyLimitGoods';//限时抢购商品列表
var taokeGet_goods_list = baseUrl + 'taoke/get_goods_list';//淘客商品列表
var taokeTecommand_goods_list = baseUrl + 'taoke/recommand_goods_list';//首页为您推荐1
var taokeVideo = baseUrl + 'taoke/video';//首页2视频列表
var taokeAppFirstPageMaxSales = baseUrl + 'taoke/appFirstPageMaxSales';//首页2爆款专区
var taokeAppFistPageJHS = baseUrl + 'taoke/appFistPageJHS';//首页2为你推荐
var taokeGet_search_history_list = baseUrl + 'taoke/get_search_history_list';//获取搜索词
var taokeDel_search_history = baseUrl + 'taoke/del_search_history';//删除搜索历史记录
var taokeSearch = baseUrl + 'taoke/search';//搜索商品列表
var taokeGet_goods_detail = baseUrl + 'taoke/get_goods_detail';//淘客商品详情
var taokeGet_tao_info_images = baseUrl + 'taoke/get_goods_info_images';//淘客商品详情图片
var taokeGuess_your_love_goods_list = baseUrl + 'taoke/guess_your_love_goods_list';//淘客商品详情猜你喜欢
var taokeGet_dp_goods_listl = baseUrl + 'taoke/get_dp_goods_list';//获取店铺商品列表
var taokeGet_coupon_url = baseUrl + 'taoke/get_coupon_url';//获取优惠券链接
var taokeGet_share_info = baseUrl + 'taoke/get_share_info';//获取淘客商品分享详情
var TaokeGet_find_order_rule = baseUrl + 'Taoke/get_find_order_rule';//找回订单规则
var TaokeFind_order = baseUrl + 'Taoke/find_order';//找回订单


// shop
var shopZyGoodsList = baseUrl + 'shop/zyGoodsList';//首页自营商品
var shopJoinList = baseUrl + 'shop/joinList';//加入店掌柜商品
var shopBanner = baseUrl + 'shop/banner';//多商家幻灯
var shopTopShop = baseUrl + 'shop/topShop';//多商家首页店铺
var shopShopGoodsList = baseUrl + 'shop/shopGoodsList';//多商家首页商家和商品列表返回
var shopGetShopInfo = baseUrl + 'shop/getShopInfo';//多商家首页商家店铺详情
var shopShopList = baseUrl + 'shop/shopList';//多商家列表
var shopGoodsDetail = baseUrl + 'shop/goodsDetail';// 商品详情
var shopCollect = baseUrl + 'shop/collect';// 商品收藏, 取消收藏
var shopAddOnlineInfo = baseUrl + 'shop/addOnlineInfo';// 加入店掌柜
var shopAddO2oInfo = baseUrl + 'shop/addO2oInfo';//  加入推广商户
var shopAddDailiInfo = baseUrl + 'shop/addDailiInfo';// 加入地区服务商
var shopCheckOnlineInfo = baseUrl + 'shop/checkOnlineInfo';// 店掌柜申请详情
var shopCheckO2oInfo = baseUrl + 'shop/checkO2oInfo';// 推广商户申请详情
var shopCheckDailiInfo = baseUrl + 'shop/checkDailiInfo';// 地区服务商申请详情
var shopShopCenter = baseUrl + 'shop/shopCenter';// 报表信息 1 店掌柜 2 推广商户 3 地区服务商
var shopSwitchBal = baseUrl + 'shop/switchBal';// 商家货款转入余额记录  1 店掌柜 2 推广商户
var shopPartnerInfo = baseUrl + 'shop/partnerInfo';// 平台合作中心
var shopExchangeBalance = baseUrl + 'shop/exchangeBalance';//  店掌柜转入钱包
var shopExcBalO2o = baseUrl + 'shop/excBalO2o';//  o2o/地区服务商转入钱包
var shopGoldExcBal = baseUrl + 'shop/goldExcBal';//  水滴转入余额
var shopAreaOrder = baseUrl + 'shop/areaOrder';// 地区服务商区域订单
var shopFansOrder = baseUrl + 'shop/fansOrder';//  粉丝订单
var shopPartnerFans = baseUrl + 'shop/partnerFans';// 自营粉丝





// User
var UserQrcodeInfo = baseUrl + 'User/qrcodeInfo';//分享邀请信息
var userCollect_list = baseUrl + 'user/collect_list';//收藏商品列表
var userDelete_collect = baseUrl + 'user/delete_collect';// 删除收藏列表
var UserInfo = baseUrl + 'User/info';// 用户信息
var UserLevelText = baseUrl + 'User/levelText';// 用户信息 星级会员
var UserHeadimg = baseUrl + 'User/headimg';// 修改头像
var UserSend = baseUrl + 'User/send';// 修改昵称
var UserUpdateAlipay = baseUrl + 'User/updateAlipay';// 绑定支付宝
var UserGetBankList = baseUrl + 'User/getBankList';// 返回银行列表和绑定信息
var UserAddBank = baseUrl + 'User/addBank';// 绑定和编辑银行卡
var UserSendMsg = baseUrl + 'User/sendMsg';// 发送短信验证码
var UserForgetPwd = baseUrl + 'User/forgetPwd';// 设置二级密码
var UserWithdraw = baseUrl + 'User/withdraw';// 提现
var UserBalaWithList = baseUrl + 'User/balaWithList';// 提现记录
var UserBalList = baseUrl + 'User/balList';// 账单余额明细
var UserGiveGoldInfo = baseUrl + 'User/giveGoldInfo';// 水滴转赠页面信息
var UserIntList = baseUrl + 'User/intList';// 水滴转赠页面信息
var UserGiveGold = baseUrl + 'User/giveGold';// 水滴转赠
var UserMyEarn = baseUrl + 'User/myEarn';// 淘客收益
var UserMyFans = baseUrl + 'User/myFans';// 淘客粉丝
var UserGetUserNum = baseUrl + 'User/getUserNum';// 注册获取会员推荐信息
var UserRegister = baseUrl + 'User/register';// 微信注册登录
var UserLogin = baseUrl + 'User/login';// 登录（验证是否绑定过推荐人）
var UserGetDefaultNumber = baseUrl + 'User/getDefaultNumber';// 注册获取默认邀请码
var UserAddJpushId = baseUrl + 'User/addJpushId';// 用户绑定jpush
var UserJpushList = baseUrl + 'User/jpushList';// jpush消息列表
var userGetTeamCount = baseUrl + 'user/getTeamCount';// 获取团队数






// Cart
var CartAddCart = baseUrl + 'Cart/addCart';//加入购物车
var CartCartList = baseUrl + 'Cart/cartList';// 购物车列表
var CartCartDelete = baseUrl + 'Cart/cartDelete';// 删除购物车



// order
var orderCheck = baseUrl + 'order/check';//下单前数据检测
var orderCreateOrder = baseUrl + 'order/create';//创建订单
var orderZyorderList = baseUrl + 'order/zyorderList';//自营/线上订单列表
var orderCancelOrder = baseUrl + 'order/cancelOrder';// 取消订单
var orderConfirm = baseUrl + 'order/confirm';// 确认收货
var orderGetExpressInfo = baseUrl + 'order/getExpressInfo';// 查看物流
var orderCancelReason = baseUrl + 'order/cancelReason';// 退款取消原因
var orderRefundOrder = baseUrl + 'order/refundOrder';// 申请退款
var orderOrderDetail = baseUrl + 'order/orderDetail';// 订单详情
var orderGet_taoke_order_list = baseUrl + 'order/get_taoke_order_list';// 淘客订单列表




// Postaddr
var PostaddrList_address = baseUrl + 'Postaddr/list_address';//收货地址列表
var PostaddrAdd_address = baseUrl + 'Postaddr/add_address';//添加、修改收货地址
var PostaddrDel_address = baseUrl + 'Postaddr/del_address';//删除收货地址



// o2o
var o2oJoinInfo = baseUrl + 'o2o/joinInfo';//加盟会员页面信息
var o2oBanner = baseUrl + 'o2o/banner';//o2o小店幻灯
var o2oGetO2oList = baseUrl + 'o2o/getO2oList';//o2o附近商家列表
var o2oGetChildArea = baseUrl + 'o2o/getChildArea';//o2o返回子区域
var o2oO2oInfo = baseUrl + 'o2o/o2oInfo';//o2o附近商家详情
var o2oOrderList = baseUrl + 'o2o/orderList';//o2o订单列表
var o2oShopsCode = baseUrl + 'o2o/shopsCode';//店铺二维码
var o2oReceive = baseUrl + 'o2o/receive';//店铺收款（创建订单）
var o2oReceiveList = baseUrl + 'o2o/receiveList';//店铺收款记录





// zy
var zyBanner = baseUrl + 'zy/banner';//自营幻灯
var zyGoodsCate = baseUrl + 'zy/goodsCate';//自营商品分类
var zyHotList = baseUrl + 'zy/hotList';//热销榜单
var zyZyGoodsList = baseUrl + 'zy/zyGoodsList';//自营商品



// Sharevideo
var SharevideoGet_banner_list = baseUrl + 'Sharevideo/get_banner_list';//幻灯和全网vip
var SharevideoVideoList = baseUrl + 'Sharevideo/videoList';//电影列表
var SharevideoGetLine = baseUrl + 'Sharevideo/getLine';//获取线路
var SharevideoGetVideo = baseUrl + 'Sharevideo/getVideo';//获取视频连接





// school
var schoolGet_banner_list = baseUrl + 'school/get_banner_list';//首页商学院文章列表
var schoolGet_article_info_by_id = baseUrl + 'school/get_article_info_by_id';//首页商学院文章列详情


// Pay
var PayGet_pay_sign_str = baseUrl + 'Pay/get_pay_sign_str';//获取支付签名 （paySite payType payId）
var PayGoldNotify = baseUrl + 'Pay/goldNotify';//水滴支付 （paySite payId）

