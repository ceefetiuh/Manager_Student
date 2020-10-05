module.exports = (req, res) => {
    var testObject = {
        key: "abc",
        testKey: "xyz"
    }
    res.send(testObject);
}