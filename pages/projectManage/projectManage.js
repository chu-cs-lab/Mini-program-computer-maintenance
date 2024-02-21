// pages/userManage/userManage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userdata:[{
      userName:"A用户",
      userInfo:"A介绍",
      image:"../../images/manager/active-note.png"
    },{  userName:"B用户",
    userInfo:"B介绍",
    image:"../../images/manager/active-user.png"

    }],
    workerdata:[{
      workerName:"A师傅",
      workerInfo:"A介绍",
      image:"../../images/manager/address-book.png"
    },{  workerName:"B师傅",
    workerInfo:"B介绍",
    image:"../../images/manager/checklist.png"

    }],
    currentData:[]
  },
  userPage(){
    this.setData({currentData:this.data.userdata})
  },
  workerPage(){
    this.setData({currentData:this.data.workerdata})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({currentData:this.data.userdata})
    console.log(this.data.currentData)
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

  }
})