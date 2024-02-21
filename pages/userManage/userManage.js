// pages/userManage/userManage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchview: false,
    value: "",
    searchList: [],
    userdata: [{
      id: "01",
      userName: "A用户",
      userInfo: "A介绍",
      image: "../../image/active-note.png"
    }, {
      id: "02",
      userName: "B用户",
      userInfo: "B介绍",
      image: "../../image/active-user.png"

    }],
    workerdata: [{
      id: "03",
      workerName: "A师傅",
      workerInfo: "A介绍",
      image: "../../image/address-book.png"
    }, {
      id: "04",
      workerName: "B师傅",
      workerInfo: "B介绍",
      image: "../../image/checklist.png"

    }],
    currentData: []
  },
  onSearch(e) {
    console.log("点击事件触发");
    const value = e.detail;

    this.setData({
      value: value
    });
    console.log(this.data.value);
    if (value.trim() === '') {
      this.setData({
        searchview: false,
        searchList: []
      });
      return;
    }
    const searchResult = this.data.currentData.filter(item => {
      if(item.userName) return item.userName.includes(value)
      else return item.workerName.includes(value)
    });
    console.log(searchResult)
    if (searchResult.length > 0) {
      this.setData({
        searchview: true,
        searchList: searchResult
      }, () => {
        this.setData({
          scrollIntoView: 'searchResultView'
        })
      })
    } else {
      this.setData({
        searchview:false,
        searchList: []
      })
    }
  },
  userPage() {
    this.setData({
      currentData: this.data.userdata
    })
  },
  workerPage() {
    this.setData({
      currentData: this.data.workerdata
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      currentData: this.data.userdata
    })
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