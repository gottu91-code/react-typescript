import { useEffect, useState } from "react";

function App() {
    // let testVariable: boolean = true;
    // console.log(testVariable);

    // const testArray: Array<number> = [2, 2, 3];
    // console.log(testArray);

    // const testArray2: number[] = [2, 2, 2, 2];
    // console.log(testArray2);

    // const testNull: null = null;
    // console.log(testNull);

    // const testUndefind: undefined = undefined;
    // console.log(testUndefind);

    // const testAny: any = [2,3,4];
    // console.log(testAny);

    // const testFunc = (text: string): void => {
    //     console.log(text);
    // }
    // testFunc('こんにちは');

    // const obj: {name: string, age: number} = {
    //     name: 'goto',
    //     age: 31,
    // }
    // console.log(obj.name);
    // console.log(obj.age);

    // const obj: {name: string} & {age: number} = {
    //     name: 'goto',
    //     age: 31,
    // }
    // console.log(obj.name);
    // console.log(obj.age);

    // type typeA = {
    //     name: string,
    //     age: number,
    // }
    // type typeB = {
    //     name: string,
    //     bool: boolean,
    // }
    // // type typeC = typeA & typeB;
    // const obj: typeA & typeB = {
    //     name: 'goto',
    //     age: 31,
    //     bool: true,
    // }
    // console.log(obj.name);
    // console.log(obj.age);
    // console.log(obj.bool);

    // const text: string | number = 'こんにちは';
    // console.log(text);

    // type CustomType<T> = {
    //     val: T,
    // }
    // const obj: CustomType<string> = {
    //     val: 'おはよう',
    // }
    // console.log(obj.val);

    const [count, setCount] = useState<number>(0);
    useEffect(() => {
        console.log(count);
        setCount((prevNum) => prevNum + 1);
    }, []);
    console.log(count);

    return (
        <>
            <p>typescript</p>
        </>
    );
}

export default App;
