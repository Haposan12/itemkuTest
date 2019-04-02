function solution(record){
  var answer = [];
  var wordSplit = [];
  var status = new Object();
  var status = {"Enter":"Came in","Leave":"has left"};

  var namaUser = new Object();
  var namaUser = {};

  for(var i in record){
    var message = record[i].split(" ");
    wordSplit.push(message);
    if(wordSplit[i][2] != undefined){
      namaUser[wordSplit[i][1]] = wordSplit[i][2]; 
    }  
  }

  for(var key in wordSplit){
    var i = namaUser[wordSplit[key][1]];
    var j = status[wordSplit[key][0]];
    if((i&&j) != undefined){
      answer.push(i + ' ' + j);
    }
  }
  
  return answer;
}

var record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]

console.log(solution(record));