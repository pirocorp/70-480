function foo() {
    var arr = Array.prototype.slice.call(arguments);
    arr.push("bam");
    console.log(arr);

    var arr2 = Array.from(arguments);
    arr2.push("bam2")
    console.log(arr2);
}

foo("bar", "baz"); // ["bar","baz","bam"]