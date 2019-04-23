/** 
 * 小姐姐数据
 * 用于表示:小姐姐等级,位置
 * 定义出来方便扩展字段
 */
module lzd.vo {
	export class Player {
		/** 小姐姐id(哪个图片，包括小姐姐、小哥哥、小宠物) */
		public id: string;
		/** 金币购买次数 */
		public buyCount_gold: number = 1;
		/** 钻石购买次数 */
		public buyCount_jewel: number = 1;

	}
}