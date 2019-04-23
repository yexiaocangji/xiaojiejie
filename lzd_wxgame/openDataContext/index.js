require('./weapp-adapter.js');
require('./manifest.js');
require('./egret.wxgame.js');
egret.wxgame.isSubContext = true;
egret.runEgret({
  //以下为自动修改，请勿修改
  //The following is automatically modified, please do not modify
  //----auto option start----
		entryClassName: "Main",
		orientation: "auto",
		frameRate: 60,
		scaleMode: "fixedWidth",
		contentWidth: 640,
		contentHeight: 1136,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		maxTouches: 2,
		//----auto option end----
  renderMode: 'canvas',
  audioType: 0,
  calculateCanvasScaleFactor: function (context) {
    var backingStore = context.backingStorePixelRatio ||
      context.webkitBackingStorePixelRatio ||
      context.mozBackingStorePixelRatio ||
      context.msBackingStorePixelRatio ||
      context.oBackingStorePixelRatio ||
      context.backingStorePixelRatio || 1;
    return (window.devicePixelRatio || 1) / backingStore;
  }
});

// require("egret.min.js")


// wx.onMessage(data => {
//   //初始化list
//   var gameData = [];
//   var item = { openid: '', avatarUrl: '', nickname: '虚位以待', KVDataList: [{ key: "pass", value: '0' }] };
//   for (var i = 0; i < 20; i++) {
//     gameData.push(item)
//   }
//   //请求自己的数据
//   wx.getUserInfo({
//     openIdList: ['selfOpenId'], lang: 'zh_CN', success: (userInfo) => {
//       var selfUserInfo = userInfo.data && userInfo.data.length == 1 ? userInfo.data[0] : null;
//       //根据排行类型获取数据
//       if (data.rankType == 1) {
//         wx.getFriendCloudStorage({
//           keyList: ['pass'],
//           success: res => {
//             if (res.data) {
//               var rankData = res.data;
//               //排序
//               rankData.sort((a, b) => {
//                 if (parseInt(a.KVDataList[0].value) == parseInt(b.KVDataList[0].value))
//                   return 0;
//                 else
//                   return (parseInt(a.KVDataList[0].value) > parseInt(b.KVDataList[0].value) ? -1 : 1)
//               });
//               //柠出自己
//               gameData.forEach((value, index) => {
//                 if (rankData && index < rankData.length) {
//                   gameData[index] = rankData[index];
//                 }
//               });
//               rankData.forEach((value,index)=>{
//                 if (value.avatarUrl == selfUserInfo.avatarUrl) {
//                   var value1 = value;
//                   value1['rank'] = index + 1;
//                   gameData.push(value1);
//                 }
//               })
//               console.log(gameData);
//               // wx.request({
//               //   url: 'https://www.chiji-h5.com/ddhz/pdk_res/resourcev3/default.res.json',
//               // })
//               //发送到服务器
//               // var socket = wx.connectSocket({
//               //   url: 'www.chiji-h5.com/pdk/wss/:9505',
//               // })
//               // console.log(socket);
//               // socket.send({});
//               // socket.close();
              
//             }
//           },
//           fail: err => {
//             console.log(err);
//           },
//           complete: () => {

//           }
//         });
//       } else if (data.rankType == 2) {
//         //群
//         wx.getGroupCloudStorage({
//           shareTicket: data.shareTicket,
//           keyList: ['pass'],
//           success: res => {
//             var rankData = res.data;
//             //排序
//             rankData.sort((a, b) => {
//               if (parseInt(a.KVDataList[0].value) == parseInt(b.KVDataList[0].value))
//                 return 0;
//               else
//                 return (parseInt(a.KVDataList[0].value) > parseInt(b.KVDataList[0].value) ? -1 : 1)
//             });
//             console.log(rankData);
//             //柠出自己

//             gameData.forEach((value, index) => {
//               if (rankData && index < rankData.length) {
//                 gameData[index] = rankData[index];
//               }
//             });
//             console.log(gameData);
//           },
//           fail: err => {
//             console.log(err);
//           },
//           complete: () => {

//           }
//         });
//       }
//     }, fail: () => { console.log('获取个人信息错误'); }, complete: () => { }
//   });
  
  
// });

