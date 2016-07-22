# 山西优逸客就业平台
> 此项目前端组只负责前端页面布局、后台有专人负责。

## 网站适用：PC平台 兼容IE8
## 网页内宽：1200px
## 开发规范
### 注意：网站要兼容IE8不要使用css3选择器等不兼容IE8的东西。
* 圆角可以通过以下方式兼容

```
.box-radius {
  border-radius: 15px;
  behavior: url(border-radius.htc);
}
//注意：﻿﻿htc文件是要放在服务器上，放在本地测试是不行的！
```

### 规范
#### 目录结构
> 统一放置对应文件夹中

/<br>
|-------images/<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----/hnz/<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----/wlh/<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----/wq/<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----/lx/<br>
|--------css/<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----reset.css 重置默认样式<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----border-radius.htc IE8兼容圆角<br>
|--------js/<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----jquery.min.js<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----jquery.lazyload.min.js<br>
|--------index.html<br>
|--------about.html<br>
|--------news.html<br>
<br>
#### 命名规范
- css文件  如： 文件名  hnz-index.css  <br>
                类名 如 .hnz-banner  #hnz-nav （一定要有后代保护）
  
- js文件   如： 文件名  hnz-index.js  <br>
  错误 window.onload = function(){}  <br>
  正确 $(function(){ }) || window.addEventListener('load',function(){}) <br>
  js文件引用统一放置在body结束之前
- image文件
  文件名 如：hnz-logo.png<br/>
  所有文件 统一放置到自己姓名简拼的文件夹下<br/> 如   images/hnz/ hnz-logo.png<br/> images/wlh/wlh-copy.png

#### 注释
> 必须添加注释并且注释结构清晰

\<!-- #nav 导航开始  --\><br>
\<!-- #nav 导航结束  --\>

## 工具库
- jQuery v1.12.4
- 可使用jquery插件、必须有插件说明 接口必须要有描述

## 优化
- 小图标统一采用图片精灵
- 页面使用懒加载
- 图片要压缩优化
- 代码结构合理

## 任务分配
1. 首页 (1页,多动画) 侯宁洲<br>
<br>
2. 上传视频页 (3页) 马彦龙<br>
   上传文章页<br>
   上传作品页 <br>
<br>
3. 视频列表  (2页)  李星<br>
   视频详情<br>
   需要视频播放器<br>
<br>
4. 作品列表   (2页) 王丽红<br>
   作品详情<br>
<br>
5. 文章列表页  (2页) 张凯凤<br>
   文章详情页        苏国强<br>
<br>
6. 搜索页面   (4页)  刘旭瑞<br>
