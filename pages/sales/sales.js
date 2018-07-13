// pages/sales/sales.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mode: "scaleToFill",
    // screenWidth: 0,
    // screenHeight: 0,
    // imgwidth: 0,
    // imgheight: 0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*设置滚动条的高度*/
    var _this = this;
    // wx.getSystemInfo({
    //   success: function (res) {
    //     _this.setData({
    //       screenHeight: res.windowHeight,
    //       screenWidth: res.windowWidth,
    //     });
    //   }
    // });
    _this.setData({
      winHeight: app.globalData.winHeight - wx.getSystemInfoSync().screenWidth / 750 * (155)
    })
    wx.setNavigationBarTitle({
      title:'实时销量榜单'
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
  
  }

})