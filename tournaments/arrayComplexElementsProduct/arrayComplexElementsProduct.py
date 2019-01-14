def arrayComplexElementsProduct(real, imag):
    answer = [real[0], imag[0]]
    
    for i in range(1, len(real)):
        temp = answer[0] * real[i] - answer[1] * imag[i]
        answer[1] = answer[1] * real[i] + answer[0] * imag[i]
        answer[0] = temp
        
    return answer
