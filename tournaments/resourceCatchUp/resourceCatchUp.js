function resourceCatchUp(logOut, logIn) {
    const diffHours = Math.ceil((logIn[0] - logOut[0]) / (60 * 60));
    
    return ~~((logOut[1] - logIn[1]) / diffHours);
}
