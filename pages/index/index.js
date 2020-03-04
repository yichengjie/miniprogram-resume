// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: 0 ,
    height: 0,
    name: '张三丰',
    spell: 'Zhang SanFeng',
    job: 'Java工程师',
    exp: '1年工作经验',
    tel: '13312345678',
    sex: '男',
    age: 29,
    email: 'yangdi@163.com',
    address: '北京市朝阳区XX街道126号',
    skill:[
      {name:'Java', percent:85},
      {name:'PHP', percent:40 },
      {name:'HTML/CSS/JavaScript', percent:90},
      {name:'Python', percent:70 },
      {name:'大数据', percent:60 },
    ],
    education:[
      {
        school: '北京航空航天大学',
        major: '计算机科学与技术(本科)',
        year:'2014-2018',
        desc: '本专业培养掌握计算机软件基本理论知识，熟悉软件开发和管理技术/能够在计算机软件领域中从事软件设计/开发和管理的高级人才。'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let width = wx.getSystemInfoSync().windowWidth ;
    let height = wx.getSystemInfoSync().windowHeight ;
    this.setData({
      width:width ,
      height: height 
    }) ;
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