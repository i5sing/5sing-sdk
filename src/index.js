/**
 * Created by zhaofeng on 7/9/16.
 */
const pkg = require('../package.json');
import {
    getAdvertisements,
    getSpecialColumn,
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
    getUserSongs
} from './api';

let SingSdk = {};

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

export default SingSdk;