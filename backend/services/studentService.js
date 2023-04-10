const Student = require('../models/students')

const Register = require('../models/registers')

const getAllStudents = async () => {
  return (await Student.find()).map(async (student) => {
    const studentRegisters = await Register.find({})
      .where('student')
      .equals(student._id)
    return {
      ...student,
      attendance: averageAttendance(studentRegisters),
      averageHwCompletion: averageHwCompletion(studentRegisters),
      averageParticipation: averageParticipation(studentRegisters)
    }
  })
}

const averageAttendance = (registers) => {
  const attendanceListCounter = registers.filter(
    (register) => register.attendance === true
  )
  const attendance = attendanceListCounter.length
  const attendanceList = registers.map((register) => register.attendance)
  return createAverage(attendance, attendanceList)
}

const averageHwCompletion = (registers) => {
  const hwCompletionCounter = registers.filter(
    (register) => register.hwCompletion === true
  )
  const hwCompletion = hwCompletionCounter.length
  const homeworkList = registers.map((register) => register.hwCompletion)
  return createAverage(hwCompletion, homeworkList)
}

const averageParticipation = (registers) => {
  const participationScore = {
    ['A']: 5.0,
    ['B']: 4.0,
    ['C']: 3.0,
    ['D']: 2.0,
    ['E']: 1.0,
    ['F']: 0.0
  }
  const participationCounter = registers.map(
    (register) => participationScore[register.participation]
  )
  let totalSum = 0
  participationCounter.forEach((element) => {
    totalSum += element
  })
  const average = totalSum / participationCounter.length
  const participation = Math.round(average)
  let participationLetter
  switch (participation) {
    case 0:
      participationLetter = 'F'
      break
    case 1:
      participationLetter = 'E'
      break
    case 2:
      participationLetter = 'D'
      break
    case 3:
      participationLetter = 'C'
      break
    case 4:
      participationLetter = 'B'
      break
    case 5:
      participationLetter = 'A'
      break
  }
  return participationLetter
}

const createAverage = (items, total) => {
  const average = (items / total) * 10
  return average
}

module.exports = { getAllStudents }
