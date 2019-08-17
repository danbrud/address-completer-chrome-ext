
const pasteAddress = function (fullAddress) {
    $('input[name=full_name]').val(fullAddress.name)
    $('input[name=address1]').val(fullAddress.address1)
    $('input[name=city]').val(fullAddress.city)
    $('input[name=zip]').val(fullAddress.zip)
    $('input[name=email]').val(fullAddress.email)
    $('input[name=phone]').val(fullAddress.phone)
    
    if(fullAddress.address2) { $('input[name=address2]').val(fullAddress.address2) }
    
    // $('select[name=country]').val(fullAddress.country)
    // $('select[name=region]').val(fullAddress.state)

    // console.log($('.js-region-wrapper'))
    // $(`select[value=country]`).trigger('select')
    // $('.js-region-wrapper').removeClass('hide-field')
    // $('select[name=region]').removeAttr('disabled')
    // $(`option[value=${fullAddress.country}]`).trigger('select')
    // $(`option[value=${fullAddress.country}]`).triggerHandler('select')
    // $('select[name=country]').addClass("valid")
    // $('select[name=country]').attr("aria-invalid", "false")
}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        pasteAddress(request)
        sendResponse({ farewell: "done" });
    }
);


// const print = function () {
//     console.log("anything")
// }

// const textArea = $('<textarea placeholder="Enter address" spellcheck="false" id="address" rows="7" autofocus></textarea><div id="paste-btn">Paste</div>')
// $(".order-form-table").before(textArea)

// $('#paste-btn').on('click', function () {
//     // const textArea = $('#address').val()
//     // handlePaste(textArea)
//     print()
// })