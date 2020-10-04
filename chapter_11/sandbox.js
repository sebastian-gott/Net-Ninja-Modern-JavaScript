// // DATES & TIMES

// const now = new Date();

// console.log(now); 
// console.log(typeof now);

// // YEAR, MONTH, DAY, TIME

// console.log('getFullYear', now.getFullYear());
// console.log('getMonth', now.getMonth());
// console.log('getDate', now.getDate());
// console.log('getDay', now.getDay());
// console.log('getHours', now.getHours());
// console.log('getMinutes', now.getMinutes());
// console.log('getSeconds', now.getSeconds());

// //TIMESTAMPS

// //console.log('timestamp', now.getTime());

// const before = new Date('February 1 2020 7:30:59');

// const difference = now.getTime() - before.getTime();
// console.log(difference);

// const minutes = Math.round(difference / 1000 / 60);
// const hours = Math.round(minutes / 60);
// const days = Math.round(hours / 24);
// console.log(minutes, hours, days);

// console.log(`The blog was written ${days} days ago`);

// //CONVERTING TIMESTAMPS INTO DATE OBJECTS

// const timestamp = 1593867826945;
// console.log(new Date(timestamp));


// //DATE STRINGS
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());

const now = new Date();

//console.log(dateFns.isToday(now));

// FORMATTING OPTIONS

console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd Do MMMM YYYY'));

// COMPARTING DATES

const before = new Date('February 1 2020 12:00:00');

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));

