class DaDianConstant {
	public static is_dadian = true;
	public static sdk_dadian = false;
	public static appid = "hcjj";
	private static urlRoot:string = "https://stat.chiji-h5.com/statwx_company.php";
	public static send(params:DaDianData){
		if(!this.is_dadian)return;
		if(this.sdk_dadian){
			DDSDK.logTag(params.page,params.event,params.extra);
			return;
		}
		HttpClient.send(this.urlRoot,params,(e)=>{
			console.log('statwx suc:',e);
		},(e)=>{
			console.log('statwx failed:',e);
		})
	}
	public static getDadianData(openid:string,page:string,event:string,extra:string){
		return {appid:this.appid,openid:openid,page:page,event:event,extra:extra,channel:AccountData.getChannel()};
	}
}
type DaDianData = {
	appid:string,
	openid:string,
	page:string,
	event:string,
	extra:string,
}