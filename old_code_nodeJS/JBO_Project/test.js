var validator = require('validator');

var validation = (input, type, output) => {
    var errors = [];
    if (input.length != type.length || input.length != output.length) {
        return console.log('ERROR VALIDATION');
    }
    for (var i = 0; i < input.length; i++) {
        if (type[i] == 'isEmail') {
            if (!validator.isEmail(input[i])) {
                errors.push(output[i]);
            }
        }
    }

    return errors;
}

var i = ['da@123a.com', '@asd.com'];
var t = ['isEmail', 'isEmail'];
var o = ['Error Email', 'Error Email'];

var a = validation(i, t, o);

console.log(a);