"use strict";

{}
/* $.ajax({
	url:"url",
	data:{},
	type:"get",
	success:()=>{
		$.ajax({
			url:"url",
			data:{},
			type:"get",
			success:()=>{
				
				})
			}
		})
	}
}) */

// 回调地狱 链式回调 event...loop
{
	/* function ajax(cb){
 	setTimeout(()=>{
 		cb && cb()
 	},1000)
 }
 ajax(()=>{
 	console.log("任务1")
 }) */
}
{
	/* function ajax(cb){
 	setTimeout(()=>{
 		cb && cb(()=>{
 			console.log("任务2")
 		})
 	},1000)
 }
 ajax((cb2)=>{
 	console.log("任务1");
 	setTimeout(()=>{
 		cb2 && cb2()
 	},1000)
 }) */
}
{
	/* function ajax(){
 	return new Promise((resolve, reject)=>{
 		setTimeout(()=>resolve(),1000)
 	})
 }
 ajax().then(()=>{
 	console.log("任务11")
 }) */
}
{
	/* function ajax(){
 	return new Promise((resolve, reject)=>{
 		setTimeout(()=>resolve(),1000)
 	})
 }
 ajax().then(()=>{
 	console.log("任务11")
 	return new Promise((resolve)=>{
 		setTimeout(()=>resolve(),1000)
 	})
 }).then(()=>console.log("任务22")) */
}
{
	/* console.error("错误")
 throw new Error("错误") */
	// 1 "1"
	var judgeNumber = function judgeNumber(num) {
		return new Promise(function (resolve, reject) {
			if (typeof num === 'number') {
				resolve(num);
			} else {
				var err = new Error("请输入数字");
				reject(err);
			}
		});
	};

	judgeNumber("2").then(function (num) {
		return console.log(num);
	}).catch(function (err) {
		return console.log(err);
	});
}
{
	var getImage = function getImage(url) {
		return new Promise(function (resolve, reject) {
			var img = document.createElement("img"); //<img/>
			img.src = url;
			img.onload = function () {
				return resolve(img);
			};
			img.onerror = function (err) {
				return reject(err);
			};
		});
	};

	var showImage = function showImage(imgs) {
		imgs.forEach(function (item) {
			document.body.appendChild(item);
		});
	};

	var firstImage = function firstImage(img) {
		document.body.appendChild(img);
	};
	// Promise.all([getImage(imgUrl1),getImage(imgUrl2),getImage(imgUrl3)]).then(showImage)


	// promise().all([tu1,tu2,tu3])
	var imgUrl1 = "./image/cat1.jpg";
	var imgUrl2 = "./image/cat2.jpg";
	var imgUrl3 = "./image/cat3.jpg";
	Promise.race([getImage(imgUrl1), getImage(imgUrl2), getImage(imgUrl3)]).then(firstImage);
}