function perfectCity(departure, destination) {
    if (~~departure[1] === departure[1]) {
        let x = Math.ceil(Math.min(departure[0],destination[0]));
        let y = Math.floor(Math.max(departure[0],destination[0]));
        
        return Math.abs(departure[1]-destination[1])+Math.min(Math.abs(x-departure[0])+Math.abs(x-destination[0]), Math.abs(y-departure[0])+Math.abs(y-destination[0]));
    } else {
        let x = Math.ceil(Math.min(departure[1],destination[1]));
        let y = Math.floor(Math.max(departure[1],destination[1]));
        
        return Math.abs(departure[0]-destination[0])+Math.min(Math.abs(x-departure[1])+Math.abs(x-destination[1]),Math.abs(y-departure[1])+Math.abs(y-destination[1]));
    }
}
