/*!
 * SingSdk v0.0.1
 * (c) 2016 Elwin-赵小峰
 * Released under the MIT License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var request = _interopDefault(require('request'));

function send() {
    var method = arguments.length <= 0 || arguments[0] === undefined ? 'GET' : arguments[0];
    var url = arguments[1];
    var body = arguments[2];
    var option = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
    var success = arguments[4];
    var error = arguments[5];

    return new Promise(function (resolve, reject) {
        request({
            method: method,
            uri: url,
            qs: option.qs,
            json: option.json || true,
            form: option.json || body,
            body: option.json && body,
            headers: option.headers
        }, function (err, response, body) {
            if (err) {
                error && error(err, body, response);
                return reject(err);
            }

            success && success(body, response);
            return resolve(body);
        });
    }).catch(function (e) {
        console.log(e);
    });
}

function get(url, option, success, error) {
    return send('GET', url, null, option, success, error);
}

function post(url, body, option, success, error) {
    return send('POST', url, body, option, success, error);
}

var version = '6.0.3';
var host = 'http://mobileapi.5sing.kugou.com';
var host2 = 'http://goapi.5sing.kugou.com';
var host3 = 'http://5sing.kugou.com';

/**
 * 获取轮播图列表
 * @param params {{advertId}}
 * @param success request success callback
 * @param error request fail callback
 */
function getAdvertisements(params, success, error) {
    var url = host + '/other/getAdvert',
        option = {
        qs: {
            advert_id: params.advertId,
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 获取每日推荐
 * @param params {{pageIndex, pageSize}}
 * @param success
 * @param error
 */
function getDailyRecommendSongs(params, success, error) {
    var url = host + '/song/getRecommendDailyList',
        option = {
        qs: {
            page: params.pageIndex,
            pagesize: params.pageSize,
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 获取专栏列表
 * @param success
 * @param error
 * @returns {*}
 */
function getSpecialColumn(success, error) {
    var url = host + '/song/GetRecommend',
        option = {
        qs: {
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 获取专栏详情
 * @param params {{channelId, pageIndex, pageSize}}
 * @param success
 * @param error
 * @returns {*}
 */
function getSpecialColumnDetail(params, success, error) {
    var url = host + '/song/GetRecommendSingle',
        option = {
        qs: {
            channel_id: params.channelId,
            page: params.pageIndex,
            pagesize: params.pageSize,
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 获取排行榜概览
 * @param success
 * @param error
 * @returns {*}
 */
function getRankOverview(success, error) {
    var url = host + '/rank/list',
        option = {
        qs: {
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 获取排行榜更新时间列表
 * @param success
 * @param error
 * @returns {*}
 */
function getRankUpdateList(success, error) {
    var url = host + '/song/listsupportcardcycle',
        option = {
        qs: {
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 获取排行榜详情
 * @param params {{id, pageIndex, pageSize, time}}
 * @param success
 * @param error
 * @returns {*}
 */
function getRankDetail(params, success, error) {
    var url = host + '/rank/detail',
        option = {
        qs: {
            id: params.id,
            pageindex: params.pageIndex,
            pagesize: params.pageSize,
            time: params.time,
            userfields: 'ID,NN,I,B,P,C,SX,E,M,VT,CT,TYC,TFC,TBZ,TFD,TFS,SC,YCRQ,FCRQ,CC,BG,DJ,RC,MC,AU,SR,SG,VG,ISC,F',
            songfields: 'ID,SN,SK,SW,SS,ST,SI,CT,M,S,ZQ,WO,ZC,HY,YG,CK,D,RQ,DD,E,R,RC,SG,C,CS,LV,LG,SY,UID,PT,SCSR,SC',
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 获取最后欢迎歌曲列表
 * @param params {{limit, pageIndex, pageSize, time}}
 * @param success
 * @param error
 * @returns {*}
 */
function getPopularSongs(params, success, error) {
    var url = host + '/song/listbysupportcard',
        option = {
        qs: {
            limit: params.limit,
            pageindex: params.pageIndex,
            pagesize: params.pageSize,
            time: params.time,
            userfields: 'ID,NN,I,B,P,C,SX,E,M,VT,CT,TYC,TFC,TBZ,TFD,TFS,SC,YCRQ,FCRQ,CC,BG,DJ,RC,MC,AU,SR,SG,VG,ISC,F',
            songfields: 'ID,SN,SK,SW,SS,ST,SI,CT,M,S,ZQ,WO,ZC,HY,YG,CK,D,RQ,DD,E,R,RC,SG,C,CS,LV,LG,SY,UID,PT,SCSR,SC',
            maxid: 0,
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 获取歌单列表
 * @param params {{pageIndex}}
 * @param success
 * @param error
 * @returns {*}
 */
function getSongCollections(params, success, error) {
    var url = host2 + '/getSongListSquareRecommended',
        option = {
        qs: {
            index: params.pageIndex,
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 筛选歌单
 * @param params {{label, pageIndex, pageSize}}
 * @param success
 * @param error
 * @returns {*}
 */
function getSongCollectionsByLabel(params, success, error) {
    var url = host2 + '/search/songSquare',
        option = {
        qs: {
            label: params.label,
            sortType: 0,
            pn: params.pageIndex,
            ps: params.pageSize,
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 获取歌单中歌曲列表
 * @param params {{id}}
 * @param success
 * @param error
 * @returns {*}
 */
function getSongsInSongCollections(params, success, error) {
    var url = host + '/song/getsonglistsong',
        option = {
        qs: {
            id: params.id,
            userfields: 'ID,NN,I,B,P,C,SX,E,M,VT,CT,TYC,TFC,TBZ,TFD,TFS,SC,YCRQ,FCRQ,CC,BG,DJ,RC,MC,AU,SR,SG,VG,ISC,F',
            songfields: 'ID,SN,SK,SW,SS,ST,SI,CT,M,S,ZQ,WO,ZC,HY,YG,CK,D,RQ,DD,E,R,RC,SG,C,CS,LV,LG,SY,UID,PT,SCSR,SC',
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 获取歌单详情
 * @param params {{id}}
 * @param success
 * @param error
 * @returns {*}
 */
function getSongCollection(params, success, error) {
    var url = host + '/song/getsonglist',
        option = {
        qs: {
            id: params.id,
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 获取歌手列表
 * @param params {{pageIndex, pageSize}}
 * @param success
 * @param error
 * @returns {*}
 */
function getSingers(params, success, error) {
    var url = host + '/user/listmusician',
        option = {
        qs: {
            pageindex: params.pageIndex,
            pagesize: params.pageSize,
            userfields: 'ID,NN,I,B,P,C,SX,E,M,VT,CT,TYC,TFC,TBZ,TFD,TFS,SC,YCRQ,FCRQ,CC,BG,DJ,RC,MC,AU,SR,SG,VG,ISC,F',
            songfields: 'ID,SN,SK,SW,SS,ST,SI,CT,M,S,ZQ,WO,ZC,HY,YG,CK,D,RQ,DD,E,R,RC,SG,C,CS,LV,LG,SY,UID,PT,SCSR,SC',
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 获取新入驻歌手列表
 * @param params {{pageIndex, pageSize}}
 * @param success
 * @param error
 * @returns {*}
 */
function getLatestSingers(params, success, error) {
    var url = host + '/musician/latestList',
        option = {
        qs: {
            pageindex: params.pageIndex,
            pagesize: params.pageSize,
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 获取用户信息
 * @param params {{userId}}
 * @param success
 * @param error
 * @returns {*}
 */
function getUserInfo(params, success, error) {
    var url = host + '/user/get',
        option = {
        qs: {
            userid: params.userId,
            userfields: 'ID,NN,I,B,P,C,SX,E,M,VT,CT,TYC,TFC,TBZ,TFD,TFS,SC,YCRQ,FCRQ,CC,BG,DJ,RC,MC,AU,SR,SG,VG,ISC,F',
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 获取该用户上传歌曲列表
 * @param params {{userId, songType, pageIndex, pageSize}}
 * @param success
 * @param error
 * @returns {*}
 */
function getUserSongs(params, success, error) {
    var url = host + '/song/user',
        option = {
        qs: {
            userid: params.userId,
            songtype: params.songType,
            pageindex: params.pageIndex,
            pagesize: params.pageSize,
            userfields: 'ID,NN,I,B,P,C,SX,E,M,VT,CT,TYC,TFC,TBZ,TFD,TFS,SC,YCRQ,FCRQ,CC,BG,DJ,RC,MC,AU,SR,SG,VG,ISC,F',
            songfields: 'ID,SN,SK,SW,SS,ST,SI,CT,M,S,ZQ,WO,ZC,HY,YG,CK,D,RQ,DD,E,R,RC,SG,C,CS,LV,LG,SY,UID,PT,SCSR,SC',
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 检查登录状态
 * @param params {{sign}}
 * @param success
 * @param error
 * @returns {*}
 */
function isLogin(params, success, error) {
    var url = host + '/user/checksign',
        option = {
        qs: {
            sign: params.sign,
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 获取关注歌手动态
 * @param params {{sign, pageIndex, pageSize}}
 * @param success
 * @param error
 * @returns {*}
 */
function getSingerDynamic(params, success, error) {
    var url = host + '/message/dynamic',
        option = {
        qs: {
            sign: params.sign,
            pageindex: params.pageIndex,
            pagesize: params.pageSize,
            fields: 'ID,NN,I,B,P,C,SX,E,M,VT,CT,TYC,TFC,TBZ,TFD,TFS,SC,DJ',
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 检查是否关注该歌手
 * @param params {{userId, sign}}
 * @param success
 * @param error
 * @returns {*}
 */
function checkFollowUser(params, success, error) {
    var url = host + '/follow/check',
        option = {
        qs: {
            followuserid: params.userId,
            sign: params.sign,
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 检查是否收藏该歌单
 * @param params {{id, sign}}
 * @param success
 * @param error
 * @returns {*}
 */
function checkSongCollection(params, success, error) {
    var url = host + '/song/songlistcollectioncheck',
        option = {
        qs: {
            id: params.id,
            sign: params.sign,
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 添加访问足迹
 * @param params {{userId, sign}}
 * @param success
 * @param error
 * @returns {*}
 */
function addVisited(params, success, error) {
    var url = host + '/user/addvisit',
        option = {
        qs: {
            owneruserid: params.userId,
            sign: params.sign,
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 获取广场列表
 * @param params {{sign, pageIndex, pageSize}}
 * @param success
 * @param error
 * @returns {*}
 */
function getSquareList(params, success, error) {
    var url = host + '/message/square',
        option = {
        qs: {
            ordering: 0,
            pageindex: params.pageIndex,
            pagesize: params.pageSize,
            sign: params.sign,
            fields: 'ID,NN,I,B,P,C,SX,E,M,VT,CT,TYC,TFC,TBZ,TFD,TFS,SC,DJ',
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 获取歌曲地址
 * @param params {{songType, songId}}
 * @param success
 * @param error
 */
function getSongAddr(params, success, error) {
    var url = host + '/song/getSongUrl',
        option = {
        qs: {
            songtype: params.songType,
            songid: params.songId,
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 搜索
 * @param params {{keyword, type, pageIndex, pageSize}}
 * @param success
 * @param error
 * @returns {*}
 */
function search(params, success, error) {
    var url = host2 + '/search/search',
        option = {
        qs: {
            k: params.keyword,
            t: function (params) {
                var type = 0;
                switch (params.type) {
                    case 'user':
                        type = 2;
                        break;
                    case 'collection':
                        type = 1;
                        break;
                    default:
                        type = 0;
                }
                return type;
            }(params),
            filterType: function (params) {
                var type = 0;
                switch (params.type) {
                    case 'yc':
                        type = 1;
                        break;
                    case 'fc':
                        type = 2;
                        break;
                    case 'bz':
                        type = 3;
                        break;
                    default:
                        type = 0;
                }
                return type;
            }(params),
            sortType: 0,
            pn: params.pageIndex,
            ps: params.pageSize,
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 登录
 * @param params {{username, password}}
 * @param success
 * @param error
 * @returns {*}
 */
function login(params, success, error) {
    var url = host3 + '/m/login.html',
        body = {
        name: params.username,
        pwd: params.password,
        remember: 'yes'
    };

    return post(url, body, { json: false }, function (body, response) {
        var cookies = response.headers['set-cookie'],
            sign = '',
            json = void 0;
        if (cookies) {
            cookies.filter(function (cookie) {
                return !~cookie.indexOf('5sing_auth=deleted;');
            }).forEach(function (cookie) {
                if (~cookie.indexOf('5sing_auth=')) {
                    sign = cookie.split(';')[0].replace('5sing_auth=', '');
                    return true;
                }
            });
        }

        if (sign) {
            json = {
                code: 200,
                success: true,
                message: '登录成功',
                sign: sign
            };
        } else {
            json = {
                code: 401,
                success: false,
                message: '登录失败'
            };
        }

        success(json, response);
        return json;
    }, error);
}

/**
 * 获取收藏的歌单
 * @param params {{sign , pageIndex, pageSize}}
 * @param success
 * @param error
 * @returns {*}
 */
function getMySongCollections(params, success, error) {
    var url = host + '/song/songlistcollectionlist',
        option = {
        qs: {
            pageindex: params.pageIndex,
            pagesize: params.pageSize,
            sign: params.sign,
            userfields: 'ID,NN,I,B,P,C,SX,E,M,VT,CT,TYC,TFC,TBZ,TFD,TFS,SC,YCRQ,FCRQ,CC,BG,DJ,RC,MC,AU,SR,SG,VG,ISC,F',
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 获取歌曲信息
 * @param params {{songId, songType}}
 * @param success
 * @param error
 * @returns {*}
 */
function getSong(params, success, error) {
    var url = host + '/song/newget',
        option = {
        qs: {
            songid: params.songId,
            songtype: params.songType,
            songfields: 'ID,SN,SK,SW,SS,ST,SI,CT,M,S,ZQ,WO,ZC,HY,YG,CK,D,RQ,DD,E,R,RC,SG,C,CS,LV,LG,SY,UID,PT,SCSR,SC',
            userfields: 'ID,NN,I',
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 获取歌曲支持信息
 * @param params {{songId, songType, sign}}
 * @param success
 * @param error
 * @returns {*}
 */
function getSongSupport(params, success, error) {
    var url = host + '/song/songwithuser',
        option = {
        qs: {
            songid: params.songId,
            songtype: params.songType,
            sign: params.sign,
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 获取评论
 * @param params {{id, kind}}
 * @param success
 * @param error
 */
function getComments(params, success, error) {
    var url = host + '/comments/list',
        option = {
        qs: {
            rootId: params.id,
            rootKind: params.kind,
            maxId: 0,
            fields: 'ID,NN,I,B,P,C,SX,E,M,VT,CT,TYC,TFC,TBZ,TFD,TFS,SC,DJ',
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 获取歌曲贡献榜
 * @param params {{songId, songType, limit}}
 * @param success
 * @param error
 * @returns {*}
 */
function getSongFans(params, success, error) {
    var url = host + '/song/listforsupportcardfans',
        option = {
        qs: {
            songid: params.songId,
            songtype: params.songType,
            limit: params.limit,
            fields: 'ID,NN,I,B,P,C,SX,E,M,VT,CT,TYC,TFC,TBZ,TFD,TFS,SC',
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 获取歌手关注列表
 * @param params {{userId, pageIndex, pageSize}}
 * @param success
 * @param error
 */
function getUserCollections(params, success, error) {
    var url = host + '/follow/list',
        option = {
        qs: {
            userid: params.userId,
            pageindex: params.pageIndex,
            pagesize: params.pageSize,
            fields: 'ID,NN,I,B,P,C,SX,E,M,VT,CT,TYC,TFC,TBZ,TFD,TFS,SC,YCRQ,FCRQ,CC,BG,DJ,RC,MC,AU,SR,SG,VG,ISC,F',
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 获取歌手粉丝列表
 * @param params {{userId, pageIndex, pageSize}}
 * @param success
 * @param error
 */
function getUserFans(params, success, error) {
    var url = host + '/fans/list',
        option = {
        qs: {
            userid: params.userId,
            pageindex: params.pageIndex,
            pagesize: params.pageSize,
            fields: 'ID,NN,I,B,P,C,SX,E,M,VT,CT,TYC,TFC,TBZ,TFD,TFS,SC,YCRQ,FCRQ,CC,BG,DJ,RC,MC,AU,SR,SG,VG,ISC,F',
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * 获取歌手访客列表
 * @param params {{sign, userId}}
 * @param success
 * @param error
 */
function getUserQuests(params, success, error) {
    var url = host + '/user/visitors',
        option = {
        qs: {
            sign: params.sign,
            owneruserid: params.userId,
            fields: 'ID,NN,I,B,P,C,SX,E,M,VT,CT,TYC,TFC,TBZ,TFD,TFS,SC,YCRQ,FCRQ,CC,BG,DJ,RC,MC,AU,SR,SG,VG,ISC,F',
            version: version
        }
    };

    return get(url, option, success, error);
}

/**
 * Created by zhaofeng on 7/9/16.
 */
var pkg = require('../package.json');
var SingSdk = {};

SingSdk.version = pkg.version;

SingSdk.isLogin = isLogin;

SingSdk.search = search;

SingSdk.login = login;

SingSdk.getAdvertisements = getAdvertisements;

SingSdk.getSpecialColumn = getSpecialColumn;

SingSdk.getSpecialColumnDetail = getSpecialColumnDetail;

SingSdk.getRankOverview = getRankOverview;

SingSdk.getRankUpdateList = getRankUpdateList;

SingSdk.getRankDetail = getRankDetail;

SingSdk.getPopularSongs = getPopularSongs;

SingSdk.getSongCollections = getSongCollections;

SingSdk.getSongCollectionsByLabel = getSongCollectionsByLabel;

SingSdk.getSongsInSongCollections = getSongsInSongCollections;

SingSdk.getSongCollection = getSongCollection;

SingSdk.getSingers = getSingers;

SingSdk.getLatestSingers = getLatestSingers;

SingSdk.getUserInfo = getUserInfo;

SingSdk.getUserSongs = getUserSongs;

SingSdk.getDailyRecommendSongs = getDailyRecommendSongs;

SingSdk.getSingerDynamic = getSingerDynamic;

SingSdk.checkFollowUser = checkFollowUser;

SingSdk.checkSongCollection = checkSongCollection;

SingSdk.addVisited = addVisited;

SingSdk.getSquareList = getSquareList;

SingSdk.getSongAddr = getSongAddr;

SingSdk.getMySongCollections = getMySongCollections;

SingSdk.getSong = getSong;

SingSdk.getSongSupport = getSongSupport;

SingSdk.getComments = getComments;

SingSdk.getSongFans = getSongFans;

SingSdk.getUserCollections = getUserCollections;

SingSdk.getUserFans = getUserFans;

SingSdk.getUserQuests = getUserQuests;

module.exports = SingSdk;