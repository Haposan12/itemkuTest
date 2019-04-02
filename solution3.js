function solution(relation){
  var answer = 0;
  var pisah = [];
  var fix = [];
    
  //looping untuk menjadikan array relasi sesuai dengan atribut masing-masing
  //contoh: [[ '100', '200', '300', '400', '500', '600' ]]
  for(i=0; i<relation[0].length; i++){
      for(a in relation){
          pisah.push(relation[a][i]);
      }
      fix.push(pisah);
      pisah = [];
  }

  var indexDistinct = [];//array untuk menampung index atribut yang memiliki value yang redundant

  //mencari apakah ada duplikasi pada setiap value di masing-masing atribut menggunakan fungsi checkDistinct
  //jika di atribut tersebut tidak ada value yang berulang, maka answer bertambah 1
  //jika tidak index array atribut akan ditampung pada array  
  for(a in fix){
    var x = checkDistinct(fix[a]);
    if(x == 0){
      answer++;
    }else{
      indexDistinct.push(a);
    }
  }
  
  //menghitung berapa jumlah kombinasi antara index yang memiliki value yang berulang
  var jumlahKombinasi = 0;
  for(a in indexDistinct){
    for(b in indexDistinct){
      if(a<b){
        jumlahKombinasi++;
      }
    }
  }
  
  //array 2 dimensi dengan size sesuai dengan jumlah kombinasi
  com = new Array(jumlahKombinasi);
 
  //looping untuk menghasilkan kombinasi value dari setiap index duplikasi berupa string
  var index = 0;
  for(a in indexDistinct){
    for(b in indexDistinct){
      if(a<b){
        var x = indexDistinct[a];
        var y = indexDistinct[b];
        com[index] = new Array(fix[0].length);
        for(key in fix[0]){
          kom = fix[x][key]+fix[y][key];
          
          com[index][key] = kom;  
          
        }
        index++;
      }
    }
    
  }
  
  //mencari apakah pada array hasil kombinasi mempunyai value yang tidak berduplikasi dengan menggunakan fungsi checkDistinct
  for(a in com){
    var x = checkDistinct(com[a]);
    if(x == 0){
      answer++;
    }
  }


  return answer;
}

//fungsi checkDistinct dengan parameter sebuah array
function checkDistinct(arr){
  var count = 0;
  for(var i in arr){
    for(var j in arr){
      if(i!=j && arr[i]==arr[j]){
        count++;
      }
    }
  }
  return count;
}

//testing
var relation = [['100','ryan','music','2'],
            ['200','apeach','math','2'],
            ['300','tube','computer','3'],
            ['400','con','computer','4'],
            ['500','muzi','music','3'],
            ['600','apeach','music','2']];

console.log(solution(relation));

//answer : 2