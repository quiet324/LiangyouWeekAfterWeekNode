const fs = require('fs');
const Xray = require('x-ray');
const x = Xray();
const download = require('download');
var shell = require('shelljs');
var dateFormat = require('dateformat');
var async = require('async');
var downloadFileSync = require('download-file-sync');
var schedule = require('node-schedule');

var rule = new schedule.RecurrenceRule();
// rule.dayOfWeek = [0, new schedule.Range(4, 6)];
rule.hour = [0, 1, 6, 9, 14, 17, 21];
rule.minute = 5;


var mkdirp = require('mkdirp');


// var moment = require('moment');
var moment = require('moment-timezone');

moment.tz.setDefault('Asia/Shanghai');


var audios = [];

var names = JSON.parse(fs.readFileSync('./cw2015_names_with_dates.json', 'utf8'));
names.forEach(function(name, indexId) {
    var audio = {};
    audio.duration = 860;
    audio.size = "6.9M";
    audio.path = "https://rawcdn.githack.com/quiet324/LiangYouResourceCW2015/170708/cw2015" + '/' + name.name;
    audio.id = 5000 * 1000000 + indexId + 1;
    audio.albumId = 5000;
    audio.albumName = "《齐来颂扬》2015";
    audio.albumtitle = "《齐来颂扬》2015" + "(" + (indexId + 1) + ")";
    audio.title = "齐来颂扬-" + name.date;

    console.log(audio);
    audios.push(audio);

});

fs.writeFile("./cw2015_songs.json", JSON.stringify(audios, null, '\t'));




// console.log(dates);



// var _getAllFilesFromFolder = function(dir) {

//     var filesystem = require("fs");
//     var results = [];

//     filesystem.readdirSync(dir).forEach(function(file) {

//         results.push(file);

//     });

//     return results;

// };

// const files = _getAllFilesFromFolder(__dirname + "/cw2015");
// console.log(files);
// fs.writeFile("./cw2015_names.json", JSON.stringify(files, null, '\t'));

// const audios = [];

// files.forEach(function(file, arrayIndex) {
//     console.log(file);

//     // const audio = {};

//     // fs.rename(__dirname + "/files/" + file, __dirname + "/files/" + 'sundazhong0' + (arrayIndex + 1) + '.mp3', function(err) {
//     //     if (err) console.log('ERROR: ' + err);
//     // });

//     // audio.title = file.substring(2, file.indexOf('.'));
//     // audio.path = "https://rawcdn.githack.com/quiet324/LiangYouAlbums3/170702/sundazhong/sundazhong0" + (arrayIndex + 1) + '.mp3';
//     // audio.duration = 2400;
//     // audio.size = "40M";
//     // audio.albumName = "《与神同行》孙大中";
//     // audio.albumId = 199;
//     // audio.id = 199888180 + arrayIndex;
//     // // audio.id = _.last(results).id + 1 + arrayIndex;

//     // audio.albumtitle = "《与神同行》孙大中(" + (arrayIndex + 1) + ")";

//     // audios.push(audio);

// });


// // fs.writeFile("./sundazhong.json", JSON.stringify(audios, null, '\t'));


// // fs.writeFile("./voschildrenbible.json", JSON.stringify(results, null, '\t'));