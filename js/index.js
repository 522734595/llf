
var city;
var tianqi;
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/city/",
	dataType:"jsonp",
	method:"get",
	success:function(obj){
		city=obj.data;
		console.log(city);
	}
})
// 关于天气的信息
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
	dataType:"jsonp",
	method:"get",
	success:function(obj){
		 tianqi=obj.data;
		console.log(tianqi);
		// var tem=tianqi.weather.
	
	}

})
// 页面加载的函数
window.onload=function(){
	update();
}
// 获取数据的函数
function update(){
	var pos=document.getElementsByClassName("pos")[0];
	// console.log(pos);
	pos.innerHTML=tianqi.city;
	
	// 当前空气质量
	var quality_level=document.getElementsByTagName("h5")[0];
	// console.log(quality_level);
	quality_level.innerHTML=tianqi.weather.quality_level;
	
	// 当前温度
	var current_temperature=document.getElementsByClassName("title1")[0];
	current_temperature.innerHTML=tianqi.weather.current_temperature+"°";
	
	// 当前空气状况
	var current_condition=document.getElementsByClassName("title2")[0];
	current_condition.innerHTML=tianqi.weather.current_condition;
	
	// 当前风的方向
	var wind_direction=document.getElementsByClassName("wind_der")[0];
	wind_direction.innerHTML=tianqi.weather.wind_direction;
	
	// 当前风的等级
	var wind_level=document.getElementsByClassName("wind_level")[0];
	wind_level.innerHTML=tianqi.weather.wind_level+"级";
	
	// 今天的天气情况图标
	var today_icon=document.getElementsByClassName("conPic")[0];
	today_icon.style=`background-image:url("img/${tianqi.weather.dat_weather_icon_id}.png")`;
	
	// 明天的天气图标
	var tomorrow_icon=document.getElementsByClassName("conPic")[0];
	tomorrow_icon.style=`background-image:url("img/${tianqi.weather.tomorrow_weather_icon_id}.png")`;
  
   // 每小时的天气情况

   var hourlyArr=tianqi.weather.hourly_forecast;
   var wrap=document.getElementsByClassName("wrap")[0];
   // console.log(hourlyArr);
   for(let i in hourlyArr){
   	 var box1=document.createElement("div");
     box1.className="box";

     var time=document.createElement("div");
     time.classNamw="time";
     box1.appendChild(time);
     time.innerHTML=hourlyArr[i].hour+":00";

     var icon=document.createElement("div");
     icon.classNamw="icon";
     box1.appendChild(icon);
     icon.style=`background-image:url("img/${hourlyArr[i].weather_icon_id}.png")`;

     var timeTem=document.createElement("div");
     timeTem.className="timeTem";
     box1.appendChild(timeTem);
     timeTem.innerHTML=hourlyArr[i].temperature+"°";


     wrap.appendChild(box1);
   }
  // 未来15天天气情kuang
  var dayArr=tianqi.weather.forecast_list;
  console.log(dayArr);

  var warp1=document.getElementsByClassName("warp1");
  for(let i in dayArr){
  	var box2=document.createElement("div");
  	box2.className="box";

  	var date=document.createElement("div");
  	date.className="date";
  	box2.appendChild(date);
  	date.innerHTML=dayArr[i].date;
  	warp.appendChild(box2);
  }

}
