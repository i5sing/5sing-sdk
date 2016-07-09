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
                pageSize: 1
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
});