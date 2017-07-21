const Xray = require('x-ray');
const x = Xray();
const fs = require('fs');
const download = require('download');
var shell = require('shelljs');
var dateFormat = require('dateformat');
var async = require('async');
var downloadFileSync = require('download-file-sync');
var mkdirp = require('mkdirp');
var moment = require('moment-timezone');

moment.tz.setDefault('Asia/Shanghai');
var mp3Duration = require('mp3-duration');
var deasync = require('deasync');
var mp3DurationSync = deasync(mp3Duration);
var filesize = require('file-size');


var results = JSON.parse(fs.readFileSync('./result_songs_with_lrc.json', 'utf8'));

var audios = [];

results.forEach(function(bible, indexId) {

    var audio = {};
    audio.duration = 180;
    audio.size = "2M";

    audio.path = bible.path;

    audio.id = 504 * 1000000 + indexId + 1;
    audio.title = bible.title;
    audio.albumId = 504;
    audio.albumName = "良友诗歌";
    audio.albumtitle = "良友诗歌" + "(" + (indexId + 1) + ")";
    audio.lrc = bible.songLrc;



    console.log(audio);
    audios.push(audio);



    // fs.writeFileSync("./" + artist.shortName + audio.time + ".json", JSON.stringify(audio, null, '\t'));




});

fs.writeFileSync("./liangyou_shige_songs.json", JSON.stringify(audios, null, '\t'));
// fs.writeFileSync("./build_bible_albums.json", JSON.stringify(albums, null, '\t'));