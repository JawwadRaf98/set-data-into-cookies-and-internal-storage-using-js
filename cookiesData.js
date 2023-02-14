// Get data from cookies

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
//   console.log(decodedCookie)
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Set data into cookies

function setCookie(cname, cvalue, exdays = 365) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// to delete cookie just set date of that cookie to the previous date

function updateCookie(cname, cvalue, exdays = -1) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// set data into intenal storage

const setIntoInternalStorage = (formName , data)=>{
    let tempPreData = localStorage.getItem(formName)
    let previousData = tempPreData !== null ? JSON.parse(tempPreData)  : [];
    let curFormData = data
    let tempData =[curFormData, ...previousData]
    console.log(tempData)
    localStorage.setItem(formName, JSON.stringify(tempData));
    return true;
}

//get data from internal storage
function getDataFromIntenalStorage(formName){
    let tempPreData = localStorage.getItem(formName)
    let previousData = tempPreData !== null ? JSON.parse(tempPreData)  : [];
    return tempPreData
}

// get today date
function getTodayDate(){
    const date = new Date();

    let day = date.getDate();
    day = day < 10 ? '0'+day : day
    let month = date.getMonth() + 1;
    month = month < 10 ? '0'+month : month
    let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${year}-${month}-${day}`;
    return currentDate;
}

// convert date
const convertDate = (date) =>{
  if(date === "") return "-";
  const month=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  
  const [year, mon, day] = date.includes("/") ? date.split("/")  : date.split("-")
  return `${day}-${month[mon-1]}-${year}`;
}
