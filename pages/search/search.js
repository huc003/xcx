// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hot_fill:'../../resources/icon/hot_fill.png',
    refresh: '../../resources/icon/refresh.png',
    search: ['耳机', '凉鞋女', '充电宝', '小米6', '苹果x', '连衣裙', '蓝牙耳机', '运动手环', '洗面奶', '防晒喷雾', '洗发水'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '超级搜索',
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
   * 大家搜索关键字
   */
  searchTap: function (e) {
    console.log(e.target.dataset.text)
  }
})