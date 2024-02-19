// pages/engineer/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order:[
      {
      username:"蔡徐坤",
      account:"Caixukun",
      type:"电脑清灰",
      price:2.50,
      num:5,
      status:0,
      addtime:"2023-02-31 12:61:00",
      img:[
        "https://tse3-mm.cn.bing.net/th/id/OIP-C.UxgQqdST11tgDjMp1WIEcQHaG-?w=186&h=175&c=7&r=0&o=5&dpr=2&pid=1.7",
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.4_2iHrNWgFcduBqtMjA7MQAAAA?w=218&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
        "https://tse2-mm.cn.bing.net/th/id/OIP-C.EBHwcNfhDomSDdkl0O79kAHaGq?w=212&h=191&c=7&r=0&o=5&dpr=2&pid=1.7"
      ]
      }
    ]
  },
  back(e){
    wx.navigateBack();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 获取数据
    this.data.order.push({
      username:"丁真",
      account:"Caixukun",
      type:"悦刻五代",
      price:114.514,
      num:10,
      status:1,
      addtime:"2023-02-31 12:60:00",
      img:[
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.v4W51KD91rcpuog8EMKw5QAAAA?w=115&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.XBKNUdIfRnK13J_swqxL3wHaIJ?w=166&h=183&c=7&r=0&o=5&dpr=2&pid=1.7",
        "https://tse4-mm.cn.bing.net/th/id/OIP-C.AWCTSUiD9CvSrINFwHvJQgAAAA?w=197&h=194&c=7&r=0&o=5&dpr=2&pid=1.7"
      ]
      });
      let data=this.data.order;
    this.setData({
      order:data
    });
    console.log(this.data.order);
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
    // 获取新的数据

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})