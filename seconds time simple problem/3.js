// problem 1: ana to vori

function anaToVori(anaa){
    if (0 < anaa){
        var vori = anaa / 16; // one vori = sixteen anaa
   
    }
    else{console.log('please check, input positive number')}
   
    return vori;
}

// problem 2: panda cost

function pandaCost(sigara, somosa, jelapi){
    
        if (0 <= sigara && 0 <= somosa && 0 <= jelapi ){
            const sigaraPerPiecePrice = 7;
            const somosaPerPiecePrice = 10;
            const jelapiPerPiecePrice = 15;


            sigaraTotalPrice = sigaraPerPiecePrice * sigara;
            somosaTotalPrice = somosaPerPiecePrice * somosa;
            jelapiTotalPrice = jelapiPerPiecePrice * jelapi;
            
            // all single item multiplication quantity
            
            
           var AllItemsTotalPrice = sigaraTotalPrice + somosaTotalPrice + jelapiTotalPrice;
           // all items addition

        }
        else {console.log('please, give me positive number')}
      
return AllItemsTotalPrice;   
}

// problem: 3 picnic badget maintain

function picnicBudget(people){


    if (0 < people){
        if (people <= 100){

         var   totalCost = people * 5000;
         // people multiply 5000 it's runing one to hundred
        }
        else if(people <= 200){
           var totalCost = (people -100)  * 4000 + 500000;
            // onehundred one to two hundred multiply 4000 with addtion before 500000
        }
    
        else if(201 <= people){
           var totalCost = (people - 200) * 3000 + 900000;
           // 202 to infinite multiply 3000 with addtion before 500000+400000
        }
    }
    else {console.log('please, re-input positive number')}

     
 return totalCost;
}

// problem 4: first odd friend find

function oddFriend(frinendsNames){
if (typeof(frinendsNames) == 'object')
// compare input equal object

{
    for(var i = 0; i < frinendsNames.length; i++){
        if (frinendsNames[i].length % 2 != 0)
        // odd length count 
        {
           var myOddFriend = frinendsNames[i];
            break;
            // when get odd length then loop break
         
        }
        
    }

}

else{console.log('please, input array')}

return myOddFriend;  
}


