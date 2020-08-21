export const shorten = (text) => {
    let text2Return = '';
    const wordArray = text.split(" ");
    for( let i = 0; i < 14; i++){
        if(wordArray[i])
            text2Return += wordArray[i] + " ";
    }
    return text2Return;
}
