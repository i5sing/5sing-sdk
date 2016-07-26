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
                fields: 'ID,NN,I,B,P,C,SX,E,M,VT,CT,TYC,TFC,TBZ,TFD,TFS,SC,YCRQ,FCRQ,CC,BG,DJ,RC,MC,AU,SR,SG,VG,ISC,F',
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
 * 检查登录状态
 * @param params {{sign}}
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
 * 检查是否收藏歌曲
 * @param params {[songId, songType, sign]}
 * @param success
 * @param error
 * @returns {*}
 */
export function checkSong(params, success, error) {
    let url = `${host}/song/songwithuser`,
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
 * 添加访问足迹
 * @param params {{userId, sign}}
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
            userId = '',
            json;
        if (cookies) {
            cookies.filter(cookie => {
                return !~cookie.indexOf('deleted');
            }).forEach(cookie => {
                if (~cookie.indexOf('5sing_auth=')) {
                    sign = cookie.split(';')[0].replace('5sing_auth=', '');
                    return true;
                }

                if (~cookie.indexOf('5sing_user_info=')) {
                    userId = cookie.match(/[0-9][0-9]{4,}/)[0];
                }
            })
        }

        if (sign) {
            json = {
                code: 200,
                success: true,
                message: '登录成功',
                sign: sign,
                userId: userId
            };
        } else {
            json = {
                code: 401,
                success: false,
                message: '登录失败'
            };
        }

        success && success(json, response);
        return json;
    }, (err) => {
        error && error(err);
    });
}

/**
 * 获取收藏的歌单
 * @param params {{sign , pageIndex, pageSize}}
 * @param success
 * @param error
 * @returns {*}
 */
export function getMySongCollections(params, success, error) {
    let url = `${host}/song/songlistcollectionlist`,
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
 * 获取收藏的歌曲
 * @param params {{userId}}
 * @param success
 * @param error
 * @returns {*}
 */
export function getMySongs(params, success, error) {
    let url = `${host}/song/collection`,
        option = {
            qs: {
                userid: params.userId,
                pageindex: 1,
                pagesize: 9223372036854775807,
                songfields: 'ID,SN,FN,SK,UID,ST,DD',
                userfields: 'ID,NN,I',
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
export function getSong(params, success, error) {
    let url = `${host}/song/newget`,
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
export function getSongSupport(params, success, error) {
    let url = `${host}/song/songwithuser`,
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
export function getComments(params, success, error) {
    let url = `${host}/comments/list`,
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
export function getSongFans(params, success, error) {
    let url = `${host}/song/listforsupportcardfans`,
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
export function getUserCollections(params, success, error) {
    let url = `${host}/follow/list`,
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
export function getUserFans(params, success, error) {
    let url = `${host}/fans/list`,
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
export function getUserQuests(params, success, error) {
    let url = `${host}/user/visitors`,
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
 * 收藏歌单
 * @param params {{id, sign}}
 * @param success
 * @param error
 * @returns {*}
 */
export function addToMyCollections(params, success, error) {
    let url = `${host}/song/songlistcollectionadd`,
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
 * 取消收藏歌单
 * @param params {{id, sign}}
 * @param success
 * @param error
 * @returns {*}
 */
export function removeFromMyCollections(params, success, error) {
    let url = `${host}/song/songlistcollectiondelete`,
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
 * 同步我收藏的歌曲
 * @param params {{userId, del, add}}
 * @param success
 * @param error
 * @returns {*}
 */
export function syncMySongs(params, success, error) {
    let url = `${host2}/postLocalMusicbox`,
        body = {
            "Uid": params.userId,
            "DataDel": params.del,
            "DataAdd": params.add
        };
    return post(url, body, {json: true}, success, error);
}

/**
 * 添加歌手到我的关注
 * @param params {{userId, sign}}
 * @param success
 * @param error
 * @returns {*}
 */
export function addToMyAttention(params, success, error) {
    let url = `${host}/follow/create`,
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
 * 从我的关注中移除歌手
 * @param params {{userId, sign}}
 * @param success
 * @param error
 * @returns {*}
 */
export function removeFromMyAttention(params, success, error) {
    let url = `${host}/follow/delete`,
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
 * 点赞
 * @param params {{id, type, sign, like}}
 * @param success
 * @param error
 * @returns {*}
 */
export function like(params, success, error) {
    let url = `${host}/message/operateLike`,
        option = {
            qs: {
                id: params.id,
                rootKind: params.type,
                sign: params.sign,
                clientliked: !!params.like ? 0 : 1,
                version: version
            }
        };

    return get(url, option, success, error);
}

/**
 * 与我相关
 * @param params {{sign}}
 * @param success
 * @param error
 * @returns {*}
 */
export function getMyRelated(params, success, error) {
    let url = `${host}/message/related`,
        option = {
            qs: {
                maxId: 0,
                fields: 'ID,NN,I,B,P,C,SX,E,M,VT,CT,TYC,TFC,TBZ,TFD,TFS,SC,DJ',
                sign: params.sign,
                version: version
            }
        };

    return get(url, option, success, error);
}

/**
 * 获取私信
 * @param params {{userId, sign, pageIndex, pageSize}}
 * @param success
 * @param error
 * @returns {*}
 */
export function getPrivateMessage(params, success, error) {
    let url = `${host}/message/showletterbypage`,
        option = {
            qs: {
                relationuserid: params.userId,
                sign: params.sign,
                page: params.pageIndex,
                pagesize: params.pageSize,
                version: version
            }
        };

    return get(url, option, success, error);
}

/**
 * 获取主题列表
 * @param success
 * @param error
 * @returns {*}
 */
export function getTopics(success, error) {
    let url = `http://topic.5sing.kugou.com/index.php`,
        option = {
            qs: {
                m: 'index',
                f: 'allThemes'
            }
        };

    return get(url, option, success, error);
}

/**
 * 获取总览
 * @param params {{sign}}
 * @param success
 * @param error
 * @returns {*}
 */
export function getTips(params, success, error) {
    let url = `${host}/message/tips`,
        option = {
            qs: {
                sign: params.sign,
                version: version
            }
        };

    return get(url, option, success, error);
}