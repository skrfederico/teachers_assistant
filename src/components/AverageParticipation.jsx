import React from 'react'

// // PARTICIPATION
// A grade (90-100%):
const partAns1 = (student) => {
  return [
    `${student.body} is an outstanding student who consistently produces high-quality work and actively participates in class. They consistently exceed expectations in terms of their engagement with the material, their level of preparation, and their willingness to ask insightful questions. Their performance in the course has been exceptional, and they are a true asset to the class.`,
    `${student.body} is a remarkable student who demonstrates a deep understanding of the course material and consistently produces work of exceptional quality. They are always well-prepared, actively participate in class, and demonstrate a strong ability to think critically and creatively. Their engagement with the material is exceptional, and they have consistently demonstrated a high level of skill and knowledge. Their performance in the course has been outstanding, and they are an excellent role model for their classmates.`,
    `${student.body} has demonstrated an exceptional level of performance in the course, consistently producing high-quality work and actively engaging with the material. They are well-prepared for class, ask insightful questions, and demonstrate a deep understanding of the material. They consistently exceed expectations and are a model student in terms of their participation, preparedness, and performance. Their exceptional work and positive attitude are an asset to the class, and they are sure to achieve great success in the future.`
  ]
}
// B grade (80-89%):
const partAns2 = (student) => {
  return [
    `${student.body} is a strong student who consistently produces high-quality work and actively participates in class. They demonstrate a solid understanding of the material and consistently show a willingness to engage with challenging concepts. While there is room for improvement in their performance, they have shown a strong work ethic and a willingness to seek help when needed. Overall, their performance in the course has been very good, and they are a valuable member of the class.`,
    `${student.body} is a capable student who consistently produces work of good quality and actively participates in class. They demonstrate a solid understanding of the course material and consistently show a willingness to engage with challenging concepts. While there is room for improvement in their performance, they have shown a strong work ethic and a willingness to seek help when needed. Overall, their performance in the course has been good, and they are a valuable member of the class.`,
    `${student.body} has demonstrated a solid level of performance in the course, consistently producing work of good quality and actively engaging with the material. They have a good understanding of the material and show a willingness to engage with challenging concepts. While there is room for improvement in their performance, they have shown a strong work ethic and a willingness to seek help when needed. Overall, their performance in the course has been good, and they are a positive presence in the class.`
  ]
}
// C grade (70-79%):
const partAns3 = (student) => {
  return [
    `${student.body} is a capable student who has shown a willingness to engage with the material and participate in class. While there is room for improvement in their performance, they have demonstrated a strong work ethic and a willingness to seek help when needed. With some additional effort and focus, they have the potential to improve their performance and achieve greater success in the course.`,
    `${student.body} has shown a willingness to engage with the material and participate in class, and has made some progress in their understanding of the course concepts. While there is room for improvement in their performance, they have shown a strong work ethic and a willingness to seek help when needed. With some additional effort and focus, they have the potential to improve their performance and achieve greater success in the course.`,
    `${student.body} has shown some effort in engaging with the material and participating in class, but there is still room for improvement in their performance. They have demonstrated a willingness to seek help when needed, but may benefit from additional effort and focus on the course material. With some additional effort and dedication, they have the potential to improve their performance and achieve greater success in the course.`
  ]
}
// D:
const partAns4 = (student) => {
  return [
    `${student.body}'s performance in class has been good, earning them a grade of 'D'. While there is room for improvement, ${student.body} has demonstrated consistent effort and participation throughout the term. To improve, ${student.body} should focus on completing assignments on time and taking more initiative in group discussions. Overall, ${student.body} is on track for success with continued effort and determination.`,
    `${student.body} has shown improvement in their class performance, earning them a grade of 'D-'. However, there is still room for further progress. To continue improving, ${student.body} should focus on developing critical thinking skills and actively participating in class discussions. Additionally, submitting assignments with attention to detail and on time can also benefit their overall performance. Overall, with continued effort and dedication, ${student.body} can achieve even greater success.`,
    `${student.body}'s class performance has been consistently strong, earning them a grade of 'D-'. Their dedication to their studies is evident through their active participation in class discussions and their consistent completion of assignments on time. To continue excelling, ${student.body} should challenge themselves to take on more advanced topics and continue to seek out opportunities for growth. Overall, ${student.body} is on track for continued success in future classes.`
  ]
}
// E:
const partAns5 = (student) => {
  return [
    `${student.body}'s performance in class has been unsatisfactory, resulting in a grade of 'E'. It is important for ${student.body} to take immediate action to improve their participation and engagement in class. To do so, ${student.body} should make an effort to attend all classes, arrive on time, and actively participate in discussions. Additionally, completing assignments on time and seeking help when needed can greatly benefit ${student.body}'s overall performance. It is important for ${student.body} to take these steps seriously in order to improve their grade and ensure future success.``${student.body}'s performance in class has been unacceptable, resulting in a grade of 'D-'. Immediate action is necessary for ${student.body} to improve their performance. This includes attending all classes and arriving on time, actively participating in discussions, and submitting assignments on time and with high quality. Seeking help from the teacher and utilizing additional resources can also benefit ${student.body}'s performance. It is important for ${student.body} to take these steps seriously in order to turn their performance around and avoid negative consequences.`,
    `${student.body}'s performance in class has been below expectations, resulting in a grade of 'E+'. Immediate action is necessary for ${student.body} to improve their performance. This includes attending all classes and arriving on time, actively participating in discussions, and seeking help from the teacher when needed. Additionally, submitting assignments with high quality and on time is crucial for improving their overall performance. It is important for ${student.body} to take these steps seriously in order to improve their grade and ensure future success.`
  ]
}
// F:
const partAns6 = (student) => {
  return [
    `${student.body}'s performance in class has been significantly below expectations, earning them a grade of 'F'. To improve, ${student.body} must prioritize their studies and make significant changes to their approach to class. This includes attending all classes, arriving on time, actively participating in discussions, and completing assignments on time. Seeking help and guidance from the teacher can also benefit ${student.body}'s performance. It is important for ${student.body} to take these steps seriously in order to improve their grade and achieve success in future classes.`,
    `${student.body}'s performance in class has been extremely poor, resulting in a grade of 'F+'. To improve, ${student.body} must take immediate action and make significant changes to their approach to class. This includes attending all classes, arriving on time, actively participating in discussions, and submitting assignments with high quality and on time. Additionally, seeking extra help and guidance from the teacher is strongly recommended. It is important for ${student.body} to prioritize their studies and take these steps seriously in order to improve their performance and avoid negative consequences.`,
    `${student.body}'s performance in class has been extremely unsatisfactory, earning them a grade of 'F-'. To improve, ${student.body} must make significant changes to their approach to class. This includes attending all classes, arriving on time, actively participating in discussions, and consistently submitting assignments with high quality and on time. Additionally, seeking help and guidance from the teacher is strongly recommended. It is important for ${student.body} to prioritize their studies and take these steps seriously in order to improve their performance and avoid negative consequences.`
  ]
}
export default function AverageParticipation({ student }) {
  switch (student.averageParticipation) {
    case 'A':
      return partAns1(student)[
        Math.floor(Math.random() * partAns1(student).length)
      ]
    case 'B':
      return partAns2(student)[
        Math.floor(Math.random() * partAns2(student).length)
      ]
    case 'C':
      return partAns3(student)[
        Math.floor(Math.random() * partAns3(student).length)
      ]
    case 'D':
      return partAns4(student)[
        Math.floor(Math.random() * partAns4(student).length)
      ]
    case 'E':
      return partAns5(student)[
        Math.floor(Math.random() * partAns5(student).length)
      ]
    case 'F':
      return partAns6(student)[
        Math.floor(Math.random() * partAns6(student).length)
      ]
    default:
      return 'Invalid grade'
  }
}

const ParticipationComment = ({ student }) => {
  const comment = AverageParticipation(student)

  return (
    <>
      {' '}
      <div class="text-base font-light leading-relaxed mt-0 mb-0 text-neutral-800">
        {comment}
      </div>
    </>
  )
}
