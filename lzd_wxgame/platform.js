/**
 * 请在白鹭引擎的Main.ts中调用 platform.login() 方法调用至此处。
 */

class WxgamePlatform {

  name = 'wxgame'

  sdkVersion = null;

  setDebug(bool) {
    wx.setEnableDebug({
      enableDebug: bool
    })
  }
  getSystemInfoSync() {
    const res = wx.getSystemInfoSync()
    return res;
  }
  login() {
    return new Promise((resolve, reject) => {
      wx.login({
        success: (res) => {
          resolve(res)
        }
      })
    })
  }
  getSDKVersion() {
    if (this.sdkVersion == null) {
      let sysInfo = wx.getSystemInfoSync();
      let sdkVersion = sysInfo.SDKVersion;
      sdkVersion = sdkVersion.replace(/\./g, "");
      sdkVersion = sdkVersion.substr(0, 3);
      let sdkVersionNum = parseInt(sdkVersion);
      this.sdkVersion = sdkVersionNum;
      console.log("wxSDK:" + sdkVersionNum);
    }
    return this.sdkVersion;
  }
  getUserInfo(scoped) {
    return new Promise((resolve, reject) => {
      if (this.getSDKVersion() >= 201) {// && !scoped
        var canvasWidth = parseInt(canvas.style.width);
        var canvasHeight = parseInt(canvas.style.height);
        // var btnW = 309 * 0.6;
        // var btnH = 171 * 0.6;
        // left: (canvasWidth - btnW) * 0.5,
        //   top: canvasHeight * 0.4,
        //resource/login/login1.png
        //image: "resource/login/login1.png",
        var button = wx.createUserInfoButton({
          type: 'image',
          text: '微信授权',
          lang: 'zh_CN',
          image: "",
          style: {
            left: 0,
            top: 0,
            width: canvasWidth,
            height: canvasHeight,
            lineHeight: 40,
            backgroundColor: '#000000',
            borderColor: '#ffffff',
            borderWidth: 0,
            borderRadius: 0,
            textAlign: 'center',
            fontSize: 16
          }
        });
        button.onTap((res) => {
          button.destroy();
          resolve(res);
        });
      } else {
        this.showModal('温馨提示', '请升级微信到最新版本!', "确定", false, res => {
          this.exitMiniProgram(null, null);
        });
      }
      // wx.getUserInfo({
      //   withCredentials: true,
      //   success: res => {
      //     resolve(res);
      //   },
      //   fail: res => {
      //     console.log("获取用户信息失败！");
      //     // wx.showModal({
      //     //   title: '友情提醒',
      //     //   content: '请允许微信获得授权!',
      //     //   confirmText: "授权",
      //     //   showCancel: false,
      //     //   success: res => {
      //     //     resolve(null);
      //     //   }
      //     // });
      //     this.openSetting();
      //   }
      // });



    });
  }
  showModal(title, content, confirmText, showCancel, success) {
    wx.showModal({
      title: title,
      content: content,
      confirmText: confirmText,
      showCancel: showCancel,
      success: success
    });
  }
  authorize(scope) {
    return new Promise((resolve, reject) => {
      console.log('authorize:' + scope);
      wx.authorize({
        scope: scope,
        success: res => {
          console.log(res)
          resolve(res);
        }
        , complete: e => {
          console.log(e)
          resolve(e);
        }
      })
    });
  }
  getSetting() {
    return new Promise((resolve, reject) => {
      wx.getSetting({
        success: (res) => {
          resolve(res);
        }
      });
    })
  }
  openSetting() {
    return new Promise((resole, reject) => {
      if (this.getSDKVersion() >= 207) {
        var canvasWidth = parseInt(canvas.style.width);
        var canvasHeight = parseInt(canvas.style.height);
        var button = wx.createOpenSettingButton({
          type: 'image',
          text: '用户授权界面',
          image: "",
          style: {
            left: 0,
            top: 0,
            width: canvasWidth,
            height: canvasHeight,
            lineHeight: 40,
            backgroundColor: '#ff0000',
            borderColor: '#ffffff',
            borderWidth: 0,
            borderRadius: 0,
            textAlign: 'center',
            fontSize: 16
          }
        });
        button.onTap(() => {
          button.destroy();
          console.log("用户授权情况");
          this.showModal('温馨提示', '未授权，游戏数据将会丢失', "确定", false, () => {
            // resole("complete");
          });
        });
      }
    })
  }
  feedbackButton = null;
  createFeedbackButton() {
    if (this.feedbackButton) {
      this.feedbackButton.show();
    } else {
      var canvasHeight = parseInt(canvas.style.height);
      let button = wx.createFeedbackButton({
        type: 'image',
        text: '打开意见反馈页面',
        image: "resource/assets/wx/xjj_dl2.png",
        style: {
          left: 0,
          top: canvasHeight * 0.22,
          width: 83 * 0.6,
          height: 86 * 0.6,
          lineHeight: 40,
          backgroundColor: '#ff0000',
          color: '#ffffff',
          textAlign: 'center',
          fontSize: 16,
          borderRadius: 4
        }
      })
      this.feedbackButton = button;
    }
  }
  hideFeedbackButton() {
    if (this.feedbackButton) {
      this.feedbackButton.hide();
    }
  }
  getLocation() {
    return new Promise((resole, reject) => {
      wx.getLocation({
        type: "gcj02",
        success: function (res) {
          resole(res);
        }
      })
    })
  }
  openLocation(location) {
    wx.openLocation(location)
  }
  um = null;
  //版本更新
  checkForUpdate() {
    if (!this.um) this.um = wx.getUpdateManager();
    if (this.um) {
      this.um.onCheckForUpdate((res) => {
        console.log("CHECKUPATE:" + JSON.stringify(res));
        if (res.hasUpdate) {
          this.setUpdateCallBack(() => {
            console.log('下载更新包成功')
            this.applyUpdate();
          }, () => {
            console.log('下载更新包失败')
          })
        }
      });
    }

  }
  setUpdateCallBack(ready, fail) {
    if (!this.um) this.um = wx.getUpdateManager();
    if (this.um && ready) this.um.onUpdateReady(ready);
    if (this.um && fail) this.um.onUpdateFailed(fail);
  }
  applyUpdate() {
    if (!this.um) this.um = wx.getUpdateManager();
    if (this.um) this.um.applyUpdate();
  }
  //生命周期相关
  getLaunchOptionsSync() {
    return wx.getLaunchOptionsSync();
  }
  exitMiniProgram(successCallBack, failCallBack) {
    wx.exitMiniProgram({ success: successCallBack, fail: failCallBack })
  }
  onHide(callback) {
    wx.onHide(() => {
      callback();
    });
  }
  onShow(callback) {

    wx.onShow((res) => {
      callback(res)
    });
  }
  offHide(callback) {
    wx.offHide(callback);
  }
  offShow(callback) {
    wx.offShow(callback);
  }
  toTempFilePathSync(obj) {
    if (obj == null) {
      obj = {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height,
        destWidth: canvas.width,
        destHeight: canvas.height
      };
    }
    var tempFilePath = canvas.toTempFilePathSync(obj);
    return tempFilePath;
  }
  saveImageToPhotosAlbum(filePath) {
    wx.saveImageToPhotosAlbum({
      filePath: filePath,
      success: (res) => { console.log('保存图片成功'); }
    });
  }
  //share
  isShare = false;
  onShareAppMessage(shareOption) {
    wx.onShareAppMessage(() => { return shareOption; });
  }
  offShareAppMessage(callback) {
    wx.offShareAppMessage(callback);
  }
  shareAppMessage(title, imageUrl, query, successCallBack, failCallBack) {
    this.isShare = true;
    wx.shareAppMessage({
      title: title,
      imageUrl: imageUrl,
      query: query
      , success: (res) => {
        this.isShare = false;
        // var shareTickets = res.shareTickets;
        // if (shareTickets) {
        //   wx.getShareInfo({
        //     shareTicket: shareTickets[0],
        //     success: (data) => {
        //       data['shareTicket'] = shareTickets[0];
        //       successCallBack(data);
        //     }
        //   })
        // } else {
        // }
        // successCallBack(res);
        if (successCallBack) successCallBack(res);
      },
      fail: failCallBack
      , cancel: (e) => {
        ShareConstant.shareCancel = true;
      }
    });
  }
  getShareInfo(object) {
    wx.getShareInfo(object);
  }

  updateShareMenu(withShareTicket, sucCallBack) {
    wx.showShareMenu({
      withShareTicket: withShareTicket,
      success: (res) => {
        console.log('withShareTicket');
        // wx.hideShareMenu({})
      }
    })
  }
  //storage
  getStorageSync(key) {
    var data = wx.getStorageSync(key);

    try {
      JSON.parse(data);
    } catch (e) {
      return data;
    }
    return JSON.parse(data);
  }
  setStorageSync(key, data) {
    wx.setStorageSync(key, data);

    if (typeof data == 'object') {
      wx.setStorageSync(key, JSON.stringify(data));
    } else {
      wx.setStorageSync(key, data);
    }
  }
  removeStorageSync(key) {
    wx.removeStorageSync(key);
  }
  //audio system 
  audioPool = {};
  audioVolume = 1;
  bgAudioUrl = null;
  bgAudio = null;
  playAudio(url, loop, isBgm = false) {
    if (!url) return;
    var audio = this.audioPool[url] ? this.audioPool[url] : null;
    if (!audio) {
      audio = wx.createInnerAudioContext();
      audio.src = url;
    }
    if (!audio) return;
    audio.volume = this.audioVolume;
    audio.loop = loop;
    audio.play();
    if (isBgm) this.bgAudioUrl = url;
    this.audioPool[url] = audio;
  }
  stopAudio(url) {
    var audio = this.audioPool[url];
    if (!audio) return;
    if (this.bgAudioUrl == url) this.bgAudioUrl = null;
    audio.stop();
    audio.destroy();
    delete (this.audioPool[url]);
  }
  // playAudio(url, loop, isBgm = false) {
  //   if (!url) return;
  //   var audio = wx.createInnerAudioContext();
  //   audio.src = url;
  //   audio.volume = this.audioVolume;
  //   audio.loop = loop;
  //   audio.play();
  //   if (isBgm) this.bgAudio = audio;
  // }

  // stopAudio(url) {
  //   if (this.bgAudio){
  //     this.bgAudio.stop();
  //     this.bgAudio.destroy();
  //   }
  // }
  setAudioVolume(volume) {
    volume = Math.min(1, volume);
    volume = Math.max(0, volume);
    this.audioVolume = volume;
  }
  replayAudio() {
    if (!this.bgAudioUrl) return;
    var audio = this.audioPool[this.bgAudioUrl];
    if (audio && audio.paused) {
      audio.play();
    }
  }
  setInnerAudioOption(mixWithOther, obeyMuteSwitch) {
    if (this.getSDKVersion() >= 230) {
      wx.setInnerAudioOption({
        mixWithOther: mixWithOther,
        obeyMuteSwitch: obeyMuteSwitch,
        success: (res) => { console.log('声音设置成功', res); },
        fail: (e) => { console.log('声音设置失败', e); },
        complete: (res) => {
          console.log('声音设置完成');
        }
      });
    }
  }
  //file system
  _fs = null;
  getFileManager() {
    if (!this._fs) this._fs = wx.getFileSystemManager();
    return this._fs;
  }
  hasDirectory(dirName, callback) {
    var fs = this.getFileManager();
    var path = this.getnativeFilePath();
    var allPath = `${path}/${dirName}`;
    fs.access({ path: allPath, success: () => { callback(true) }, fail: () => { callback(false) } });
  }
  getnativeFilePath() {
    return wx.env.USER_DATA_PATH;
  }
  rmdir(res_name, callBack) {
    console.log(`删除 ${res_name} 开始`);
    var fs = this.getFileManager();
    try {
      var stat = fs.statSync(`${this.getnativeFilePath()}/${res_name}`);
    } catch (e) {
      console.log(e);
      return;
    }

    if (!stat || !stat.isDirectory) {
      if (callBack) callBack();
      return;
    }
    this.rmchildfile(res_name);
    this.rmchilddir(res_name);
    // fs.rmdirSync(`${this.getnativeFilePath()}/${res_name}`);      
    console.log(`删除 ${res_name} 完成`);

    if (callBack) callBack();
  }
  rmchildfile(res_name) {
    var fs = this.getFileManager();
    var url = `${this.getnativeFilePath()}/${res_name}`;
    try {
      var files = fs.readdirSync(url);
    } catch (e) {
      console.log(e);
      return;
    }
    if (files) {
      for (var k in files) {
        var childUrl = `${this.getnativeFilePath()}/${res_name}/${files[k]}`;
        if (childUrl.split(".").length > 1) {
          // console.log("del file:" + childUrl);
          try {
            fs.unlinkSync(childUrl);
          } catch (e) {
            console.log(e);
            continue;
          }
        } else {
          // console.log("foreach dir:" + childUrl);
          this.rmchildfile(`${res_name}/${files[k]}`);
        }

      }
    }
  }
  rmchilddir(res_name) {
    var fs = this.getFileManager();
    var url = `${this.getnativeFilePath()}/${res_name}`;
    try {
      var files = fs.readdirSync(url);
    } catch (e) {
      console.log(e);
      return;
    }
    if (files) {
      for (var k in files) {
        var childUrl = `${this.getnativeFilePath()}/${res_name}/${files[k]}`;
        if (childUrl.split(".").length > 1) {
          // console.log("del file:" + childUrl);
          try {
            fs.unlinkSync(childUrl);
          } catch (e) {
            console.log(e);
            continue;
          }
        } else {
          // console.log("foreach dir:" + childUrl);
          this.rmchilddir(`${res_name}/${files[k]}`);
          console.log("删除文件夹:" + url);
          fs.rmdirSync(childUrl);
        }

      }
    }
    fs.rmdirSync(url);

  }
  download(url, res_name, callBack, onProgress) {
    console.log("下载链接:" + url);
    var downLoadTask = wx.downloadFile({
      url: url,
      header: {},
      filePath: `${this.getnativeFilePath()}/${res_name}`,
      success: (res) => {
        console.log(JSON.stringify(res));
        var fs = this.getFileManager();
        fs.unzip({
          zipFilePath: `${this.getnativeFilePath()}/${res_name}`,
          targetPath: this.getnativeFilePath(),
          success: (res) => {
            console.log("解压成功:" + res_name);
            //删除zip         
            fs.unlink({
              filePath: `${this.getnativeFilePath()}/${res_name}`,
              success: () => {
                console.log("删除成功:" + res_name);
                //删除旧版本资源
                try {
                  var files = fs.readdirSync(this.getnativeFilePath());
                  var newfileName = res_name.split('.')[0];
                  if (files) {
                    var del_index = files.indexOf(newfileName);
                    if (del_index != -1) files.splice(del_index, 1);
                    del_index = files.indexOf("miniprogramLog");
                    if (del_index != -1) files.splice(del_index, 1);
                    if (files.length > 0) {
                      for (var k in files) {
                        // fs.rmdirSync(`${this.getnativeFilePath()}/${files[k]}`,true);
                        this.rmchildfile(files[k]);
                        // this.rmchilddir(files[k]);
                      }
                    }
                  }
                } catch (e) {
                  console.log("旧版本删除异常", e);
                }
              }
            })

            callBack(true);
          },
          fail: (error) => {
            console.log("解压失败:" + JSON.stringify(error));
            console.log("zipFilePath:" + `${this.getnativeFilePath()}/${res_name}`);
            var stat = fs.statSync(`${this.getnativeFilePath()}/${res_name}`);
            console.log(JSON.stringify(stat));
          }
        });
      },
      fail: (res) => {
        console.log(JSON.stringify(res));
        console.log("下载失败:" + url);
        callBack(false);
      }
    });
    downLoadTask.onProgressUpdate(progress => {
      onProgress(progress)
    });
  }
  //opendata
  getOpenDataContext() {
    var openDataContent = wx.getOpenDataContext();
    return openDataContent;
  }
  setUserCloudStorage(kvData) {
    wx.setUserCloudStorage({
      KVDataList: kvData,
      success: () => {
        console.log('托管成功' + JSON.stringify(kvData));
      },
      fail: () => {
        console.log('托管失败' + JSON.stringify(kvData));
      }
    });
  }
  //广告相关
  rewardedVideoAd = null;
  rewardedAdPlaying = false;
  getRewardedVideoAd(adUnitId) {
    if (this.rewardedVideoAd == null) {
      this.rewardedVideoAd = wx.createRewardedVideoAd({ adUnitId: adUnitId });
      console.log("创建激励广告");
    }
    return this.rewardedVideoAd;
  }
  // errorCallBack=null;
  // proxyErrorCallBack(err){
  //   if (errorCallBack){
  //     errorCallBack(err);
  //   }
  // }
  showRewardedVideoAd(adUnitId, callBack, errorCallBack) {
    if (this.getSDKVersion() < 204) {
      console.log('微信版本过低，不能显示广告');
      return;
    }
    if (this.rewardedAdPlaying) {
      console.log('广告显示中');
      return;
    }
    // errorCallBack = errorCallBack;
    let videoAd = this.getRewardedVideoAd(adUnitId);
    if (videoAd) {
      this.rewardedAdPlaying = true;
      console.log("加载激励广告");

      videoAd.load()
        .then(() => {
          console.log("播放激励广告");
          videoAd.show()
          var onError = (e) => {
            this.rewardedAdPlaying = false;
            errorCallBack(e);
            videoAd.offClose(closeCallBack);
            videoAd.offError(onError);
          }
          videoAd.onError(onError);
          var closeCallBack = (e) => {
            this.rewardedAdPlaying = false;
            console.log('用户关闭广告', e);
            callBack(e);
            videoAd.offClose(closeCallBack);
            videoAd.offError(onError);
          }
          videoAd.onClose(closeCallBack);
        }).catch(err => {
          console.log(err.errMsg)
          this.rewardedAdPlaying = false;
          // proxyErrorCallBack(err);
          errorCallBack(err);
        });
    }
  }

  bannerAd = null;
  showBannerAd(adUnitId) {
    if (this.getSDKVersion() < 204) {
      console.log('微信版本过低，不能显示广告');
      return;
    }
    // console.log('CANVAS:' + JSON.stringify(canvas));
    var canvasWidth = parseInt(canvas.style.width);
    var canvasHeight = parseInt(canvas.style.height);
    if (this.bannerAd == null) {
      this.bannerAd = wx.createBannerAd({
        adUnitId: adUnitId,
        style: {
          left: 0, top: canvasHeight - canvasWidth / 3.1,
          width: canvasWidth
        }
      })
    }
    this.bannerAd.onError((errorData) => {
      console.log('onError:' + JSON.stringify(errorData));
    })
    console.log('bannerAd:' + JSON.stringify(this.bannerAd));
    this.bannerAd.onResize(resize => {
      console.log('onResize:' + JSON.stringify(resize));
    });
    this.bannerAd.onLoad(() => {
      console.log('onLoad');
    });
    this.bannerAd.show();
    console.log("bannerAd显示");
  }
  hideBannerAd() {
    if (this.bannerAd != null) {
      console.log("bannerAd关闭");
      this.bannerAd.hide();
      this.bannerAd.offError();
      this.bannerAd.offResize();
      this.bannerAd.offLoad();
      this.bannerAd.destroy();
      this.bannerAd = null;
    }
  }
  /** 客服 */
  openCustomerServiceConversation(obj) {
    wx.openCustomerServiceConversation(obj);
  }
  /** 图片预览 */
  previewImage(urls) {
    wx.previewImage({
      urls: urls,
      success: () => {
        console.log('预览图片成功');
      }
    })
  }
  navigateToMiniProgram(appId, path, extraData) {
    wx.navigateToMiniProgram({
      appId: appId,
      path: path,
      extraData: extraData
    });
  }
  request(url, data, method, dataType, callback, error) {
    var requestTask = wx.request({
      "url": url,
      "data": data,
      "header": { "Content-Type": "application/x-www-form-urlencoded" },
      "method": method,
      "dataType": dataType,
      "success": callback,
      "fail": error
    })
  }
  socketTask = null;
  connectSocket(object) {
    if (!this.socketTask) {
      this.socketTask = wx.connectSocket(object);
    }
  }
  closeSocket(object) {
    if (this.socketTask) {
      console.log("关闭Socket" + JSON.stringify(object));
      this.socketTask.close(object);
      this.socketTask = null;
    }
  }
  onSocketOpen(func) {
    if (this.socketTask) {
      console.log("监听onSocketOpen");
      this.socketTask.onOpen(func);
    }
  }
  onSocketClose(func) {
    if (this.socketTask) {
      console.log("监听onSocketClose");
      this.socketTask.onClose(func);
    }
  }
  onSocketMessage(func) {
    if (this.socketTask) {
      console.log("监听onSocketMessage");
      this.socketTask.onMessage((e) => {
        func(e.data);
      });
    }
  }
  onSocketError(func) {
    if (this.socketTask) {
      console.log("监听onSocketError");
      this.socketTask.onError((e) => {
        func(e);
      });
    }
  }
  sendSocketMessage(object) {
    if (this.socketTask) {
      this.socketTask.send(object);
    }
  }
  //分包加载
  loadSubpackage(callback, complete) {
    const loadTask = wx.loadSubpackage({
      name: 'stage', // name 可以填 name 或者 root
      success: function (res) {
        // 分包加载成功后通过 success 回调
        console.log("分包加载成功");
      },
      fail: function (res) {
        // 分包加载失败通过 fail 回调
        console.log("分包加载失败");

      },
      complete: complete
    })

    loadTask.onProgressUpdate(callback);
  }
}


window.platform = new WxgamePlatform();
