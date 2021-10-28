function identity1(arg: string): string {
    return arg;
}

function identity2(arg: any): any {
    return arg;
}

function identity3<T>(arg: Array<T>): Array<T> {
    return arg;
}

let output = identity3<string>(["nacho", "chili"]);

// type
function typeIdentity<T>(arg: T): T {
    return arg;
}

let myTypeIdentity: <T>(arg: T) => T = typeIdentity;

// generic interface
interface GenericIdentityFn {
    <T>(arg: T): T
}

function identity4<T>(arg: T): T {
    return arg;
}

let myIdentity2: GenericIdentityFn = identity4;

/**
 * Constraints
 * 제한되어 있기 때문에 모든 타입에 대해서는 동작하지 않는다.
 * ex)
 * loggingIdentity(3); // error
 */
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

/**
 * 제네릭 제약조건에서 타입 매개변수 사용
 * getProperty(x, 'a'); // success
 * getProperty(x, 'd'); // error
 */
let x = { a: 1, b: 2, c: 3 };
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
