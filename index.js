function receivesAFunction(spy) {
    spy();
}


function returnsANamedFunction (){
   return function fn(){
       console.log ('Chloe');
   }
}


function returnsAnAnonymousFunction (){
    return function (){
        console.log ('');
    }
 }