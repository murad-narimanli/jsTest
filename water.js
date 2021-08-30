const getWaterValue = (heights) => {
    let maxFL = -1     // max height from left- soldan baxdigda ilk en yuksek hisse
    let maxFR = -1     // max height from right - sagdan baxdigda ilk en yuksek hisse
    let indexFL = 0     // index from left -  soldan saydigda olan siralama
    let IndexFR = heights.length - 1     // index from right -  sagdan saydigda olan siralama
    let waterArea = 0;     // suyun hecmi
    while (indexFL <= IndexFR) {
        maxFL = heights[indexFL] > maxFL ? heights[indexFL] : maxFL
        maxFR = heights[IndexFR] > maxFR ? heights[IndexFR] : maxFR
        if (maxFL < maxFR) {
            waterArea += maxFL - heights[indexFL]
            indexFL++
        } else {
            waterArea += maxFR - heights[IndexFR]
            IndexFR--
        }
    }
    return waterArea
};

// sagdan ve soldan index index gelerek max hundurlukden (hem sag hem sol) ashagi dushen hisseleri hesablayiriq
console.log(getWaterValue([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
