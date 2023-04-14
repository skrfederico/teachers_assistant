import React from 'react'

// // hwCompletion
// // CASE 1 (0-20%):
const hwAns1 = (student) => {
  return [
    `${student.body} is not meeting the minimum expectations for the class and needs to improve their homework completion rate. It's important for ${student.body} to identify any obstacles that are preventing them from completing their homework and seek help if needed. ${student.body} may fall behind in the class if they don't make a significant improvement.`,
    `${student.body} needs to step up their homework completion rate as they are currently not meeting the minimum expectations for the class. To improve, ${student.body} should identify any obstacles that are preventing them from completing their homework and seek help if needed. Falling behind in the class is a risk if they don't make a significant improvement.`,
    `The homework completion rate of ${student.body} is below the minimum expectations for the class, and they need to make a significant improvement. To do this, it's essential for ${student.body} to identify any obstacles that are preventing them from completing their homework and seek help if needed. Falling behind in the class is a risk if they don't take action.`
  ]
}
// CASE 2 - 21-40%:
const hwAns2 = (student) => {
  return [
    `${student.body} needs to set realistic goals and create a schedule to manage their time effectively in order to increase their homework completion rate to meet the expectations for the class. Engaging with the material and seeking help if needed will also be important for their success. While still below the expected standard for the class, ${student.body} has shown some improvement and is on the right track.`,
    `In order to meet the expectations for the class, ${student.body} needs to increase their homework completion rate by setting realistic goals and creating a schedule to manage their time effectively. Engaging with the material and seeking help if needed will also be crucial. Although still below the expected standard, it is positive that ${student.body} has shown improvement.`,
    `For ${student.body} to increase their homework completion rate to meet the expectations for the class, they should set realistic goals and create a schedule to manage their time effectively. Engaging with the material and seeking help if needed will also be necessary. While still below the expected standard, it's good to see that ${student.body} has made some progress.`
  ]
}
// CASE 3 41-60%:
const hwAns3 = (student) => {
  return [
    `${student.body} is heading in the right direction by making progress in their homework completion rate. Continuing to prioritize their homework and stay organized will be important for them to improve further. Engaging with the material and seeking help if needed will also help ${student.body} meet the expected standard for the class. Although still not meeting the expected standard, ${student.body} has shown improvement.`,
    `In order to improve further, ${student.body} needs to continue prioritizing their homework and staying organized. Engaging with the material and seeking help if needed will also be crucial. While still not meeting the expected standard, it's positive to see that ${student.body} has made progress in their homework completion rate.`,
    `While there is still room for improvement, it's good to see that ${student.body} has made progress in their homework completion rate. Continuing to prioritize their homework and staying organized will help them improve further. Engaging with the material and seeking help if needed will also be important for ${student.body} to meet the expected standard for the class.`
  ]
}
// CASE 4 - 61-80%:
const hwAns4 = (student) => {
  return [
    `${student.body} should take pride in meeting the expectations for homework completion, but they should also focus on areas where they can improve. They should continue to prioritize their homework and try to achieve excellence. Negative feedback for this percentage is that they still have some way to go to be at the top of the class. Positive feedback could be that they are on the right path and should keep up the good work.`,
    `${student.body} should be commended for meeting the expectations for homework completion. However, they should not rest on their laurels and instead continue to strive for improvement. It's important for them to keep engaging with the material and seek help if needed. Negative feedback for this percentage is that they still have room for growth. Positive feedback could be that they are doing a good job and should keep pushing themselves.`,
    `${student.body} is doing a decent job at meeting the expectations for homework completion. However, there is still significant room for improvement. It's important for them to prioritize their homework and aim for excellence. The student should also engage with the material and seek help if needed. Negative feedback for this percentage is that they are not quite at the expected standard yet. Positive feedback could be that they are showing improvement and should continue working towards their goals.`
  ]
}
// CASE 5 - 81-100%:
const hwAns5 = (student) => {
  return [
    `${student.body} is doing an outstanding job at meeting and exceeding the expectations for homework completion. ${student.body} should continue to prioritize their homework and strive for excellence. ${student.body} should also keep engaging with the material and seek help if needed. Negative feedback for this percentage is that they may become complacent and stop pushing themselves to achieve greater success. Positive feedback could be that they are doing an amazing job and are a role model for their classmates.`,
    `${student.body} should be proud of themselves for meeting and exceeding the expectations for homework completion. ${student.body} should continue to prioritize their homework and maintain their success. ${student.body} should also continue to engage with the material and seek help if needed. Negative feedback for this percentage is that they may become overconfident and lose their focus. Positive feedback could be that they are doing an exceptional job and should keep up the great work.`,
    `${student.body} has shown exceptional dedication and hard work in meeting and exceeding the expectations for homework completion. ${student.body} should continue to prioritize their homework and strive for excellence. ${student.body} should also continue to engage with the material and seek help if needed. Negative feedback for this percentage is that they may become burnt out and lose their passion for learning. Positive feedback could be that they are doing an outstanding job and are an inspiration to their classmates.`
  ]
}
export default function AverageHwCompletion({ student }) {
  const chooseAnswer = (student) => {
    const num = student.averageHwCompletion
    if (num >= 1 && num <= 20) {
      const answers = hwAns1(student)
      return (answers = [Math.floor(Math.random() * answers.length)])
    } else if (num >= 21 && num <= 40) {
      const answers = hwAns2(student)
      return answers[Math.floor(Math.random() * answers.length)]
    } else if (num >= 41 && num <= 60) {
      const answers = hwAns3(student)
      return answers[Math.floor(Math.random() * answers.length)]
    } else if (num >= 61 && num <= 80) {
      const answers = hwAns4(student)
      return answers[Math.floor(Math.random() * answers.length)]
    } else if (num >= 81 && num <= 100) {
      const answers = hwAns5(student)
      return answers[Math.floor(Math.random() * answers.length)]
    } else {
      return 'Number is not between 1 and 100.'
    }
  }
  return <p>{chooseAnswer(student)}</p>
}
