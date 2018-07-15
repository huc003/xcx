// pages/countdown/countdown.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mode: "scaleToFill",
    navbar: ['08:00', '10:00', '13:00', '15:00', '16:00', '17:00', '18:00', '19:00'],
    currentTab: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*设置滚动条的高度*/
    this.setData({
      winHeight: app.globalData.winHeight - wx.getSystemInfoSync().screenWidth / 750 * (155)
    })
    wx.setNavigationBarTitle({
      title: '咚咚抢，限时疯抢',
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
  }
})