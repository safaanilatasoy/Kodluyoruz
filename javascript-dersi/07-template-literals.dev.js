"use strict";

// Template literals çoklu satır yazıları sırasında bize büyük bir yazım kolaylığı sağlar
var username = "anıl";
var DOMAIN = "kodluyoruz.org";
var email = username + "@" + DOMAIN; //console.log("Merhaba", username, "sitemize hoşgeldin", "main adresin:", email)

var info = "Merhaba ".concat(username, " sitemize ho\u015Fgeldin.. mail adresin: ").concat(email, "\n\n\nmail adresinin uzunlu\u011Fu: ").concat(email.length, "\nborcunuz: ").concat((2 + 3) * 10, " TL\ng\xFCn\xFCn saat bilgisi: ").concat(new Date().getHours(), "\n\nk\u0131sa isminiz: ").concat(username[0], ".\n");
console.log(info);