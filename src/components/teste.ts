function foo() {
    this.bar = 10
}

foo.prototype.bar = 42

var foo = new foo()

console.log(foo.bar)

delete foo.bar;

console.log(foo.bar)


