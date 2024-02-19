// components/engineer-header/engineer-header.js
Component({
  lifetimes:{
    attached:function(){
      // 计算安全距离来适配刘海屏
      let info=wx.getSystemInfoSync();
      this.setData({safeHeight:info.statusBarHeight});
      // 对齐原生按钮
      let menuButtonInfo = wx.getMenuButtonBoundingClientRect();
      this.setData({buttonTop:menuButtonInfo.top});
      this.setData({buttonHeight:menuButtonInfo.height});

    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:"标题"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    safeHeight:0,
  },
  /**
   * 组件的方法列表
   */
  methods: {
    back:function(){
      wx.navigateBack();
    }
  },
})