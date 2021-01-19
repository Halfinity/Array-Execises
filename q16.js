function leap_year(start_year, end_year) {
    const year_range = [];
    for (let i = start_year; i <= end_year; i++)
    {
         year_range.push(i);
    }
    const array = [];

year_range.forEach(
year => { 
  if (if_LeapYear(year)) 
  array.push(year);
});

return array;
 }

function if_LeapYear(year) {
if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
            return year;
    } else {
            return false;
    }
}

console.log(leap_year(1948,2021));