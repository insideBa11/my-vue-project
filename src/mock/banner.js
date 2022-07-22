import Mock from "mockjs";

Mock.mock('/api/banner', "get", {
	code: 0,
	msg: "",
	data: [
		{
			id: "1",
			midImg: "https://inews.gtimg.com/newsapp_bt/0/14699304668/1000",
			bigImg: "https://www.ghostoact.com/static/arts/img/pic/artbywzfpiw95aovtrnz0sz637lbxauj.jpg",
			title: "",
			description: "",
		},
		{
			id: "2",
			midImg: "http://mms1.baidu.com/it/u=3241840543,3196132552&fm=253&app=120&f=PNG&fmt=auto&q=75?w=641&h=343",
			bigImg: "https://www.ghostoact.com/static/arts/img/pic/alsb1dm6fbo9tccolry4dt15nykauzw6.jpg",
			title: "",
			description: "",
		},
		{
			id: "3",
			midImg: "http://mms1.baidu.com/it/u=1012251113,3243262337&fm=253&app=120&f=JPEG&fmt=auto&q=75?w=640&h=377",
			bigImg: "https://www.ghostoact.com/static/arts/img/pic/a9lrfzk6tl37zei5nihi21nm1kufpbxr.jpg",
			title: "",
			description: "",
		},
		{
			id: "4",
			midImg: "http://mms2.baidu.com/it/u=1455159228,3279695156&fm=253&app=120&f=JPEG&fmt=auto&q=75?w=575&h=204",
			bigImg: "https://www.ghostoact.com/static/arts/img/pic/aut5tcqtrrnof4ull9bkvp6otxgz3gte.jpg",
			title: "",
			description: "",
		},
	]
})
