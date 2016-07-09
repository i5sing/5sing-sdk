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
            body: body,
            headers: option.headers
        }, function (err, response, body) {
            try {
                body = JSON.parse(body);
            } catch (e) {}

            if (err) {
                error(err, body, response);
                return reject(err, body, response);
            }

            success(body, response);
            return resolve(body, response);
        });
    });
}

function get(url, option, success, error) {
    return send('GET', url, null, option, success, error);
}

var version = '6.0.3';
var host = 'http://mobileapi.5sing.kugou.com';
var host2 = 'http://goapi.5sing.kugou.com';

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
    var url = host + '/song/listsupportcardcycle',
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
    var url = host + '/song/listsupportcardcycle',
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
    var url = host + '/song/listsupportcardcycle',
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
    var url = host + '/musician/latestList',
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
    var url = host + '/musician/latestList',
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
 * Created by zhaofeng on 7/9/16.
 */
var pkg = require('../package.json');
var SingSdk = {};

SingSdk.version = pkg.version;

SingSdk.getAdvertisements = getAdvertisements;

SingSdk.getSpecialColumn = getSpecialColumn;

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

module.exports = SingSdk;