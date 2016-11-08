module.exports = {
    isEmpty: function (input) {
        if (input.length == 0) return true
        else return false
    },

    moreThanFour: function (input) {
        string = input.split("")
        if (input.length > 4) return true
        else return false
    },

    onlyNumber: function (input) {
        if (isNaN(input) == false) return true
        else return false
    },

    isEmail: function (input) {
        var regexPatt = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)

        if (regexPatt.test(input) == true) return true
        else return false
    },

    hardPassword: function (input) {
        var regexPatt = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_\W]).+$/)

        if (regexPatt.test(input) == true) return true
        else return false
    }
}