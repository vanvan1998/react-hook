let helloWorld = "Hello World";
//  ^ = let helloWorld: string



// const user = {
//     name: "Hayes",
//     id: 0,
//   };
//khai báo đối tượng
interface User {
    name: string;
    id: number;
}
//sử dụng đối tượng
const user: User = {
    name: "Hayes",
    id: 0,
};

//define giá trị cho biến
type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function getLength(obj: string | string[]) {
    return obj.length;
}

// xác định loại của biến
function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
        return [obj];
        //          ^ = (parameter) obj: string
    } else {
        return obj;
    }
}

//khai báo object chưa xác định loại
interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

//sử dụng
declare const backpack: Backpack<string>;
const object = backpack.get();
// backpack.add(23);//lỗi vì backpack khai báo kiểu Type là string

//biến point không được khai báo là kiểu Point nhưng nó có cấu trúc giống với potnt nên chạy đúng
interface Point {
    x: number;
    y: number;
}

function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"

const color = { x: "#187ABF" };
// logPoint(color); // lỗi vì không map được dữ liệu

class Greeter {
    greeting: string;
  
    constructor(message: string) {
      this.greeting = message;
    }
  
    greet() {
      return "Hello, " + this.greeting;
    }
  }

export { }