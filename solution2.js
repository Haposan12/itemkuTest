function solution(N,users) { 
  var answer = [];
  var arrHasil = [];
  var hasil;
  var pembilang = 0;
  var penyebut = 0;
  var map1 = new Map(); 

  for(i=1;i<=N;i++){
    //count[];
    for(j=0;j<users.length;j++){
      if(users[j] == i){
        pembilang++;
      }
      if(users[j] >= i){
        penyebut++;
      }
    }
    hasil = pembilang/penyebut;
    arrHasil.push(hasil);
    
    map1.set(i,hasil);
    pembilang = 0;
    penyebut = 0;
  }
  arrHasil.sort();
  arrHasil.reverse();  
  //console.log(map1.get(1));
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

var user = [2,1,2,6,2,4,3,3];

console.log(solution(5,user)); 