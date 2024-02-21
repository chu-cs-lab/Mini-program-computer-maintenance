Page({
  data: { 
    active: 0,
   
    info:[{
      pName:"电脑清灰",
      serviceName:"电脑清灰",
      address:"慎思楼101",
      goodId:"01",
      budget:100,
      workerName:"张琦琦",
      stuId:21045052,
      realPrice:200,
      createDate:"2022-11-11",
      acceptDate:"2022-11-12",
      finishedDate:"2023-01-01"
    },{
      pName:"电脑清灰1",
      serviceName:"电脑清灰1",
      address:"慎思楼201",
      goodId:"02",
      budget:100,
      workerName:"周郑轩",
      stuId:21045055,
      realPrice:400,
      createDate:"2022-14-12",
      acceptDate:"2022-21-15",
      finishedDate:"2023-02-01"
    },{
      pName:"电脑清灰1",
      serviceName:"电脑清灰1",
      address:"慎思楼201",
      goodId:"02",
      budget:100,
      workerName:"周郑轩",
      stuId:21045055,
      realPrice:400,
      createDate:"2022-14-12",
      acceptDate:"2022-21-15",
      finishedDate:"2023-02-01"
    }]
  },
  bindManageButton(){
    wx.navigateTo({
      url: '../unacceptedInfo/unacceptedInfo',
    })
  },
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
  },
});