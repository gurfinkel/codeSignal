function leapYear(year) {
    if (0 === year % 400) 
        return true; 
    if (0 === year % 100) 
        return false; 
    if (0 === year % 4) 
        return true; 

    return false; 
}
