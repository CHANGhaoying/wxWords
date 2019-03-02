// pages/allow/allow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  login: function() {
    wx.login({
      success: function(res) {
        console.log(res)
        // wx.request({
        //   url: 'http://120.77.247.125/wechat.word/public/index.php/api/v1/token/user',
        //   data: {
        //     code: res.code
        //   },
         
        //   method: 'post',
        //   dataType: 'json',
        //   responseType: 'text',
        //   success: function(res) {
        //     console.log(res)
        //   },
        //   fail: function (res) { console.log(res)},
        //   complete: function (res) { console.log(res)},
        // })
      }
    })
  },
  checksession: function() {
    wx.checkSession({
      success: function (res) {
        console.log(res, '登录未过期')
        wx.showToast({
          title: '登录未过期啊',
        })
      }
    })
  },

  info: function () {
    var that = this
    wx.getUserInfo({
      success: function (res) {
        console.log(res.userInfo)
        var city = res.userInfo.city
        var country = res.userInfo.country
        var nickName = res.userInfo.nickName
        var province = res.userInfo.province
        that.setData({
          city: city,
          country: country,
          nickName: nickName,
          province: province
        })
      }
    })
  },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(getApp().globalData.userInfo)
    // wx.navigateTo({
    //   url: "../index/index"
    // })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.getUserInfo({
      withCredentials: true,
      lang: '',
      success: function(res) {
        //console.log(res)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // setTimeout(function () {
    //   wx.navigateTo({
    //     url: "../index/index"
    //   })
    // }, 2000);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})