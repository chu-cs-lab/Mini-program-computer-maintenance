// pages/engineer/waiting/waiting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order:[
      {
        id:1,
        name:"丁真",
        description:"帮我的悦刻五代充电",
        type:"需要芝士",
        address:"粘合国",
        order_sn:"114514",
        addtime:"2023-12-12 12:12:12",
      },
      {
        id:2,
        name:"蔡徐坤",
        description:"帮我的篮球充气",
        type:"日常",
        address:"练习生训练营",
        order_sn:"252525252525",
        addtime:"2023-02-14 02:30:00",
      },
      {
        id:2,
        name:"曹梦轩",
        description:"帮我的树莓派接线",
        type:"学习",
        address:"101",
        order_sn:"15646513548",
        addtime:"2023-02-14 02:30:00",
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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

  },
  onMine(){
    wx.navigateTo({
      url: '/pages/engineer/mine/engineer',
    })
  },
  onOrder(e){
    wx.navigateTo({
      url: '/pages/engineer/waiting/waiting',
    })
  },
  onBack(){
    wx.navigateBack();
  }
})