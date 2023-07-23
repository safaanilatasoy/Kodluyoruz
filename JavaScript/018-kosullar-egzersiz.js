let examGrade = prompt("Puan Girin")
let textInfo;

if(examGrade >= 0 && examGrade <=100){
    // tüm if yapıları buraya gelsin

    if (examGrade >= 90) {
  textInfo = "AA";
} else if (examGrade >= 85) {
  textInfo = "BA";
} else if (examGrade >= 80) {
  textInfo = "BB";
} else if (examGrade >= 75) {
  textInfo = "CB";
} else if (examGrade >= 70) {
  textInfo = "CC";
} else if (examGrade >= 65) {
  textInfo = "DC";
} else if (examGrade >= 60) {
  textInfo = "DD";
} else if (examGrade >= 50) {
  textInfo = "FD";
} else if (examGrade < 50) {
  textInfo = "FF";
}
}else {
    textInfo = "Bilgiler Dogru Degil";
}


let info = document.querySelector("#info")
info.innerHTML = '${textInfo} -> ${examGrade}'



