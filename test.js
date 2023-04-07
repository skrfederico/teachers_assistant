const database = [
  {
    student: 'Alice',
    group: 'Children',
    attendance: true,
    hwCompletion: true,
    participation: 'B',
    date: '2023-03-01'
  },
  {
    student: 'Bob',
    group: 'Adults',
    attendance: false,
    hwCompletion: true,
    participation: 'C',
    date: '2023-03-02'
  },
  {
    student: 'Charlie',
    group: 'Teens',
    attendance: true,
    hwCompletion: false,
    participation: 'A',
    date: '2023-03-03'
  },
  {
    student: 'David',
    group: 'Children',
    attendance: false,
    hwCompletion: false,
    participation: 'D',
    date: '2023-03-04'
  },
  {
    student: 'Eve',
    group: 'Teens',
    attendance: true,
    hwCompletion: true,
    participation: 'F',
    date: '2023-03-05'
  },
  {
    student: 'Frank',
    group: 'Adults',
    attendance: true,
    hwCompletion: true,
    participation: 'E',
    date: '2023-03-06'
  },
  {
    student: 'Alice',
    group: 'Children',
    attendance: true,
    hwCompletion: true,
    participation: 'A',
    date: '2023-03-07'
  },
  {
    student: 'Bob',
    group: 'Adults',
    attendance: true,
    hwCompletion: true,
    participation: 'B',
    date: '2023-03-08'
  },
  {
    student: 'Charlie',
    group: 'Teens',
    attendance: false,
    hwCompletion: false,
    participation: 'C',
    date: '2023-03-09'
  },
  {
    student: 'David',
    group: 'Children',
    attendance: true,
    hwCompletion: false,
    participation: 'D',
    date: '2023-03-10'
  },
  {
    student: 'Eve',
    group: 'Teens',
    attendance: true,
    hwCompletion: true,
    participation: 'F',
    date: '2023-03-11'
  },
  {
    student: 'Frank',
    group: 'Adults',
    attendance: true,
    hwCompletion: false,
    participation: 'E',
    date: '2023-03-12'
  },
  {
    student: 'Alice',
    group: 'Children',
    attendance: true,
    hwCompletion: true,
    participation: 'A',
    date: '2023-03-13'
  },
  {
    student: 'Bob',
    group: 'Adults',
    attendance: false,
    hwCompletion: true,
    participation: 'B',
    date: '2023-03-14'
  }
]
createStudentArrays(database)

function createStudentArrays(database) {
  const children = new Set()
  const teens = new Set()
  const adults = new Set()

  for (const entry of database) {
    const { student, group } = entry
    if (group === 'Children') {
      children.add(student)
    } else if (group === 'Teens') {
      teens.add(student)
    } else if (group === 'Adults') {
      adults.add(student)
    }
  }

  console.log('Children:', Array.from(children))
  console.log('Teens:', Array.from(teens))
  console.log('Adults:', Array.from(adults))
}

function logGroupStats(database, group) {
  const groupEntries = database.filter((entry) => entry.group === group)
  const totalClasses = groupEntries.length

  const attendanceStats = {}
  const hwCompletionStats = {}
  const participationStats = {}

  groupEntries.forEach((entry) => {
    const { student, attendance, hwCompletion, participation } = entry
    attendanceStats[student] =
      (attendanceStats[student] || 0) + (attendance ? 1 : 0)
    hwCompletionStats[student] =
      (hwCompletionStats[student] || 0) + (hwCompletion ? 1 : 0)
    participationStats[student] = participationStats[student] || []
    participationStats[student].push(participation)
  })

  const attendanceOutput = {}
  const hwCompletionOutput = {}
  const participationOutput = {}

  Object.keys(attendanceStats).forEach((student) => {
    const attendancePercentage = (
      (attendanceStats[student] / totalClasses) *
      100
    ).toFixed(2)
    const hwCompletionPercentage = (
      (hwCompletionStats[student] / totalClasses) *
      100
    ).toFixed(2)
    const avgParticipationGrade =
      participationStats[student].reduce((total, grade) => {
        const gradeValue = {
          A: 5.0,
          B: 4.0,
          C: 3.0,
          D: 2.0,
          E: 1.0,
          F: 0.0
        }[grade]
        return total + gradeValue
      }, 0) / totalClasses
    const avgParticipationLetter = Object.entries({
      A: 5.0,
      B: 4.0,
      C: 3.0,
      D: 2.0,
      E: 1.0,
      F: 0.0
    }).reduce(
      (result, [letter, value]) => {
        if (
          Math.abs(avgParticipationGrade - value) <
          Math.abs(avgParticipationGrade - result.value)
        ) {
          return { letter, value }
        } else {
          return result
        }
      },
      { letter: null, value: Number.MAX_SAFE_INTEGER }
    ).letter

    attendanceOutput[student] = `${attendancePercentage}%`
    hwCompletionOutput[student] = `${hwCompletionPercentage}%`
    participationOutput[student] = avgParticipationLetter
  })

  console.log(`Group: ${group}`)
  console.log('List of Students:')

  Object.keys(attendanceOutput).forEach((student) => {
    console.log(
      `${student}: attendance: ${attendanceOutput[student]}, hwCompletion: ${hwCompletionOutput[student]}, participation: ${participationOutput[student]}`
    )
  })
}

logGroupStats(database, 'Children')
logGroupStats(database, 'Teens')
logGroupStats(database, 'Adults')
