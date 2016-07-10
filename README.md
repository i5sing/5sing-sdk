# 5sing-sdk

中国原创音乐基地(5sing)JavaScript开发SDK

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

### getSongCollectionsByLabel(params, success, error)

### getSongsInSongCollections(params, success, error)

### getSongCollection(params, success, error)

### getSingers(params, success, error)

### getLatestSingers(params, success, error)

### getUserInfo(params, success, error)

### getUserSongs(params, success, error)

### isLogin(params, success, error)

### getSingerDynamic(params, success, error)

### checkFollowUser(params, success, error)

### checkSongCollection(params, success, error)

### addVisited(params, success, error)

### getSquareList(params, success, error)

### getSongAddr(params, success, error)

### search(params, success, error)

### login(params, success, error)

### getMySongCollections(params, success, error)

### getSong(params, success, error)

### getSongSupport(params, success, error)

### getComments(params, success, error)

### getSongFans(params, success, error)

### getUserCollections(params, success, error)

### getUserFans(params, success, error)

### getUserQuests(params, success, error)

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
