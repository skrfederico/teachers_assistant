// ---1
// PARA LAS 3 FUNCIONES
//acceder a registers de database
//filtrar URL con groupId
//contar registros de cada alumno, guardar como totalSessions

//funciones averageAttendance, averageHwCompletion
//
//contar attendance/hwCompletion = true, guardar como sessionsAttended
// sessionsAttended / totalSessions * 10

//explanations in text
// Calculate the total number of objects in the 'registers' collection: 10.
// Calculate the number of objects with an attendance key value of true: 6.
// Divide the number of objects with true attendance by the total number of objects and multiply by 100 to get the percentage: (6/10) * 100 = 60%.
// Therefore, the average attendance expressed in percentage is 60%.
//

// function calculateAttendancePercentage(registers) {
//   const totalRegisters = registers.length;
//   const totalAttendance = registers.filter(register => register.attendance === true).length;
//   const attendancePercentage = (totalAttendance / totalRegisters) * 100;

//   return attendancePercentage.toFixed(2);
// }

// //example
// const registers = [
//   { id: 1, attendance: true },
//   { id: 2, attendance: false },
//   { id: 3, attendance: true },
//   { id: 4, attendance: true },
//   { id: 5, attendance: false },
//   { id: 6, attendance: true },
//   { id: 7, attendance: false },
//   { id: 8, attendance: true },
//   { id: 9, attendance: false },
//   { id: 10, attendance: true },
// ];

// const attendancePercentage = calculateAttendancePercentage(registers);

// console.log(attendancePercentage); // Output: "60.00"

// function averageHwCompletion(sessions) {
//   const totalSessions = sessions.length;
//   const totalHwCompletion = sessions.filter(session => session.hwCompletion === true).length;
//   const hwCompletionPercentage = (totalHwCompletion / totalSessions) * 100;

//   return hwCompletionPercentage.toFixed(2);
// }

// //example
// const sessions = [
//   { id: 1, hwCompletion: true },
//   { id: 2, hwCompletion: false },
//   { id: 3, hwCompletion: true },
//   { id: 4, hwCompletion: false },
//   { id: 5, hwCompletion: false },
//   { id: 6, hwCompletion: true },
//   { id: 7, hwCompletion: false },
//   { id: 8, hwCompletion: true },
//   { id: 9, hwCompletion: true },
//   { id: 10, hwCompletion: false },
// ];

// const hwCompletionPercentage = averageHwCompletion(sessions);

// console.log(hwCompletionPercentage); // Output: "40.00"

//funcion averageParticipation
// traducir cada letra a un puntaje
// sumar todos los puntajes y dividirlos por totalSessions
// transformar valor numerico a valor en letra
//

// function calculateParticipationAverage(registers) {
//   const participationValues = {
//     A: 5.0,
//     B: 4.0,
//     C: 3.0,
//     D: 2.0,
//     E: 1.0,
//     F: 0.0,
//   };

//   const totalSessions = registers.length;
//   let totalParticipationScore = 0;

//   for (let i = 0; i < totalSessions; i++) {
//     const session = registers[i];
//     const participationValue = participationValues[session.participation];
//     totalParticipationScore += participationValue;
//   }

//   const participationAverage = totalParticipationScore / totalSessions;
//   return participationAverage.toFixed(2);
// }

// //example
// const registers = [
//   { id: 1, participation: 'A' },
//   { id: 2, participation: 'B' },
//   { id: 3, participation: 'C' },
//   { id: 4, participation: 'D' },
//   { id: 5, participation: 'E' },
//   { id: 6, participation: 'A' },
//   { id: 7, participation: 'B' },
//   { id: 8, participation: 'C' },
//   { id: 9, participation: 'D' },
//   { id: 10, participation: 'E' },
// ];

// const participationAverage = calculateParticipationAverage(registers);

// console.log(participationAverage); // Output: "3.00"
