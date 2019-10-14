Page({
  data: {
    choose_index: 0,
    tabbar: {
      "color": "#999999",
      "selectedColor": "#7788dd",
      "borderStyle": "#dcdcdc",
      "backgroundColor": "#ffffff",
      "list": [{
        "key": "home",
        "iconPath": "/images/tianjia.png",
        "selectedIconPath": "/images/tianjia.png",
        "text": "首页"
      },
      {
        "key": "tag",
        "iconPath": "/images/tianjia.png",
        "selectedIconPath": "/images/tianjia.png",
        "text": "标签"
      },
      {
        // "key": "new",
        "iconPath": "/images/tianjia.png",
        "iconType": "big overflow circle shadow",
        "choose": "disable"
      },
      {
        "key": "notebook",
        "iconPath": "/images/tianjia.png",
        "selectedIconPath": "/images/tianjia.png",
        "text": "日记本"
      },
      {
        "key": "me",
        "iconPath": "/images/tianjia.png",
        "selectedIconPath": "/images/tianjia.png",
        "text": "我"
      }
      ]
    }
  },
  tabChange: function (e) {
    var key = e.detail.key
    if (key == 'new') {
      wx.navigateTo({
        url: '/pages/new/new',
      })
    } else {
      this.setData({
        choose_index: e.detail.index
      })
    }
  }
})