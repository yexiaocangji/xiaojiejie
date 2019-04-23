declare var DDSDK_Render:{
	getTryDlg():any;
	getTryBtn():any;
	getAniAD():any;
	getFavAD(row:number,col:number):any;
	createListView():any;
}

declare var DDSDK:{
	init(appid: string, openid: string, gname: string):void;
	logEnable(bEnable:boolean):void;
	logTag(page: string, event: string, extra?: string): void;
	setResLoadCallback(cb:Function):void;
	setRewardCB(cb:Function):void;
	setOpenAppCB(cb:Function):void;
	getRender():any;
	openApp(appId: string, path: string, extraData?: string):void;
}