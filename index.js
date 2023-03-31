function createEmployeeRecord(array) {
    const employeeObject = {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
    };
    return employeeObject;
  }
  createEmployeeRecord(["Gray", "Worm", "Security", 1]);

  function createEmployeeRecords(arrayOfArrays){
    const arrayObjects = [];
    arrayOfArrays.forEach(function(array){
        const employee = createEmployeeRecord(array);
        arrayObjects.push(employee);
    })
    return arrayObjects;

  }
  console.log(createEmployeeRecords([
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
  ]))

  
  function createTimeInEvent(object, dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    const updatedTimeInEvents = {
      type: "TimeIn",
      hour: parseInt(hour),
      date: date
    };
    object.timeInEvents.push(updatedTimeInEvents);
    return object;
  }
  createTimeInEvent(object = {
    firstName: 'moe',
    familyName: 'sizlak',
    title: 'barkeep',
    payPerHour: 2,
    timeInEvents: [],
    timeOutEvents: []
  },
  dateStamp = "0044-03-15 0900")

  function createTimeOutEvent(object, dateStamp){
    const [date, hour] = dateStamp.split(' ');
    const updatedTimeOutEvents = {
      type: "TimeOut",
      hour: parseInt(hour),
      date: date
    };
    object.timeOutEvents.push(updatedTimeOutEvents);
    return object;

  }
  createTimeOutEvent(object = {
    firstName: 'moe',
    familyName: 'sizlak',
    title: 'barkeep',
    payPerHour: 2,
    timeInEvents: [],
    timeOutEvents: []
  },
  dateStamp1 = "0044-03-15 1100")

  const object1 = {
    firstName: 'moe',
    familyName: 'sizlak',
    title: 'barkeep',
    payPerHour: 2,
    timeInEvents: [{ type: 'TimeIn', hour: '0900', date: '15' }],
    timeOutEvents: [{ type: 'TimeOut', hour: '1100', date: '15' }]
  };
  
  function hoursWorkedOnDate(object1, date) {
    const timeInEvent = object1.timeInEvents.find(event => event.date === date);
    const timeOutEvent = object1.timeOutEvents.find(event => event.date === date);
  
    const timeIn = parseInt(timeInEvent.hour, 10);
    const timeOut = parseInt(timeOutEvent.hour, 10);
  
    const hoursWorked = (timeOut - timeIn) / 100;
    return hoursWorked;
  }
  
  console.log(hoursWorkedOnDate(object1, '15'));
  
  const object2 = {
    firstName: 'moe',
    familyName: 'sizlak',
    title: 'barkeep',
    payPerHour: 27,
    timeInEvents: [{ type: 'TimeIn', hour: '0900', date: '15' }],
    timeOutEvents: [{ type: 'TimeOut', hour: '1100', date: '15' }]
  };
  
  function wagesEarnedOnDate(object2, date) {
    const hoursWorked = hoursWorkedOnDate(object2, date);
    const payOwed = object2.payPerHour * hoursWorked;
    return payOwed;
  }
  

  