

// expect identical values to be equal -- comparing two NaN are deemed not be equal. It's just the rule in IEEE standard.
console.log("\n---equality---");
let aBadNumber = Number("x");
let bBadNumber = aBadNumber;
let badEqualsBad = aBadNumber === bBadNumber;
console.log ( "" + aBadNumber + " === " + aBadNumber + " " + badEqualsBad );


// expect one plus two to be three -- Representation of these values in binary not exactly matched in decimal. Think how 0.66666 is sometimes shown as 0.66667? Therefore not an EXACT match.
// use "close enough logic". if (Math.abs(x-y) < 0.000005)
console.log("\n---simple addition---");
let point1 = 0.1;
let point2 = 0.2;
let point3 = 0.3;
console.log( point1 + " + " +  point2 + " === " + point3 + ": " + ( (point1 + point2) === point3));

// expect incrementing to change a value -- limit of JS reached, "maximum safe integer" which is biggest integer is 1 below aNUmber.
console.log("\n---incrementing---");
let aNumber = 9007199254740992;
let bNumber = aNumber + 1;
if ( bNumber != aNumber){
    console.log("adding one makes a change");
} else {
    console.log("adding one made no difference " + bNumber);
}

// expect adding to make things bigger -- has it reached max 52 bit limitations? Then just decides anything bigger is just 'infinity'?
console.log("\n---adding---");
let aBigNumber = Number.MAX_VALUE;
let oneMoreThanBig = aBigNumber + 1;
if ( oneMoreThanBig > aBigNumber){
    console.log("oneMoreThanBig is bigger");
} else {
    console.log("oneMoreThanBig is not bigger, it is " + oneMoreThanBig);
}

let lotsMoreThanBig = aBigNumber + 9.979201e291;
if ( lotsMoreThanBig > aBigNumber){
    console.log("lotsMoreThanBig is bigger");
} else {
    console.log("lotsMoreThanBig is not bigger, it is " + lotsMoreThanBig);
}

let wayMoreThanBig = aBigNumber + 9.979202e291;
if ( wayMoreThanBig > aBigNumber){
    console.log("wayMoreThanBig is bigger, it is " + wayMoreThanBig);
} else {
    console.log("wayMoreThanBig is not bigger, it is " + wayMoreThanBig);
}


console.log("\n---same but different---"); // Division by 0 generates infinity? A number outside the largest possible number size display for JS.
calculateShare(20, 5);
calculateShare(0, 5);
calculateShare(0, 0);



function calculateShare(toBeShared, shareBetween) {

    let oneShare = toBeShared / shareBetween;
    let anotherShare = toBeShared / shareBetween;

    if ( oneShare == anotherShare){
        console.log("Same calculation, same answers");
    } else {
        console.log("Same calculation, different answers!");
    }

}