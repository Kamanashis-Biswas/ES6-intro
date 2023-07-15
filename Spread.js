//object
const fish = {
    name: 'king hilsa',
    address: 'chadpur',
    color: 'silver',
    phone: '0194325864',
    price: 4000
}

const phone = fish.phone;
console.log(phone);

const { age, name } = { name: 'Kamanashis', age: 56, profession: 'Fisher' }
console.log(age);

const { address } = fish;
console.log(address)

//array destructuring

const [first,another] = [44, 99]
console.log(first,another)

const nayoks=['shakib','bappi','raj'];
const [king,lost,notun]=nayoks;
console.log(notun)