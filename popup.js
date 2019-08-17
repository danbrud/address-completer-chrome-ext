
const hasSecondAddressLine = seperatedText => seperatedText.length === 5 ? true : false

const seperateLastLine = function (lastLine) {
    const lastLineArray = lastLine[0].split(', ')
    const stateZipSplit = lastLineArray.splice(1)[0].split(' ')

    return [...lastLineArray, ...stateZipSplit]
}

const getFullAddressAsObj = function (fullAddressArr, hasSecondAddressLine) {
    const fullAddress = { email: 'danny.personalizationco@gmail.com' }

    if (hasSecondAddressLine) { fullAddress.address2 = fullAddressArr.splice(2, 1)[0] }

    fullAddress.name = fullAddressArr[0]
    fullAddress.address1 = fullAddressArr[1]
    fullAddress.phone = fullAddressArr[2]
    fullAddress.city = fullAddressArr[3]
    fullAddress.state = fullAddressArr[4]
    fullAddress.zip = fullAddressArr[5]

    return fullAddress
}

const sendToPage = function (address) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, address, function (response) { });
    });
}

const handlePaste = function (userText) {
    const seperatedText = userText.split('\n')

    //Make sure address is complete
    if (seperatedText.length < 3) { return }

    const hasSecondAddress = hasSecondAddressLine(seperatedText)
    const lastLine = hasSecondAddress ? seperateLastLine(seperatedText.splice(3, 1)) : seperateLastLine(seperatedText.splice(2, 1))

    const fullAddress = getFullAddressAsObj([...seperatedText, ...lastLine], hasSecondAddress)
    sendToPage(fullAddress)
}

$('#paste-btn').on('click', function () {
    const textArea = $('#address').val()
    handlePaste(textArea)
})