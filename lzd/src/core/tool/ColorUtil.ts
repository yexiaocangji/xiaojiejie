class ColorUtil {
	public static setGray(display:egret.DisplayObject){
		var colorMatrix = [0.308, 0.609, 0.082, 0, 5,
							0.308, 0.609, 0.082, 0, 5,
							0.308, 0.609, 0.082, 0, 5,
							0, 0, 0, 1, 0];
		var colorFilter = new egret.ColorMatrixFilter(colorMatrix);
		display.filters = [colorFilter];
	}
	public static setDark(display:egret.DisplayObject){
		var colorMatrix = [0.3, 0, 0, 0, 30.8,
							0, 0.3, 0, 0, 30.8,
							0, 0, 0.3, 0, 30.8,
							0, 0, 0, 1, 0];
		var colorFilter = new egret.ColorMatrixFilter(colorMatrix);
		display.filters = [colorFilter];
	}
	public static setBlack(display:egret.DisplayObject){
		var colorMatrix = [0, 0, 0, 0, 0,
							0, 0, 0, 0, 0,
							0, 0, 0, 0, 0,
							0, 0, 0, 1, 0];
		var colorFilter = new egret.ColorMatrixFilter(colorMatrix);
		display.filters = [colorFilter];
	}
	public static setHui(display:egret.DisplayObject){
		var colorMatrix = [0, 0, 0, 0.4, 0,
							0, 0, 0, 0.4, 0,
							0, 0, 0, 0.4, 0,
							0, 0, 0, 1, 0];
		var colorFilter = new egret.ColorMatrixFilter(colorMatrix);
		display.filters = [colorFilter];
	}
	public static clearGray(display:egret.DisplayObject){
		display.filters = null;
	}
}