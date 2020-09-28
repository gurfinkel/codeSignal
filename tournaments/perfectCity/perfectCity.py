def perfectCity(departure, destination):
    if int(departure[1])==departure[1]:
        x = math.ceil(min(departure[0],destination[0]))
        y = math.floor(max(departure[0],destination[0]))
        return abs(departure[1]-destination[1])+min(abs(x-departure[0])+abs(x-destination[0]),abs(y-departure[0])+abs(y-destination[0]))
    else:
        x = math.ceil(min(departure[1],destination[1]))
        y = math.floor(max(departure[1],destination[1]))
        return abs(departure[0]-destination[0])+min(abs(x-departure[1])+abs(x-destination[1]),abs(y-departure[1])+abs(y-destination[1]))
