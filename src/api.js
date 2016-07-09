/**
 * Created by zhaofeng on 7/9/16.
 */
import {get} from './req';

const version = '6.0.3';
const host = 'http://mobileapi.5sing.kugou.com';
const host2 = 'http://goapi.5sing.kugou.com';

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
    let url = `${host}/song/listsupportcardcycle`,
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
    let url = `${host}/song/listsupportcardcycle`,
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
    let url = `${host}/song/listsupportcardcycle`,
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
    let url = `${host}/musician/latestList`,
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
    let url = `${host}/musician/latestList`,
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