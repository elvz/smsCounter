function smsCount(str) {
    let symbols = str.length;
    let numOfSms = Math.ceil(symbols / 80)

    console.log(numOfSms)
}