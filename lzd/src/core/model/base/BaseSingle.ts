class BaseSingle {
    /** 获取单例 */
    public static getInstance():any{
        var _class:any = this;
        if(_class.__instance == null)_class.__instance = new _class();
        return _class.__instance;
    }
    /** 摧毁单例 */
    public static destoryInstance(){
        var _class:any = this;
        if(_class.__instance != null)delete _class.__instance;        
    }
}