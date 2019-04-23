class DragonBoneManager extends BaseSingle {
	private factoryPool:string[] = [];
	public createAnimate(name:string):dragonBones.EgretArmatureDisplay{
		if(this.factoryPool.indexOf(name) != -1){
			// let egretFactory: dragonBones.EgretFactory = this.factoryPool[name] as dragonBones.EgretFactory;
			// let armatureDisplay: dragonBones.EgretArmatureDisplay = egretFactory.buildArmatureDisplay(name);
			let armatureDisplay: dragonBones.EgretArmatureDisplay = dragonBones.EgretFactory.factory.buildArmatureDisplay(name);
			return armatureDisplay;
		}
		var dragonbonesData = RES.getRes( `${name}_ske_json` );  
        var textureData = RES.getRes( `${name}_tex_json` );  
        var texture = RES.getRes( `${name}_tex_png` );
		if(!dragonbonesData || !textureData || !texture)return null;
        let egretFactory: dragonBones.EgretFactory = dragonBones.EgretFactory.factory;
        egretFactory.parseDragonBonesData(dragonbonesData);  
        egretFactory.parseTextureAtlasData(textureData, texture);
		// this.factoryPool[name] = egretFactory;
		this.factoryPool.push(name);

        let armatureDisplay: dragonBones.EgretArmatureDisplay = egretFactory.buildArmatureDisplay(name);
		return armatureDisplay;
	}
}