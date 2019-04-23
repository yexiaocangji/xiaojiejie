class DateTool {
	/** 到下一个hour小时的毫秒数 */
	public static toNextHoursTime(hour:number = 1){
		//容错处理
		hour = Math.min(hour,23);
		hour = Math.max(hour,0);
		//当前时间
		var nowdate = new Date();
		var year = nowdate.getFullYear();
		var mon = nowdate.getMonth();
		var day = nowdate.getDate();
		var hh = nowdate.getHours();
		var min = nowdate.getMinutes();
		var ss = nowdate.getSeconds();
		var ms = nowdate.getMilliseconds();
		//到达时间
		var newYear = year;
		var newMon = mon;
		var newDay = day;
		if(hour <= hh || hour == 0){
			newDay++;
			if(newDay > this.getCurrentMonthDays()){
				newDay = 1;
				newMon ++;
				if(newMon > 11){
					newMon = 0;
					newYear++;
				}
			}
		}
		var newDate = new Date(newYear,newMon,newDay,hour);
		var nowtime:any = nowdate.getTime();
		var newtime:any = newDate.getTime();
		return Math.abs(newtime - nowtime);
	}
	/**
	 * 倒几分钟
	 */
	public static formatMinuteTime(time:number){
		var total_secends = Math.floor(time)
		var h = Math.floor(total_secends / 3600);
		var m = Math.floor(total_secends % 3600 / 60);
		var s = Math.floor(total_secends % 3600 % 60)
		var str_h = h<10?("0"+h):(""+h);
		var str_m = m<10?("0"+m):(""+m);
		var str_s = s<10?("0"+s):(""+s);
		return str_h+":"+str_m+":"+str_s;
	}
	/** 将毫秒转化为时分秒 */
	public static formatTime(time:number){
		var total_secends = Math.floor(time / 1000)
		var h = Math.floor(total_secends / 3600);
		var m = Math.floor(total_secends % 3600 / 60);
		var s = Math.floor(total_secends % 3600 % 60 % 1000)
		var str_h = h<10?("0"+h):(""+h);
		var str_m = m<10?("0"+m):(""+m);
		var str_s = s<10?("0"+s):(""+s);
		return str_h+":"+str_m+":"+str_s;
	}
	/** 获取当月天数 */
	public static getCurrentMonthDays(){
		var nowdate = new Date();
		var year = nowdate.getFullYear();
		var mon = nowdate.getMonth();
		let monthStartDate:any = new Date(year, mon, 1);  
        let monthEndDate:any = new Date(year, mon + 1, 1);  
        let days = (monthEndDate - monthStartDate)/(1000 * 60 * 60 * 24);  
        return days; 
	}
	/** 将时间戳转换成日期 */
	public static timestampToTime(timestamp) {
        var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        return Y+M+D+h+m+s;
    }
	/**
	 * 
	 * @param timestamp 毫秒时间戳
	*/
	public static makeTime(timestamp:number = -1){
		var date = null;
		if(timestamp == -1){
			date = new Date();
		}else{
			date = new Date(timestamp);
		}
		var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate()
        return Y+M+D;		
	}
	/** 将日期转换成时间戳 */
	public static dateTotimeStamp(date = "1979-1-1 00:00:00"){
		var timestamp=new Date(date).getTime();
		return timestamp;
	}
	/** 获取当前时间戳 */
	public static currentTime(){
		var timestamp=new Date().getTime();
		return timestamp;
	}
	/** 获取当前某点的时间戳 */
	public static currentDayHourTimeStamp(hours:number = 0,min:number = 0,sec:number = 0,minSec:number = 0){
		var now =new Date();
		now.setHours(hours,min,sec,minSec);
		return now.getTime();
	}
}