

const hasSecondAddressLine = seperatedText => seperatedText.length === 4 ? true : false

const seperateLastLine = function(lastLine) {
    const lastLineArray = lastLine[0].split(', ')
    const stateZipSplit = lastLineArray.splice(1)[0].split(' ')
 
    return [...lastLineArray, ...stateZipSplit]
}

const getFullAddressAsObj = function(fullAddressArr, hasSecondAddressLine) {
    const fullAddress = {email: 'danny.personalizationco@gmail.com'}
    
    if(hasSecondAddressLine) {
        fullAddress.address2 = fullAddressArr.splice(2, 1)[0]
    }
    
    fullAddress.name = fullAddressArr[0]
    fullAddress.address1 = fullAddressArr[1]
    fullAddress.city = fullAddressArr[2]
    fullAddress.state = fullAddressArr[3]
    fullAddress.zip = fullAddressArr[4]
    
    return fullAddress
}

const handlePaste = function(userText) {
    const seperatedText = userText.split('\n')

    //Make sure someone adds a real address
    if(seperatedText.length < 3) { return }

    const hasSecondAddress = hasSecondAddressLine(seperatedText)
    const lastLine = hasSecondAddress ? seperateLastLine(seperatedText.splice(3)) : seperateLastLine(seperatedText.splice(2))
    
    const fullAddress = getFullAddressAsObj([...seperatedText, ...lastLine], hasSecondAddress)

    console.log(fullAddress)
}




$('#paste-btn').on('click', function(){
    const textArea = $('#address').val()
    handlePaste(textArea)
})