const Student = require('../models/students')

const Register = require('../models/registers')

const getAllStudents = async () => {
  let students = await Student.find()

  const studentsWithRegisters = await Promise.all(
    students.map((student) => addRegistersToStudent(student))
  )
  return studentsWithRegisters
}

const getSingleStudent = async (id) => {
  const student = await Student.findById(id)
  return await addRegistersToStudent(student)
}

const averageAttendance = (registers) => {
  const attendanceList = registers.filter(
    (register) => register.attendance === true
  )
  const attendanceListCounter = attendanceList.length
  return createAverage(attendanceListCounter, registers.length)
}

const averageHwCompletion = (registers) => {
  const hwCompletionList = registers.filter(
    (register) => register.hwCompletion === true
  )
  const hwCompletionCounter = hwCompletionList.length
  return createAverage(hwCompletionCounter, registers.length)
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

const createAverage = (amountPositiveValues, total) => {
  const average = (amountPositiveValues / total) * 100
  return Math.round(average)
}

const addRegistersToStudent = async (student) => {
  const registers = await Register.find({}).where('student').equals(student._id)

  console.log('student: ' + student.body + ' registers', registers.length)

  return {
    _id: student._id,
    body: student.body,
    group: student.group,
    averageAttendance: registers.length > 0 ? averageAttendance(registers) : 0,
    averageHwCompletion:
      registers.length > 0 ? averageHwCompletion(registers) : 0,
    averageParticipation:
      registers.length > 0 ? averageParticipation(registers) : 'C',
    address: student.address,
    telephone: student.telephone,
    email: student.email
  }
}

module.exports = { getAllStudents, getSingleStudent }
