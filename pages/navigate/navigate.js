// pages/navigate/navigate.js
var url = require('./../../config')
Page({
  data: {
    goodsId: '',
    newPrice: '',
    oldPrice: '',
    detailImgSrc: []
  },
  onLoad: function (option) {
    var self = this;
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      goodsId: option.id,
      newPrice: option.newPrice,
      oldPrice: option.oldPrice
    });
    wx.request({
      url: url.detail + '?goodsId=' + option.id,
      success: function (res) {
        self.setData({
          detailImgSrc : res.data
        });
      }

    })


  },
  onReady: function () {
    // 页面渲染完成

  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})