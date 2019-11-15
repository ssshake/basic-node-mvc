const doesSomethingAndReturnsDataToCaller = async () => {
    //maybe I did some DB stuff
    return { result: 'hi mom' }
}

module.exports = doesSomethingAndReturnsDataToCaller;