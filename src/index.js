module.exports = function getZerosCount(number)
{
    let countOfZeros = 0;
    let i = 5;

    while ((number / i) >= 1)
    {
        countOfZeros += Math.floor(number / i);
        i *= 5;
    }
    return countOfZeros;
}