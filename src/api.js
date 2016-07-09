/**
 * Created by zhaofeng on 7/9/16.
 */
import {get, post} from './req';

const version = '6.0.3';
const host = 'http://mobileapi.5sing.kugou.com';
const host2 = 'http://goapi.5sing.kugou.com';
const host3 = 'http://5sing.kugou.com';

/**
 * 获取轮播图列表
 * @param params {{advertId}}
 * @param success request success callback
 * @param error request fail callback
 */
export function getAdvertisements(params, success, error) {
    let url = `${host}/other/getAdvert`,
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
export function getDailyRecommendSongs(params, success, error) {
    let url = `${host}/song/getRecommendDailyList`,
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
export function getSpecialColumn(success, error) {
    let url = `${host}/song/GetRecommend`,
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
export function getSpecialColumnDetail(params, success, error) {
    let url = `${host}/song/GetRecommendSingle`,
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
export function getRankOverview(success, error) {
    let url = `${host}/rank/list`,
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
export function getRankUpdateList(success, error) {
    let url = `${host}/song/listsupportcardcycle`,
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
export function getRankDetail(params, success, error) {
    let url = `${host}/rank/detail`,
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
export function getPopularSongs(params, success, error) {
    let url = `${host}/song/listbysupportcard`,
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
export function getSongCollections(params, success, error) {
    let url = `${host2}/getSongListSquareRecommended`,
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
export function getSongCollectionsByLabel(params, success, error) {
    let url = `${host2}/search/songSquare`,
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
export function getSongsInSongCollections(params, success, error) {
    let url = `${host}/song/getsonglistsong`,
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
export function getSongCollection(params, success, error) {
    let url = `${host}/song/getsonglist`,
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
export function getSingers(params, success, error) {
    let url = `${host}/user/listmusician`,
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
export function getLatestSingers(params, success, error) {
    let url = `${host}/musician/latestList`,
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
export function getUserInfo(params, success, error) {
    let url = `${host}/user/get`,
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
export function getUserSongs(params, success, error) {
    let url = `${host}/song/user`,
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
 * 检查登录状态 {{sign}}
 * @param params
 * @param success
 * @param error
 * @returns {*}
 */
export function isLogin(params, success, error) {
    let url = `${host}/user/checksign`,
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
export function getSingerDynamic(params, success, error) {
    let url = `${host}/message/dynamic`,
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
export function checkFollowUser(params, success, error) {
    let url = `${host}/follow/check`,
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
export function checkSongCollection(params, success, error) {
    let url = `${host}/song/songlistcollectioncheck`,
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
 * @param params
 * @param success
 * @param error
 * @returns {*}
 */
export function addVisited(params, success, error) {
    let url = `${host}/user/addvisit`,
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
export function getSquareList(params, success, error) {
    let url = `${host}/message/square`,
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
export function getSongAddr(params, success, error) {
    let url = `${host}/song/getSongUrl`,
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
export function search(params, success, error) {
    let url = `${host2}/search/search`,
        option = {
            qs: {
                k: params.keyword,
                t: ((params) => {
                    let type = 0;
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
                })(params),
                filterType: ((params) => {
                    let type = 0;
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
                })(params),
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
export function login(params, success, error) {
    let url = `${host3}/m/login.html`,
        body = {
            name: params.username,
            pwd: params.password,
            remember: 'yes'
        };

    return post(url, body, {json: false}, (body, response) => {
        let cookies = response.headers['set-cookie'],
            sign = '',
            json;
        if (cookies) {
            cookies.filter(cookie => {
                return !~cookie.indexOf('5sing_auth=deleted;');
            }).forEach(cookie => {
                if (~cookie.indexOf('5sing_auth=')) {
                    sign = cookie.split(';')[0].replace('5sing_auth=', '');
                    return true;
                }
            })
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