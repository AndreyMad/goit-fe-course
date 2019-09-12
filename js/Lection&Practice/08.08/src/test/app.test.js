const expect = require("chai").expect;
const helloFunc = require("../logic/app").greet;
const reduceFunc = require("../logic/app").reduceFunc;

describe("return Hello", function() {
  it("hello", function() {
    const result = helloFunc();
    expect(result).to.be.a("string");
    expect(result).equal("hello");
  });
});

describe("reduce group", function() {
  it("empty array", function() {
    const result = reduceFunc([]);
    expect(result).to.be.a("number");
    expect(result).equal(0);
  });
  it("positive numbers", function() {
    const result = reduceFunc([1, 5, 7]);
    expect(result).to.be.a("number");
    expect(result).equal(13);
  });
  it("negative numbers", function() {
    const result = reduceFunc([-4, -8, 10]);
    expect(result).to.be.a("number");
    expect(result).equal(-2);
  });
  it("not array", function() {
    const result = reduceFunc("test string");
    expect(result).to.be.a("string");
    expect(result).equal("Wrong data type");
  });
  it("float numbers", function() {
    const result = reduceFunc([10.1, 20.2]);
    expect(result).to.be.a("number");
    expect(result).equal(30.3);
  });
});



let arr =[1,4,8,10]

arr.reduce((acc,el)=>acc+el,0)
