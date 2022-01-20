const button = document.querySelector("#Calu");
const display = document.querySelector("#display");

button.onclick = ()=>{
    console.log("hello")
    let dayValue =Number(document.querySelector("#day").value);
    let monthValue = Number(document.querySelector("#month").value);
    let yearValue = Number(document.querySelector("#year").value);
    if(dayValue && monthValue && yearValue){
        let monthDates = [31,28 , 31, 30, 31, 30,31, 31,30, 31 , 30,31];
        let currentDate = new Date();
        let currentDay = currentDate.getDate();
        let currentMonth = currentDate.getMonth()+1;
        let currentYear =currentDate.getFullYear();
        if(dayValue > currentDate){
          currentDate += monthDates[currentMonth-1];
          currentMonth-=1;
        };
        if(monthValue > currentMonth){
           currentMonth += 12;
           currentYear -1;
        }
        let birthDate = currentDay -dayValue;
        let birthMonth =currentMonth - monthValue;
        let birthYear = currentYear-yearValue;

        display.innerHTML = `${birthDate} days ${birthMonth} months ${birthYear} years `;
     }else  alert("Please enter your text");
}