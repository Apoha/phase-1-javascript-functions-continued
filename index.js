// code your solution here

function saturdayFun(activity = "roller-skate"){

    return `This Saturday, I want to ${activity}!`
}

saturdayFun('bathe my dog');

function mondayWork(activity = 'go to the office'){ 
    return `This Monday, I will ${activity}.`   
}

mondayWork("work from home")





// it("when initialized with '*' creates a function that, when called, wraps an adjective in a highlight", function() {
//     let result = wrapAdjective('*')
//     let emphatic = result("a hard worker")
//     expect(emphatic).to.equal("You are *a hard worker*!")
//   });


function wrapAdjective( string){
   
    return function (){

    }

}


//let result = '*';
//  let emphatic = result("a hard worker")