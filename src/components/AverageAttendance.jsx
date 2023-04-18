import React from 'react'
// Attendance
const attAns1 = (student) => {
  return [
    `For students with attendance percentages in the 0-20% range, it is crucial to improve attendance immediately. Consistent attendance is necessary for success in class and missing too many classes can lead to missed learning opportunities and a lower grade. We strongly encourage these students to make attendance a top priority going forward.`,
    `${student.body} has had low attendance in class, with only being present XX% of the time. It is important for ${student.body} to understand that regular attendance is essential for their academic success. They should prioritize attending all classes and making up any missed work. The teacher is available to provide support and guidance to help ${student.body} improve their attendance and performance.`
  ]
}
const attAns2 = (student) => {
  return [
    `Students with attendance percentages in the 21-40% range are showing some effort, but there is still room for improvement. It is important for these students to attend all classes, arrive on time, and stay engaged throughout the class. Seeking help from the teacher and utilizing additional resources can also benefit their attendance and overall performance in class.`,
    `${student.body} has had sporadic attendance in class, being present XX% of the time. While it is an improvement from the previous percentage range, there is still room for growth. Attending class regularly is crucial for ${student.body}'s academic success. They should prioritize attending all classes and participating in discussions to stay on track with the course material. The teacher is available to provide support and guidance to help ${student.body} improve their attendance and performance.`
  ]
}
const attAns3 = (student) => {
  return [
    `Students with attendance percentages in the 41-60% range are demonstrating consistent attendance, but there is still room for improvement. It is important for these students to actively participate in class discussions, complete assignments on time, and seek help when needed. With continued effort and dedication, these students can achieve even greater success.`,
    `${student.body} has had moderate attendance in class, being present XX% of the time. While it is a decent effort, there is still room for improvement. Attending class regularly is essential for ${student.body}'s academic success. They should prioritize attending all classes, participating in discussions, and seeking additional support from the teacher when needed. With continued effort and dedication, ${student.body} can improve their attendance and performance.`
  ]
}
const attAns4 = (student) => {
  return [
    `Students with attendance percentages in the 61-80% range are showing a strong commitment to attendance and participation in class. It is important for these students to maintain this level of dedication and continue to seek out opportunities to improve their performance. Continued engagement and effort can lead to even greater success in the class.`,
    `${student.body} has had good attendance in class, being present XX% of the time. This is a strong effort and demonstrates ${student.body}'s commitment to their academic success. However, there is still room for further improvement. Attending all classes, participating actively in discussions, and seeking additional support when needed can help ${student.body} maximize their academic potential. The teacher is available to provide guidance and support to help ${student.body} continue on their path to success.`
  ]
}
const attAns5 = (student) => {
  return [
    `Students with attendance percentages in the 81-100% range are demonstrating excellent attendance and participation in class. These students are setting a positive example for their peers and are on track for success in the class. It is important for these students to maintain their level of dedication and continue to seek out opportunities to challenge themselves and improve their performance.`,
    `${student.body} has had excellent attendance in class, being present XX% of the time. This is an outstanding effort and reflects ${student.body}'s commitment to their academic success. Attending all classes, actively participating in discussions, and seeking additional support when needed are essential steps for ${student.body} to maintain their level of success. The teacher commends ${student.body} for their dedication and is available to provide guidance and support to help them continue to excel.`
  ]
}

export default function AverageAttendance({ student }) {
  console.log('this is student', student)
  const chooseAnswer = (student) => {
    const num = student.averageAttendance
    if (num >= 1 && num <= 20) {
      const answers = attAns1(student)
      return answers[Math.floor(Math.random() * answers.length)]
    } else if (num >= 21 && num <= 40) {
      const answers = attAns2(student)
      return answers[Math.floor(Math.random() * answers.length)]
    } else if (num >= 41 && num <= 60) {
      const answers = attAns3(student)
      return answers[Math.floor(Math.random() * answers.length)]
    } else if (num >= 61 && num <= 80) {
      const answers = attAns4(student)
      return answers[Math.floor(Math.random() * answers.length)]
    } else if (num >= 81 && num <= 100) {
      const answers = attAns5(student)
      return answers[Math.floor(Math.random() * answers.length)]
    } else {
      return 'Number is not between 1 and 100.'
    }
  }
  return (
    <>
      {' '}
      <p className="text-base font-light leading-relaxed mt-0 mb-0 text-neutral-800">
        {chooseAnswer(student)}
      </p>
      {/* <footer class="block ml-4 text-neutral-600">
        - Attendance <cite>{student.averageAttendance} %</cite>
      </footer> */}
    </>
  )
}
