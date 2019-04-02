function solution(N,users) { 
  var answer = [];
  var arrHasil = [];
  var hasil;
  var pembilang = 0;//pembilang adalah jumlah pemain yang belum menyelesaikan stage tertentu
  var penyebut = 0;//penyebut adalah jumlah pemain yang masuk ke stage tersebut
  var map1 = new Map();//map untuk menampung hasil pembilang/penyebut 

  //menghitung berapa penyebut dan pembilang
  for(i=1;i<=N;i++){
    
    for(j=0;j<users.length;j++){
      if(users[j] == i){
        pembilang++;
      }
      if(users[j] >= i){
        penyebut++;
      }
    }
    hasil = pembilang/penyebut;

    //hasil akan dimasukkan ke dalam array
    arrHasil.push(hasil);
    
    //hasil juga dimasukkan ke dalam map dengan key i
    map1.set(i,hasil);
    pembilang = 0;
    penyebut = 0;
  }
  arrHasil.sort();//array hasil disort secara ascending
  arrHasil.reverse();//array hasil yang sudah disort direverse(untuk sort descending)  
  
  //looping untuk mengganti hasil menjadi index stagenya
  var key;
  for(k=0;k<arrHasil.length;k++){
    for(l=1;l<=N;l++){
      key = map1.get(l);
      if(arrHasil[k] == key && !answer.includes(l)){
        answer.push(l);
      }
    }
  }
  return answer;
} 

//testing
var user = [2,1,2,6,2,4,3,3];

console.log(solution(5,user)); 

//answer : [3,4,2,1,5]
