/**
 * Created by zhaofeng on 7/9/16.
 */
const pkg = require('../package.json');
import {
    isLogin,
    search,
    login,
    getAdvertisements,
    getSpecialColumn,
    getSpecialColumnDetail,
    getRankOverview,
    getRankUpdateList,
    getRankDetail,
    getPopularSongs,
    getSongCollections,
    getSongCollectionsByLabel,
    getSongsInSongCollections,
    getSongCollection,
    getSingers,
    getLatestSingers,
    getUserInfo,
    getUserSongs,
    getDailyRecommendSongs,
    getSingerDynamic,
    checkFollowUser,
    checkSongCollection,
    checkSong,
    addVisited,
    getSquareList,
    getSongAddr,
    getMySongCollections,
    getSong,
    getSongSupport,
    getComments,
    getSongFans,
    getUserCollections,
    getUserFans,
    getUserQuests,
    getMySongs,
    addToMyCollections,
    removeFromMyCollections,
    syncMySongs,
    addToMyAttention,
    removeFromMyAttention,
    like,
    getMyRelated,
    getPrivateMessage,
    getTopics,
    getTips
} from './api';

let SingSdk = {};

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

SingSdk.checkSong = checkSong;

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

SingSdk.getMySongs = getMySongs;

SingSdk.addToMyCollections = addToMyCollections;

SingSdk.removeFromMyCollections = removeFromMyCollections;

SingSdk.syncMySongs = syncMySongs;

SingSdk.addToMyAttention = addToMyAttention;

SingSdk.removeFromMyAttention = removeFromMyAttention;

SingSdk.like = like;

SingSdk.getMyRelated = getMyRelated;

SingSdk.getPrivateMessage = getPrivateMessage;

SingSdk.getTopics = getTopics;

SingSdk.getTips = getTips;

export default SingSdk;