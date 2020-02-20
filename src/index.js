module.exports = function toReadable (number) {
    const beforeTwenty = [
        'zero', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    const afterTwenty = [
        '', '', 'twenty', 'thirty', 'forty',
        'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    if (number < 20) {
        return beforeTwenty[number]
    } else {
        const [ huns, tens, ones ] = String(number);
        const strArray = [
            (Number(huns) || 0) === 0 ? '' : beforeTwenty[huns] + ' hundred',
            afterTwenty[tens],
            (Number(ones) || 0) === 0 ? '' : beforeTwenty[tens]
        ];

        return strArray.join(' ');
    }
}
