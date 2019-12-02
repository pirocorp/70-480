function foo() {
    try {
        return 42;
    }
    finally {
        console.log("Hello");
    }

    console.log("never runs");
}
console.log(foo());
// Hello
// 42

/* function foo2() {
    try {
        throw 42;
    }
    finally {
        console.log("Hello");
    }
    console.log("never runs");
}
console.log(foo2()); */
// Hello
// Uncaught Exception: 42

/* function foo3() {
    try {
        return 42;
    }
    finally {
        throw "Oops!";
    }
    console.log("never runs");
}
console.log(foo3()); */
// Uncaught Exception: Oops!

for (var i = 0; i < 10; i++) {
    try {
        continue;
    }
    finally {
        console.log(i);
    }
}
// 0 1 2 3 4 5 6 7 8 9

function foo5() {
    try {
        return 42;
    }
    finally {
        // no `return ..` here, so no override
    }
}
function bar() {
    try {
        return 42;
    }
    finally {
        // override previous `return 42`
        return;
    }
}
function baz() {
    try {
        return 42;
    }
    finally {
        // override previous `return 42`
        return "Hello";
    }
}
console.log(foo5()); // 42
console.log(bar()); // undefined
console.log(baz()); // Hello