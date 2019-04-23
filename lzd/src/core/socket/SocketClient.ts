class SocketClient {
	public socket:egret.WebSocket;
		public host:string;
		public port:number;
		public static onConnectCallBack:Function;
		public static onCloseCallBack:Function;
		public static onIOErrorCallBack:Function;
		public static onDataCallBack:Function;
		public isConnect:boolean = false;
		public constructor(host:string,port:number) {
			this.isConnect = false;
			this.host = host;
			this.port = port;
		}
		public async connect(){
			await platform.connectSocket({url:'wss://' + this.host,header:{},protocols:[],success:()=>{
				console.log("SOCKET初始化成功:" + 'wss://' + this.host);
			},fail:()=>{
				console.log("SOCKET初始化失败");
			},complete:()=>{
				console.log("SOCKET初始化完成")
			}});
			//创建监听
			await platform.onSocketClose(this.onSocketClose);
			await platform.onSocketError(this.onSocketIOError);
			await platform.onSocketOpen(this.onSocketConnect);
			await platform.onSocketMessage(this.onData);
			this.isConnect = true;
		}
		public async close(code:number = 1000){
			this.isConnect = false;
			await platform.closeSocket({code:code,reason:"normal",
			success:()=>{
				console.log("链接关闭成功");
			},fail:()=>{
				console.log("链接关闭失败");
			},complete:()=>{
				console.log("链接关闭完成");
			}});
		}
		public sendData(data:any){
			platform.sendSocketMessage({data:JSON.stringify(data),
			success:()=>{
				console.log("消息发送成功");
			},fail:()=>{
				console.log("消息发送失败");
			},complete:()=>{
				console.log("消息发送完成");
			}})
		}
		public onData(data:string){		
			if(SocketClient.onDataCallBack != null){
				SocketClient.onDataCallBack(data);
			}
		}
		public onSocketConnect(){
			if(SocketClient.onConnectCallBack != null){
				SocketClient.onConnectCallBack();
			}
		}
		public onSocketClose(){
			if(SocketClient.onCloseCallBack != null){
				SocketClient.onCloseCallBack();
			}
		}
		public onSocketIOError(){
			if(SocketClient.onIOErrorCallBack != null){
				SocketClient.onIOErrorCallBack();
			}
		}
		public dispose(){
			SocketClient.onConnectCallBack = null;
			SocketClient.onCloseCallBack = null;
			SocketClient.onIOErrorCallBack = null;
			SocketClient.onDataCallBack = null;
			this.close();
		}
}