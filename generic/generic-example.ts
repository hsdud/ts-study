/**
 * 제네릭 함수 선언
 */
 function getText<T>(arg: T): T {
    return arg;
}

/**
 * 제네릭 함수 사용 예시 1
 * 명시적으로 타입을 지정한다.
 */
let stringType = getText<string>('nacho');
let numberType = getText<number>(111);
let booleanType = getText<boolean>(true);

/**
 * 제네릭 함수 사용 예시 2
 * 명시적으로 타입을 지정하지 않아도,
 * ts의 타입 추론에 의해 리턴 값의 타입이 정해진다.
 */
let stringType2 = getText('nacho');
let numberType2 = getText(111);
let booleanType2 = getText(true);

/** 
 * 제네릭 인터페이스 선언
 */
interface MyInterface<T, U> {
    member1: T;
    member2: string;
    member3: U;
}

/**
 * 제네릭 인터페이스 사용 예시
 */
const myInterface: MyInterface<number, boolean> = {
    member1: 123,
    member2: 'nacho',
    member3: true
}

/**
 * keyof
 */
type myObj = {
    key1: string;
    key2: number;
    key3: boolean;
}

type keyOfType = keyof myObj;

/**
 * ts 의 type은 원시 타입 뿐만 아니라 값도 가능하다.
 */
type myType = 1 | 'nacho' | true | symbol;

/**
 * typeof
 */
const obj = {
    a: 1,
    b: {
        c: 'nacho',
        d: [3, 4]
    }
}

type typeOfObj = typeof obj;

/**
 * Conditional Type(제네릭 타입)
 * 삼항 연산자를 사용한다.
 */
type MyExclude<T, U> = T extends U ? never : T;
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

type Person = {
    name: string;
    age: number;
    student: boolean;
}

type keys = keyof Person;

type remainingKeys = MyExclude<keyof Person, 'name' | 'student'>;

type OnlyAge = MyPick<Person, 'name' | 'age'>;

const person: OnlyAge = {
    age:1,
    name: 'nacho'
}

/**
 * Immutable
 */
declare namespace Immutable {
  type DeepImmutable<T> =
    T extends (infer R)[] ? DeepImmutableArray<R> :
    T extends object ? DeepImmutableMap<T> :
    T;
  interface DeepImmutableMap<T> {
    get<K extends keyof T>(key: K): DeepImmutable<T[K]>;
  }
  interface DeepImmutableArray<T> {
    get(idx: number): DeepImmutable<T>;
  }
  function fromJS<T>(source: T): DeepImmutable<T>;
  function toJS<T>(obj: DeepImmutable<T>): T;
}

/**
 * infer
 */
type Unpacked<T> = T extends (infer U)[] ? U
  : T extends (...args: any[]) => infer U ? U
  : T extends Promise<infer U> ? U
  : T;

type InferT0 = Unpacked<string>;
type InferT1 = Unpacked<string[]>;
type InferT2 = Unpacked<() => string>;
type InferT3 = Unpacked<Promise<string>>;
type InferT4 = Unpacked<Promise<string[]>>;
type InferT5 = Unpacked<Unpacked<Promise<string>[]>>;

type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

const f1 = () => ({ name: 'tom', age: 33 });

// type err = ReturnType<number>;
type T0 = ReturnType<() => string>;
type T1 = ReturnType<(s: string) => void>;
type T2 = ReturnType<(<T>() => T)>;
type T3 = ReturnType<(<T extends U, U extends number[]>() => T)>;
type T4 = ReturnType<typeof f1>;

type StringPropertyNames<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

type StringProperties<T> = Pick<T, StringPropertyNames<T>>;
interface PPerson {
  name: string;
  age: number;
  nation: string;
}
type TT1 = StringPropertyNames<PPerson>;
type TT2 = StringProperties<PPerson>;