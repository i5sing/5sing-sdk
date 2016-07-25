/**
 * Created by zhaofeng on 7/9/16.
 */
var assert = require('assert'),
    SingSdk = require('../dist/SingSDK.common');

describe('SingSdk', function () {
    // test cases
    describe('#getAdvertisments(advertId)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getAdvertisements({
                advertId: 23
            }, function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getSpecialColumn()', function () {
        it('respond with matching records', function (done) {
            SingSdk.getSpecialColumn(function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getRankOverview()', function () {
        it('respond with matching records', function (done) {
            SingSdk.getRankOverview(function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getRankUpdateList()', function () {
        it('respond with matching records', function (done) {
            SingSdk.getRankUpdateList(function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getRankDetail(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getRankDetail({
                id: 'yc',
                pageIndex: 1,
                pageSize: 20,
                time: '20160704'
            }, function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getPopularSongs(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getPopularSongs({
                limit: 20,
                time: '20160704'
            }, function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getSongCollections(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getSongCollections({
                pageIndex: 1
            }, function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getSongCollectionsByLabel(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getSongCollectionsByLabel({
                label: '流行',
                pageSize: 20,
                pageIndex: 1
            }, function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getSongsInSongCollections(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getSongsInSongCollections({
                id: '56f97a82739471294481e5ca'
            }, function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getSongCollection(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getSongCollection({
                id: '56f97a82739471294481e5ca'
            }, function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getSingers(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getSingers({
                pageIndex: 1,
                pageSize: 20
            }, function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getLatestSingers(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getLatestSingers({
                pageIndex: 1,
                pageSize: 20
            }, function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getUserInfo(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getUserInfo({
                userId: '10657016'
            }, function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getUserSongs(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getUserSongs({
                userId: '10657016',
                pageIndex: 1,
                pageSize: 20,
                songType: 'yc'
            }, function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getSpecialColumnDetail(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getSpecialColumnDetail({
                channelId: 1,
                pageIndex: 1,
                pageSize: 20
            }, function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#isLogin(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.isLogin({
                sign: 'token'
            }, function (result) {
                assert.equal(result.success, false);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#login(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.login({
                username: 'test@test.com',
                password: 'test'
            }, function (result) {
                assert.equal(result.success, false);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#search(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.search({
                keyword: 'test',
                type: 'user',
                pageIndex: 1,
                pageSize: 20
            }, function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#search(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.search({
                keyword: 'test',
                type: 'user',
                pageIndex: 1,
                pageSize: 20
            }, function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getDailyRecommendSongs(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getDailyRecommendSongs({
                pageIndex: 1,
                pageSize: 20
            }, function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getSingerDynamic(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getSingerDynamic({
                sign: 'token',
                pageIndex: 1,
                pageSize: 20
            }, function (result) {
                assert.equal(result.success, false);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#checkFollowUser(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.checkFollowUser({
                sign: 'token',
                userId: 'userId'
            }, function (result) {
                assert.equal(result.success, false);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#checkSongCollection(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.checkSongCollection({
                sign: 'token',
                id: 'songId'
            }, function (result) {
                assert.equal(result.success, false);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#addVisited(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.addVisited({
                userId: 'userId',
                sign: 'token'
            }, function (result) {
                assert.equal(result.success, false);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getSquareList(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getSquareList({
                pageIndex: 0,
                pageSize: 20,
                sign: 'token'
            }, function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getSongAddr(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getSongAddr({
                songId: '14655530',
                songType: 'fc'
            }, function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getMySongCollections(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getMySongCollections({
                sign: 'token',
                pageIndex: 1,
                pageSize: 20
            }, function (result) {
                assert.equal(result.success, false);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getSong(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getSong({
                songId: '14655530',
                songType: 'fc'
            }, function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getSongSupport(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getSongSupport({
                songId: '14655530',
                songType: 'fc',
                sign: 'token'
            }, function (result) {
                assert.equal(result.success, false);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getComments(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getComments({
                id: '11809746',
                kind: 'fc'
            }, function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getSongFans(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getSongFans({
                songId: '11809746',
                songType: 'fc',
                limit: 10
            }, function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getUserCollections(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getUserCollections({
                userId: '13816396',
                pageIndex: 1,
                pageSize: 20
            }, function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getUserFans(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getUserFans({
                userId: '13816396',
                pageIndex: 1,
                pageSize: 20
            }, function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getUserQuests(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getUserQuests({
                userId: '13816396',
                sign: 'token'
            }, function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getMySongs(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getMySongs({
                userId: '13816396'
            }, function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#addToMyCollections(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.addToMyCollections({
                userId: '13816396',
                sign: 'token'
            }, function (result) {
                assert.equal(result.success, false);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#removeFromMyAttention(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.removeFromMyAttention({
                userId: '13816396',
                sign: 'token'
            }, function (result) {
                assert.equal(result.success, false);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#like(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.like({
                id: '13816396',
                type: 'yc',
                sign: 'token',
                like: true
            }, function (result) {
                assert.equal(result.success, false);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getMyRelated(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getMyRelated({
                sign: 'token',
            }, function (result) {
                assert.equal(result.success, false);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getPrivateMessage(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getPrivateMessage({
                userId: '13816396',
                sign: 'token',
                pageIndex: 1,
                pageSize: 20
            }, function (result) {
                assert.equal(result.success, false);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getTopics(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getTopics(function (result) {
                assert.equal(!!result, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#getTips(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.getTips({
                sign: 'token',
            }, function (result) {
                assert.equal(result.success, true);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });

    describe('#syncMySongs(params)', function () {
        it('respond with matching records', function (done) {
            SingSdk.syncMySongs({
                sign: 'token',
                userId: '13816396',
                add: [],
                delete: []
            }, function (result) {
                assert.equal(result.success, false);
                done();
            }, function (error) {
                console.log(error);
            });
        });
    });
});