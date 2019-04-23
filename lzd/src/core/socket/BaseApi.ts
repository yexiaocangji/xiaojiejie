class BaseApi {
	public static _host:string;
	public static _port:number;
	private static _sendQeune:any[];
	private static _callbackQeune:any[];
	private static _socketClient:SocketClient;
	private static _currentSendObject:any;
	private static _commands:any = {};
	private static _commandsThisObjects:any = {};
	/** 初始化接口 */
	public static init(host:string,port:number){
		BaseApi._host = host;
		BaseApi._port = port;
		this.initSocket();
		// BaseApiCmdIint.init();
	}
	public static initSocket(){
		BaseApi._socketClient = new SocketClient(this._host,this._port);
		SocketClient.onConnectCallBack = BaseApi.onConnect;
		SocketClient.onDataCallBack = BaseApi.onData;
		SocketClient.onCloseCallBack = BaseApi.onClose;
		SocketClient.onIOErrorCallBack = BaseApi.onIOError;
		BaseApi._sendQeune = [];
		BaseApi._callbackQeune = [];
		BaseApi._currentSendObject = null;
	}
	public static connectSocket(){
		BaseApi._socketClient.connect();
	}
	public static closeSocket(){
		BaseApi._socketClient.close();
	}
	/** 处理交互状态 */
	private static onConnect(){
		//重连接回来继续处理通讯逻辑
		console.log("connect");
		if (BaseApi._currentSendObject == null && BaseApi._sendQeune.length > 0) {
			BaseApi._currentSendObject = BaseApi._sendQeune.shift();
		}
		if (BaseApi._currentSendObject != null) {
			BaseApi.sendObject(BaseApi._currentSendObject);
		}
	}
	private static onData(dataStr:string){
		var data = JSON.parse(dataStr);
		console.log("reponseData:" + JSON.stringify(data));	
		this._isError = false;
		if (data.cmd) {
			BaseApi.dispatchCmd(data.cmd, data);
		}
		if (BaseApi._callbackQeune.length > 0) {
			NetWorkLoading.hide();
			if (BaseApi._sendQeune.length == 0) {
				BaseApi._currentSendObject = null;
			}
			var callBack = BaseApi._callbackQeune.shift();
			callBack(data);
		}
		//处理队列
		if (BaseApi._sendQeune.length > 0) {
			BaseApi._currentSendObject = BaseApi._sendQeune.shift();
			BaseApi.sendObject(BaseApi._currentSendObject);
		}
	}
	private static async onClose(){
		console.log("connectClose");
		await BaseApi._socketClient.close(999);
	}
	private static _isError:boolean = false;
	private static async onIOError(){
		console.log("onIOError");
		await BaseApi._socketClient.close(998);
		platform.exitMiniProgram(null,null);
		// NetWorkError.showConnectFail();
		BaseApi._isError = true;
	}
	/** 请求逻辑 */
	public static requestLogic(pars:any,callBack:Function,errorCallBack:Function){
		//包上会话id
		// pars["session"] = AccountData.getSeesionId();
		BaseApi.request(null,pars,callBack,errorCallBack);
	}
	/** 封装基础请求接口 */
	public static request(path:string,pars:any,callBack,errorCallBack){
		if (BaseApi._isError){
			egret.log("request failed: onIOError \n");
			return;
		}
		NetWorkLoading.show();
		var dataObject = pars;
		if (BaseApi._currentSendObject == null) {
			BaseApi._currentSendObject = dataObject;
			BaseApi.sendObject(BaseApi._currentSendObject);
		}
		else {
			BaseApi._sendQeune.push(dataObject);
		}
		BaseApi._callbackQeune.push(function (data) {
			if (data.state != 0) {
				if (errorCallBack != null) {
					errorCallBack(data);
				}
			}
			else {
				if (callBack != null)
					callBack(data);
			}
		});
	}
	public static sendObject(data:any){
		if (!BaseApi._socketClient.isConnect) {
			BaseApi._socketClient.connect();
			return;
		}
		console.log("req data:" + JSON.stringify(data));
		var sendObj = data;
		BaseApi._socketClient.sendData(sendObj);
	}


	/***
	 * 清除所有命令
	 */
	public static clearCmd() {
		BaseApi._commands = {};
		BaseApi._commandsThisObjects = {};
	};
	/**
	 * 注册命令
	 */
	public static registerCmd(cmd:string, callBack:Function, thisObj:any, isHead:boolean = false) {
		if (isHead === void 0) { isHead = false; }
		var cmds = BaseApi._commands[cmd];
		if (cmds == null) {
			cmds = [];
		}
		if (isHead) {
			cmds.unshift([callBack, thisObj]);
		}
		else {
			cmds.push([callBack, thisObj]);
		}
		BaseApi._commands[cmd] = cmds;
	};
	/**
	 * 移除命令
	 */
	 public static removeCmd(cmd:string, callBack:Function, thisObj:any) {
		var cmds = BaseApi._commands[cmd];
		if (cmds == null) {
			cmds = [];
		}
		var index = -1;
		var len = cmds.length;
		for (var i = 0; i < len; i++) {
			if (cmds[i][0] == callBack && cmds[i][1] == thisObj)
				index = i;
		}
		if (index != -1) {
			cmds.splice(index, 1);
		}
		BaseApi._commands[cmd] = cmds;
	};
	/**
	 * 派发命令消息
	 */
	public static dispatchCmd(cmd:string, data:any) {
		var cmds = BaseApi._commands[cmd];
		if (cmds == null) {
			cmds = [];
		}
		var len = cmds.length;
		var thisObj;
		var fun;
		for (var i = 0; i < len; i++) {
			thisObj = cmds[i][1];
			fun = cmds[i][0];
			fun.apply(thisObj, [data]);
		}
	};
	public static dispose(){
		BaseApi._socketClient.dispose();
		BaseApi._socketClient = null;
		BaseApi._sendQeune = [];
		BaseApi._callbackQeune = [];
		BaseApi._currentSendObject = null;
		// BaseApiCmdIint.init();
	}
}