var imageUtil = require('../../utils/util.js');
// pages/main/main.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mode: "scaleToFill",
    arr: [
      '../../resources/banner/banner1.jpg',
      '../../resources/banner/banner2.jpg',
      '../../resources/banner/banner3.jpg',
      '../../resources/banner/banner4.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 100,
    navbar: ['今日精选', '女装', '百货','美食','美妆','鞋包','男装','内衣','母婴','手机周边','配饰','其他'],
    currentTab: 0,
    wxb:'../../resources/icon/wxb.png',
    ticket_money_fill:'../../resources/icon/ticket_money_fill.png',
    ju:'../../resources/icon/ju.png',
    video_fill:'../../resources/icon/video_fill.png',
    goods_hot_fill:'../../resources/icon/goods_hot_fill.png',
    deliver_fill:'../../resources/icon/deliver_fill.png',
    qg:'../../resources/icon/qg.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*设置滚动条的高度*/
    this.setData({
      winHeight: app.globalData.winHeight - wx.getSystemInfoSync().screenWidth / 750 * (155)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  /**
   * navbarTap切换
   */
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  /**
   * 跳转页面
   */
  toPage:function(e){
    console.log(e.currentTarget.dataset.text)
    wx.navigateTo({
      url: '../' + e.currentTarget.dataset.text + '/' + e.currentTarget.dataset.text,
    })
  }

})



// var imageUtil = require('../../utils/util.js');
// //index.js
// //获取应用实例
// const app = getApp()
// Page({
//   data: {
//     imagewidth: 0,//缩放后的宽
//     imageheight: 0,//缩放后的高
//     mode: 'scaleToFill',
//     src: '../../resources/kp.jpg'
//   },
//   //事件处理函数
//   bindViewTap: function () {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     var that = this;
//     var time = 5;
//     var interval;
//     that.setData({
//       time: time
//     })
//     setTimeout(function () {
//       wx.redirectTo({
//         url: '../main/main',
//       })
//     }, 5000)

//     interval = setInterval(function () {
//       console.log(time--)
//       that.setData({
//         time: time
//       })
//       if (time == 0) {
//         clearInterval(interval)
//       }
//     }, 1000)
//   },
//   imageLoad: function (e) {
//     var imageSize = imageUtil.imageUtil(e)
//     this.setData({
//       imagewidth: imageSize.imageWidth,
//       imageheight: imageSize.imageHeight
//     })
//   }, tg: function () {
//     wx.redirectTo({
//       url: '../main/main',
//     })
//   }
// })
