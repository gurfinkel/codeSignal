def imageTruncation(image, threshold):
    for i in range(len(image)):
        for j in range(len(image[0])):
            if image[i][j] > threshold:
                image[i][j] = threshold
    return image
