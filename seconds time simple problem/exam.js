// problem 1: ana to vori

function anaToVori(anaa){
        if (0 < anaa){
            var vori = anaa / 16;
       
        }
        else{console.log('please check, input positive number')}
       
        return vori;
}


var getVori = anaToVori(-32);
console.log(getVori)

// problem 2: panda

function pandaCost(sigara, somosa, jelapi){
        
            if (0 <= sigara && 0 <= somosa && 0 <= jelapi ){
                const sigaraPerPiecePrice = 7;
                const somosaPerPiecePrice = 10;
                const jelapiPerPiecePrice = 15;


                sigaraTotalPrice = sigaraPerPiecePrice * sigara;
                somosaTotalPrice = somosaPerPiecePrice * somosa;
                jelapiTotalPrice = jelapiPerPiecePrice * jelapi;
                
                
               var AllItemTotalPrice = sigaraTotalPrice + somosaTotalPrice + jelapiTotalPrice;
    
            }
            else {console.log('please, give me positive number')}
          
   return AllItemTotalPrice;   
}


var totalPrice = pandaCost(10,10,-10);
console.log(totalPrice)


// problem: 3

function picnicBudget(people){


        if (0 < people){
            if (people <= 100){

             var   totalCost = people * 5000;
            }
            else if(people <= 200){
               var totalCost = (people -100)  * 4000 + 500000;
            }
        
            else if(201 <= people){
               var totalCost = (people - 200) * 3000 + 900000;
            }
        }
        else {console.log('please, re-input positive number')}

         
     return totalCost;
}


var totalPicnicCost = picnicBudget(-180);
console.log(totalPicnicCost)

// problem 4:


function oddFriend(frinendsNames){
    if (typeof(frinendsNames) == 'object'){
        for(var i = 0; i < frinendsNames.length; i++){
            if (frinendsNames[i].length % 2 != 0){
               var answer = frinendsNames[i];
                break;
             
            }
            
        }

    }
  
else{console.log('please, input array')}

   return answer;  
}


var friends = 3;

var myOddLengthFriend  = oddFriend(friends)
console.log(myOddLengthFriend)