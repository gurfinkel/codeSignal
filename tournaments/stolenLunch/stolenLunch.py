def stolenLunch(note):
    newNote = []

    for i in range(0, len(note)):
        if '0' <= note[i] <= '9':
            newNote.append(chr(int(note[i]) + ord('a')))
        elif 'a' <= note[i] <= 'j':
            newNote.append(str(ord(note[i]) - ord('a')))
        else:
            newNote.append(note[i])
            
    return "".join(newNote)
