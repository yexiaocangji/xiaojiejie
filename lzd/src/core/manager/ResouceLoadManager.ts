class AssetsManager extends BaseSingle{
	

	/** 加载内部资源 */
    public async loadInnerResource(root:string,groupName:string){
        await RES.loadConfig(`${root}/default.res.json`,`${root}/`);
        await this.loadResource(groupName);
    }

	/** 
     * 加载资源组
     */
    public async loadResource(groupName:string) {
        try {
            await RES.loadGroup(groupName, 0, null);
        }catch (e) {console.error(e);}
    }

	
}