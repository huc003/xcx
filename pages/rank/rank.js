// pages/rank/rank.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mode: "scaleToFill",
    navbar: ['总榜','女装', '美妆', '男装', '母婴', '护肤', '护理', '百货', '内衣', '家居', '女鞋', '男鞋','周边','箱包','家电','健身','配饰'],
    img: [
      '../../resources/icon/rank_2.png',
      '../../resources/icon/nz.png',
      '../../resources/icon/mz.png',
      '../../resources/icon/nanz.png',
      '../../resources/icon/muy.png',
      '../../resources/icon/hf.png',
      '../../resources/icon/nxhl.png', 
      '../../resources/icon/bh.png',
      '../../resources/icon/ny.png',
      '../../resources/icon/jjjf.png',
      '../../resources/icon/nx.png',
      '../../resources/icon/nanx.png',
      '../../resources/icon/zb.png',
      '../../resources/icon/xb.png',
      '../../resources/icon/jd.png',
      '../../resources/icon/ydjs.png',
      '../../resources/icon/zbss.png'],
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
      title: '实时爆款 人气榜单',
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