// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
if (blocks > 42){

    return blocks - 42
}
else{
    return 42 - blocks;
}
}

function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks) * 264;
}
function distanceTravelledInFeet(start, destination){
    if(destination > start){
        const dist = destination - start;
        return dist * 264;
    }
    else if ( start > destination){
        const dist = start -destination;
        return dist * 264;
    }
    else{
        return 0;
    }
}

function calculatesFarePrice(start, destination){
let distance = distanceTravelledInFeet ( start,destination);
if (distance <= 400){
    return 0;
}
else if (distance > 400 && distance <2000){
return 2.56;
}
else if (distance > 2000 && distance < 2500){
    return 25;
}
else if (distance > 2500){
    return "cannot travel that far"
}
}