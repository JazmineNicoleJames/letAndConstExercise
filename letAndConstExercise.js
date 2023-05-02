//stopped from redeclaring PI
const PI = 3.14;
PI = 42; //will not reassign the value


//- What is the difference between ***var*** and ***let***?
    // let can be reassigned, and it is block-scoped. 
    // var can be reassigned AND redeclared. It is a function scope

//- What is the difference between **var** and ***const***?
    // var can be reassigned and redelcared. Will also hoist to top of scope it is defined in.
    // const CAN'T be reassigned nor redeclared. And it is a block-scope.

//- What is the difference between **let** and **const**?
    // let can be reassigned.
    // const can't be reassigned.

//- What is hoisting?
    // variables that are used before they are declared