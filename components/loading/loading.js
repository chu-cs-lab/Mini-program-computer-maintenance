// components/loading-animation/loading.js
Component({
  /**
   * 监听visiable属性以控制组件隐藏展示
   */
  observers:{
    "visiable":function(visiable){
      if(visiable){
        this.load();
      }else{
        this.end();
      }
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    visiable:Boolean,
    text:{
      type:String,
      value:"加载中"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    className:"show",
    animationClass:"animation",
    boxClass:""
  },

  /**
   * 组件的方法列表
   */
  methods: {
     load(){
       this.setData({
         className:"show",
         animationClass:"animation"
       })
     },
     end(){
      this.setData({
        className:"hidden",
        animationClass:"no-animation"
      })
     }
  }
})