

const hasSecondAddressLine = seperatedText => seperatedText.length === 4 ? true : false

const seperateLastLine = function(lastLine) {
    const lastLineArray = lastLine[0].split(', ')
    const stateZipSplit = lastLineArray.splice(1)[0].split(' ')
 
    return [...lastLineArray, ...stateZipSplit]
}

const handlePaste = function(userText) {
    const seperatedText = userText.split('\n')
    const lastLine = hasSecondAddressLine(seperatedText) ? seperateLastLine(seperatedText.splice(3)) : seperateLastLine(seperatedText.splice(2))
    const fullAddress = [...seperatedText, ...lastLine]

    console.log(fullAddress)
}




$('#paste-btn').on('click', function(){
    const textArea = $('#address').val()
    handlePaste(textArea)
})