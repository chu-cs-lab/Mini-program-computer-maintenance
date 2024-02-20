// pages/engineer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading:true,
    userInfo:{
      nickname:"蔡徐坤",
      level:2.5,
      avatar:"https://tse3-mm.cn.bing.net/th/id/OIP-C.UxgQqdST11tgDjMp1WIEcQHaG-?w=186&h=175&c=7&r=0&o=5&dpr=2&pid=1.7"
    }
  },
  onOrder(e){
    wx.navigateTo({
      url: '/pages/engineer/waiting/waiting',
    })
  },
  toIncome(){
    wx.navigateTo({
      url: '/pages/engineer/income/income',
    });
  },
  toOrder(){
    wx.navigateTo({
      url: '/pages/engineer/order/order',
    });
  },
  // 切换到user
  onUser(){
    wx.switchTab({
      url: '/pages/user/me/me',
    })
  },

  // 联系管理员点击时间
  contract(){
    console.log("等待开发");
  },
  // 退出登录
  logout(){

  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      loading:true
    });
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.setData({
      loading:false
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})