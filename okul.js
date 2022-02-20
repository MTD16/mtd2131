const Discord = require('discord.js');

exports.run = async(client, message, args) => {

  var mailler = ["okul-ölüm@gmail.com","Ziya.is.dead@hotmail.com","Meb.3131@gmail.com"];

var mail = mailler[Math.floor(Math.random() * mailler.length)]

message.yanıtla('okulu kapatma işlemi başlatıldı!').then(hackmsj => {

setTimeout(() => {

hackmsj.edit('Meb gizli e-postası aranıyor')

}, 3000)

setTimeout(() => {

hackmsj.edit('Meb gizli e-postası bulundu: '+mail)

}, 6000)

setTimeout(() => {

hackmsj.edit('IP adresi taranıyor...')

}, 9000)

setTimeout(() => {

hackmsj.edit('IP adresi bulundu: 31.314.134.986')

}, 12000)

setTimeout(() => {

hackmsj.edit('`Okullar kapandı` adlı dosya yükleniyor')

}, 15000)

setTimeout(() => {

hackmsj.edit('Okullar kapandı dosya yüklendi herkese açık bir şekilde paylaşıldı!')

}, 18000)

setTimeout(() => {

hackmsj.edit('Okullar başarılı bir şekilde kapatıldı 😎')

}, 21000)

})

};

exports.conf = {

aliases: []

};

exports.help = {

name: "okul-kapat",

description: "", 

usage: ""

}; 

