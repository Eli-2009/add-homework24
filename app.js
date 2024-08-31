// let a = prompt('ayin tarixini YYYY.MM.DD daxil edin')

// let = a.split(".")
// a.split('.');
// if (a [0] === '2024') {
//     console.log('yanvar');
// }



let a = prompt('ayin tarixini YYYY.MM.DD daxil edin')

let b = a.split('.')
let c = b[0]
// console.log(c + 'ci il');
let d = b[2]


if (b[1] === '01') {
    // console.log(c + '-cu il yanvarin ' + d  + '-i');
    console.log(d + ' yanvar ' + c + '-cu il');
}



else if (b[1] === '02') {
    // console.log(c + '-cu il fevralin ' + d  + '-i');
    console.log(d + ' fevral ' + c + '-cu il');

}



else if (b[1] === '03') {
    // console.log(c + '-cu il martin ' + d  + '-i');
    console.log(d + ' mart ' + c + '-cu il');
}




else if (b[1] === '04') {
    // console.log(c + '-cu il aprelin ' + d  + '-i');
    console.log(d + ' aprel ' + c + '-cu il');

}




else if (b[1] === '05') {
    // console.log(c + '-cu il mayin ' + d  + '-i');
    console.log(d + ' may ' + c + '-cu il');

}




else if (b[1] === '06') {
    // console.log(c + '-cu il iyunun ' + d  + '-i');
    console.log(d + ' iyun ' + c + '-cu il');

}



else if (b[1] === '07') {
    // console.log(c + '-cu il iyulun ' + d  + '-i');
    console.log(d + ' iyul ' + c + '-cu il');

}



else if (b[1] === '08') {
    // console.log(c + '-cu il avqustun ' + d  + '-i');
    console.log(d + ' avqust ' + c + '-cu il');

}



else if (b[1] === '09') {
    // console.log(c + '-cu il sentyabrin ' + d  + '-i');
    console.log(d + ' sentyabr ' + c + '-cu il');

}



else if (b[1] === '10') {
    // console.log(c + '-cu il oktyabrin ' + d  + '-i');
    console.log(d + ' oktyabr ' + c + '-cu il');

}



else if (b[1] === '11') {
    // console.log(c + '-cu il noyabrin ' + d  + '-i');
    console.log(d + ' noyabr ' + c + '-cu il');

}


else if (b[1] === '12') {
    // console.log(c + '-cu il dekabrin ' + d  + '-i');
    console.log(d + ' dekabr ' + c + '-cu il');

}

else{
    console.log('YYYY.MM.DD formatinda duzgun daxil edin.');
    
}


