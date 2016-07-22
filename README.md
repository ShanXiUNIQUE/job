# 山西优逸客就业平台
> 此项目前端组只负责前端页面布局、后台有专人负责。

## 网站适用：PC平台 兼容IE8
## 网页内宽：1200px
## 开发规范
### <span style='color:red'>注意：网站要兼容IE8不要使用css3选择器等不兼容IE8的东西。</span>
### 文件统一放置对应文件夹中
### 规范
#### 命名规范
- css文件  如： 文件名  hnz-index.css  <br>
                类名 如 .hnz-banner  #hnz-nav （一定要有后代保护）
  
- js文件   如： 文件名  hnz-index.js  <br>
           文件中不允许出现  window.onload = function(){}  正确 $(function(){ }) || window.addEventListener() 
- image文件
  文件名 如：hnz-logo.png<br/>
  所有文件 统一放置到自己姓名简拼的文件夹下<br/> 如   images/hnz/ hnz-logo.png<br/> images/wlh/wlh-copy.png

#### 注释
> 注释结构清晰

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
