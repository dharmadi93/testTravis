const mocha = require('mocha')
const expect = require('chai').expect
const controller = require('../controller/index')

describe("Test if input string empty or not", function () {
    it("Return true if input string is empty", function () {
        expect(controller.isEmpty("")).to.be.true
    })
    it("Return false if input string is have string", function () {
        expect(controller.isEmpty("adsa")).to.be.false
    })
    it("Return true if input string is have numbers", function () {
        expect(controller.isEmpty("2131")).to.be.false
    })
})

describe("Test if input more than four char", function () {
    it("Return true if input string is more than four char", function () {
        expect(controller.moreThanFour("abcde")).to.be.true
    })
    it("Return false if input string is below than four char", function () {
        expect(controller.moreThanFour("abcd")).to.be.false
    })
    it("Return false if input string is empty", function () {
        expect(controller.moreThanFour("")).to.be.false
    })
})

describe("Test is input only contains number", function () {
    it("Return true if input string is only contains number", function () {
        expect(controller.onlyNumber("123")).to.be.true
    })
    it("Return false if input string is only contains number and string", function () {
        expect(controller.onlyNumber("123abc")).to.be.false
    })
})

describe("Test is input like email format", function () {
    it("Return false if input is empty", function () {
        expect(controller.isEmail("")).to.be.false
    })
    it("Return false if input only numbers", function () {
        expect(controller.isEmail("123")).to.be.false
    })
    it("Return false if input only string", function () {
        expect(controller.isEmail("abc")).to.be.false
    })
    it("Return false if input only have string and @", function () {
        expect(controller.isEmail("dharmadi@")).to.be.false
    })
    it("Return false if input only have string, @, and email name", function () {
        expect(controller.isEmail("dharmadi@gmail")).to.be.false
    })
    it("Return flase if input only contain string, @, email name, com, and without '.'", function () {
        expect(controller.isEmail("dharmadi@gmailcom")).to.be.false
    })
    it("Return true if input like email format", function () {
        expect(controller.isEmail("dharmadi93@gmail.com")).to.be.true
    })
})

describe("Test is input contains one symbol, capital letter, and number", function () {
    it("Return false if input empty", function () {
        expect(controller.hardPassword("")).to.be.false
    })
    it("Return false if input only lower case string", function () {
        expect(controller.hardPassword("abc")).to.be.false
    })
    it("Return false if input only contains numbers", function () {
        expect(controller.hardPassword("123")).to.be.false
    })
    it("Return false if input only containg capial letter", function () {
        expect(controller.hardPassword("Abc")).to.be.false
    })
    it("Return false if input contains capital letter and number", function () {
        expect(controller.hardPassword("Abc123")).to.be.false
    })
    it("Return true if input contains one symbol, capital letter, and number", function () {
        expect(controller.hardPassword("@Abcde1")).to.be.true
    })
})