/** eslint-disable @typescript-eslint/no-unused-vars */
// typeScriptの基本の型
//変数の後にコロン:をつけて変数宣言をしていく

//boolean
let bool: boolean = true;

//number 数値
let num: number = 0;

//String型
let str: string = "A";

//Array 配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

//tuple型
let tuple: [number, string] = [0, "A"];

//any 何を入れても問題ない。プロジェクトでは使用しないようにする
let any1: any = false;

//void 戻り値なし（暗黙の型の推測あり）
const funcA = (): void => {
  const test = "TEST";
};

//null
let null1: null = null;

//undefined 何も設定されていないことを表す
let undefined1: undefined = undefined;

//object
let obj1: object = {};
let obj2: {} = 8888; //この表現だとなんの型でも入れられるので使うことはない
let obj3: { id: number; name: string } = { id: 0, name: "Shira" };
//これはpropsなどで多く使用する
