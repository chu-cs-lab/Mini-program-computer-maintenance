// custom-tabbar.js
Component({
  properties:{
    active:1,
  },
  lifetimes:{
    attached:function(){
      let tabs=this.data.tabs.map((item,i)=>{
        item.selected = (i == this.properties.active);
        return item;
      })
      console.log(tabs);
      this.setData({
        tabs:tabs
      })
    }
  },
  data: {
    tabs: [
      {
        text: '首页',
        iconPath: '/images/engineer/index.png',
        selectedIconPath: '/images/engineer/index.png',
        selected: false,
        pagePath:"/pages/index/index"
      },
      {
        text:"待接订单",
        iconPath: '/images/engineer/ordering.png',
        selectedIconPath: '/images/engineer/waiting_selected.png',
        selected: false,
        pagePath:"/pages/engineer/waiting/waiting"
      },
      {
      text:"工程师中心",
      iconPath: '/images/engineer/mine.png',
      selectedIconPath: '/images/engineer/mine_selected.png',
      selected: false,
      pagePath:"/pages/engineer/mine/engineer"
    }
    ]
  },
  methods: {
    switchTab(e) {
      const index = e.currentTarget.dataset.index;
      // const tabs = this.data.tabs.map((item, i) => {
      //   item.selected = i === index;
      //   return item;
      // });
      // this.setData({ tabs });
      wx.navigateTo({
        url: this.data.tabs[index].pagePath
      })
      wx.switchTab({
        url: '/pages/index/index',
      })
    }
  }
});
