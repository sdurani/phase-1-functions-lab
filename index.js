
const blockLengthinFeet = 264;

// FUNCTION 1
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    if (pickupLocation <= hqLocation) {
        return (hqLocation - pickupLocation);
    }
    else {
        return (pickupLocation - hqLocation);
    }
}


// FUNCTION 2
function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * blockLengthinFeet;
}

// FUNCTION 3
function distanceTravelledInFeet(start, destination) {
    if (destination <= start) {
        return ((start - destination) * blockLengthinFeet);
    }
    else {
        return ((destination - start) * blockLengthinFeet);
    }
}

// FUNCTION 4
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    } 
    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
        return ((distanceTravelledInFeet(start, destination) - 400) * 0.02);
    }
    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        return 25;
    }
    else {
        return "cannot travel that far";
    }
}