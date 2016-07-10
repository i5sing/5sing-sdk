# 5sing-sdk

中国原创音乐基地(5sing)JavaScript开发SDK. It's only support node environment. [5sing Mobile API Document](https://github.com/i5sing/5sing-mobile-api)

## Usage
```
$ npm install 5sing-sdk
```

### Example
```javascript
var SingSdk = require('5sing-sdk');

SingSdk.getAdvertisements({
  advertId: 23
}, function (result, response) {

}, function (err, result, response){

});

// or 
SingSdk.getAdvertisements({
  advertId: 23
}).then(function (result) {

}, function (err) {

});
```

## API
* params: api query string
* success: success callback
* error: error callback
* return: promise object


### getAdvertisements(params, success, error)
获取轮播图列表  
params:
* advertId: 轮播图Id

### getDailyRecommendSongs(params, success, error)
获取每日推荐  
params:
* pageIndex
* pageSize

### getSpecialColumn(success, error)
获取专栏列表  

### getSpecialColumnDetail(params, success, error)
获取专栏详情  
params:
* channelId: 专栏id
* pageIndex
* pageSize

### getRankOverview(success, error)
获取排行榜概览  

### getRankUpdateList(success, error)
获取排行榜更新时间列表  

### getRankDetail(params, success, error)
获取排行榜详情  
params:
* id: list23
* time: 排行榜更新时间列表中的time
* pageIndex
* pageSize

### getPopularSongs(params, success, error)
获取最后欢迎歌曲列表  
params:
* limit: 条数
* pageIndex
* pageSize
* time: 排行榜更新时间列表中的time

### getSongCollections(params, success, error)
获取歌单列表  
params:
* pageIndex

### getSongCollectionsByLabel(params, success, error)
筛选歌单  
params:
* label: 歌单标签
* pageIndex
* pageSize

### getSongsInSongCollections(params, success, error)
获取歌单中歌曲列表  
params:
* id: 歌单id

### getSongCollection(params, success, error)
获取歌单详情  
params:
* id: 歌单id

### getSingers(params, success, error)
获取歌手列表  
params:
* pageIndex,
* pageSize

### getLatestSingers(params, success, error)
获取新入驻歌手列表  
params:
* pageIndex
* pageSize

### getUserInfo(params, success, error)
获取用户信息  
params:
* userId: 用户id

### getUserSongs(params, success, error)
获取该用户上传歌曲列表  
params:
* userId: 用户id
* songType: 歌曲类型 原创(yc) 翻唱(fc) 伴奏(bz)
* pageIndex
* pageSize

### isLogin(params, success, error)
检查登录状态  
params:
* sign: token

### getSingerDynamic(params, success, error)
获取关注歌手动态  
params:
* sign: token
* pageIndex
* pageSize

### checkFollowUser(params, success, error)
检查是否关注该歌手  
params:
* userId: 用户id
* sign: token

### checkSongCollection(params, success, error)
检查是否收藏该歌单  
params:
* id: 歌单id
* sign: token

### addVisited(params, success, error)
添加访问足迹  
params:
* userId: 访问用户id
* sign: token

### getSquareList(params, success, error)
获取广场列表  
params:
* sign: token
* pageIndex
* pageSize

### getSongAddr(params, success, error)
获取歌曲地址  
params:
* songId: 歌曲id
* songType: 歌曲类型 原创(yc) 翻唱(fc) 伴奏(bz)

### search(params, success, error)
搜索  
params:
* keyword: 关键词
* type: 类型
* pageIndex
* pageSize

### login(params, success, error)
登录  
params:
* username
* password

### getMySongCollections(params, success, error)
获取收藏的歌单  
params: 
* sign: token
* pageIndex
* pageSize

### getSong(params, success, error)
获取歌曲信息  
params:
* songId: 歌曲id
* songType: 歌曲类型 原创(yc) 翻唱(fc) 伴奏(bz)

### getSongSupport(params, success, error)
获取歌曲支持信息  
params:
* songId: 歌曲id
* songType: 歌曲类型 原创(yc) 翻唱(fc) 伴奏(bz)
* sign: token

### getComments(params, success, error)
获取评论  
params:
* id: 歌曲id或用户id
* kind: 类型 原创(yc) 翻唱(fc) 伴奏(bz) 用户(guestBook)

### getSongFans(params, success, error)
获取歌曲贡献榜  
params:
* songId: 歌曲id
* songType: 歌曲类型 原创(yc) 翻唱(fc) 伴奏(bz)
* limit: 条数

### getUserCollections(params, success, error)
获取歌手关注列表  
params:
* userId: 用户id
* pageIndex
* pageSize

### getUserFans(params, success, error)
获取歌手粉丝列表  
params:
* userId: 用户id
* pageIndex
* pageSize

### getUserQuests(params, success, error)
获取歌手访客列表  
params:
* sign: token
* userId: 用户id

## Develop
```
$ npm install 

$ npm run build

$ npm run test
```

## Feedback
If you any questions, use [Issues](https://github.com/i5sing/5sing-sdk/issues).

Sina Weibo: [@赵小小峰](http://weibo.com/5101118493)

## License
MIT Licence.
