let arr1=[1,2,3,4,5]
let x1=arr1.map(function(x){return x*2})
console.log(x1);


let arr1=["hello","world"]
let z1=arr1.map((x)=>{return x.toUpperCase()})
console.log(z1);


let arr1=[1,2,3,4,5,]
let arr2=arr1.filter(name)
function name(a){
        return a%2==0
}
console.log(arr2)


let arr1=[1,2,3,4,5]
let arr2=arr1.filter((a)=>a%2==0)
console.log(arr2);


let arr1=["hello","world","abc"]
let arr2=arr1.filter(function muthyal(a){
    return a.length-1>3
    
})
console.log(arr2);


let arr1=["hello","world","abc"]
let arr2=arr1.filter((a)=>a.length>3)
console.log(arr2);

let arr1=[1,2,3,4,5]
let arr2=arr1.forEach((b)=>console.log(b))

let arr1=[1,2,3,4,5]
let arr2=arr1.forEach(function Nagendra(a){
    return console.log(a);
})


let arr1=["hello","world"]
let arr2=arr1.forEach((a)=>console.log(a+"!"));


let arr1=[1,2,3,4,5]
let arr2=arr1.every(function(x){return x<=5})
console.log(arr2);

let arr1=["hello","world","abc"]
let arr2=arr1.every((a)=>a.length<5)
console.log(arr2);

let even=[1,2,3,4,5]
let arr=even.some(function(a){return a%2==0})
console.log(arr);

let str1=["hello","world","max"]
let str2=str1.some((a)=>a.length<=5)
console.log(str2);

let even=[1,2,3,4,5]
let str1=even.find((a)=>a%2==0)
console.log(str1);

let arr=["hello","world","max"]
let arr2=arr.find(function Nagendra(a){return a.length<=3})
console.log(arr2);


let arr1=[1,2,3,4,5]
let ar2=arr1.findIndex(function Mukesh(a){return a%2==0})
console.log(ar2)

let arr1=["hello","world","max"]
let arr2=arr1.findIndex(function Nagendra(a){
    return a.length<=3
})
console.log(arr2);