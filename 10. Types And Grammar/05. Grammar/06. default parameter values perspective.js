function foo(a = 42, b = a + 1) {
    console.log(
        arguments.length, a, b,
        arguments[0], arguments[1]
    );
}

foo(); // 0 42 43 undefined undefined
foo(10); // 1 10 11 10 undefined
foo(10, undefined); // 2 10 11 10 undefined
foo(10, null); // 2 10 null 10 null