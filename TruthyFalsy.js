// TRUTHY FALSY
// FALSY : 0, '', null, undefined, NaN
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(undefined))

// TRUTHY
console.log(Boolean(1))
console.log('a')

// Case. Validasi inputan dari user apabila kosong maka munculkan pesan error,
//       apabila inputan ada makan munculkan pesan succes
const input = 'a'
if(input === ''){
    console.log('Error')
}else{
    console.log('Success')
}

if(input){
    console.log('Success')
}else{
    console.log('Error')
}