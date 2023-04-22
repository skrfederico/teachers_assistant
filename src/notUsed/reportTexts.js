// Attendance CASE 1 (0-20%):
const attAns1 = [
  `For students with attendance percentages in the 0-20% range, it is crucial to improve attendance immediately. Consistent attendance is necessary for success in class and missing too many classes can lead to missed learning opportunities and a lower grade. We strongly encourage these students to make attendance a top priority going forward.`,
  `${student.body} has had low attendance in class, with only being present ${student.averageAttendance} of the time. It is important for ${student.body} to understand that regular attendance is essential for their academic success. They should prioritize attending all classes and making up any missed work. The teacher is available to provide support and guidance to help ${student.body} improve their attendance and performance.`
]

//CASE 2 - 21-40%:
const attAns2 = [
  `Students with attendance percentages in the 21-40% range are showing some effort, but there is still room for improvement. It is important for these students to attend all classes, arrive on time, and stay engaged throughout the class. Seeking help from the teacher and utilizing additional resources can also benefit their attendance and overall performance in class.`,
  `${student.body} has had sporadic attendance in class, being present ${student.averageAttendance}% of the time. While it is an improvement from the previous percentage range, there is still room for growth. Attending class regularly is crucial for ${student.body}'s academic success. They should prioritize attending all classes and participating in discussions to stay on track with the course material. The teacher is available to provide support and guidance to help ${student.body} improve their attendance and performance.`
]

// CASE 3 - 41-60%:
const attAns3 = [
  `Students with attendance percentages in the 41-60% range are demonstrating consistent attendance, but there is still room for improvement. It is important for these students to actively participate in class discussions, complete assignments on time, and seek help when needed. With continued effort and dedication, these students can achieve even greater success.`,
  `${student.body} has had moderate attendance in class, being present ${student.averageAttendance}% of the time. While it is a decent effort, there is still room for improvement. Attending class regularly is essential for ${student.body}'s academic success. They should prioritize attending all classes, participating in discussions, and seeking additional support from the teacher when needed. With continued effort and dedication, ${student.body} can improve their attendance and performance.`
]

// CASE 4 - 61-80%:
const attAns4 = [
  `Students with attendance percentages in the 61-80% range are showing a strong commitment to attendance and participation in class. It is important for these students to maintain this level of dedication and continue to seek out opportunities to improve their performance. Continued engagement and effort can lead to even greater success in the class.`,
  `${student.body} has had good attendance in class, being present ${student.averageAttendance}% of the time. This is a strong effort and demonstrates ${student.body}'s commitment to their academic success. However, there is still room for further improvement. Attending all classes, participating actively in discussions, and seeking additional support when needed can help ${student.body} maximize their academic potential. The teacher is available to provide guidance and support to help ${student.body} continue on their path to success.`
]

// CASE 5 - 81-100%:
const attAns5 = [
  `Students with attendance percentages in the 81-100% range are demonstrating excellent attendance and participation in class. These students are setting a positive example for their peers and are on track for success in the class. It is important for these students to maintain their level of dedication and continue to seek out opportunities to challenge themselves and improve their performance.`,
  `${student.body} has had excellent attendance in class, being present ${student.averageAttendance}% of the time. This is an outstanding effort and reflects ${student.body}'s commitment to their academic success. Attending all classes, actively participating in discussions, and seeking additional support when needed are essential steps for ${student.body} to maintain their level of success. The teacher commends ${student.body} for their dedication and is available to provide guidance and support to help them continue to excel.`
]

// hwCompletion CASE 1 (0-20%):
const hwAns1 = [
  `${student.body} is not meeting the minimum expectations for the class and needs to improve their homework completion rate. It's important for ${student.body} to identify any obstacles that are preventing them from completing their homework and seek help if needed. ${student.body} may fall behind in the class if they don't make a significant improvement.`,
  `${student.body} needs to step up their homework completion rate as they are currently not meeting the minimum expectations for the class. To improve, ${student.body} should identify any obstacles that are preventing them from completing their homework and seek help if needed. Falling behind in the class is a risk if they don't make a significant improvement.`,
  `The homework completion rate of ${student.body} is below the minimum expectations for the class, and they need to make a significant improvement. To do this, it's essential for ${student.body} to identify any obstacles that are preventing them from completing their homework and seek help if needed. Falling behind in the class is a risk if they don't take action.`
]
// CASE 2 - 21-40%:
const hwAns2 = [
  `${student.body} needs to set realistic goals and create a schedule to manage their time effectively in order to increase their homework completion rate to meet the expectations for the class. Engaging with the material and seeking help if needed will also be important for their success. While still below the expected standard for the class, ${student.body} has shown some improvement and is on the right track.`,
  `In order to meet the expectations for the class, ${student.body} needs to increase their homework completion rate by setting realistic goals and creating a schedule to manage their time effectively. Engaging with the material and seeking help if needed will also be crucial. Although still below the expected standard, it is positive that ${student.body} has shown improvement.`,
  `For ${student.body} to increase their homework completion rate to meet the expectations for the class, they should set realistic goals and create a schedule to manage their time effectively. Engaging with the material and seeking help if needed will also be necessary. While still below the expected standard, it's good to see that ${student.body} has made some progress.`
]
// CASE 3 - 41-60%:
const hwAns3 = [
  `${student.body} is heading in the right direction by making progress in their homework completion rate. Continuing to prioritize their homework and stay organized will be important for them to improve further. Engaging with the material and seeking help if needed will also help ${student.body} meet the expected standard for the class. Although still not meeting the expected standard, ${student.body} has shown improvement.`,
  `In order to improve further, ${student.body} needs to continue prioritizing their homework and staying organized. Engaging with the material and seeking help if needed will also be crucial. While still not meeting the expected standard, it's positive to see that ${student.body} has made progress in their homework completion rate.`,
  `While there is still room for improvement, it's good to see that ${student.body} has made progress in their homework completion rate. Continuing to prioritize their homework and staying organized will help them improve further. Engaging with the material and seeking help if needed will also be important for ${student.body} to meet the expected standard for the class.`
]
// CASE 4 - 61-80%:
const hwAns4 = [
  `${student.body} should take pride in meeting the expectations for homework completion, but they should also focus on areas where they can improve. They should continue to prioritize their homework and try to achieve excellence. Negative feedback for this percentage is that they still have some way to go to be at the top of the class. Positive feedback could be that they are on the right path and should keep up the good work.`,
  `${student.body} should be commended for meeting the expectations for homework completion. However, they should not rest on their laurels and instead continue to strive for improvement. It's important for them to keep engaging with the material and seek help if needed. Negative feedback for this percentage is that they still have room for growth. Positive feedback could be that they are doing a good job and should keep pushing themselves.`,
  `${student.body} is doing a decent job at meeting the expectations for homework completion. However, there is still significant room for improvement. It's important for them to prioritize their homework and aim for excellence. The student should also engage with the material and seek help if needed. Negative feedback for this percentage is that they are not quite at the expected standard yet. Positive feedback could be that they are showing improvement and should continue working towards their goals.`
]
// CASE 5 - 81-100%:
const hwAns5 = [
  `${student.body} is doing an outstanding job at meeting and exceeding the expectations for homework completion. ${student.body} should continue to prioritize their homework and strive for excellence. ${student.body} should also keep engaging with the material and seek help if needed. Negative feedback for this percentage is that they may become complacent and stop pushing themselves to achieve greater success. Positive feedback could be that they are doing an amazing job and are a role model for their classmates.`,
  `${student.body} should be proud of themselves for meeting and exceeding the expectations for homework completion. ${student.body} should continue to prioritize their homework and maintain their success. ${student.body} should also continue to engage with the material and seek help if needed. Negative feedback for this percentage is that they may become overconfident and lose their focus. Positive feedback could be that they are doing an exceptional job and should keep up the great work.`,
  `${student.body} has shown exceptional dedication and hard work in meeting and exceeding the expectations for homework completion. ${student.body} should continue to prioritize their homework and strive for excellence. ${student.body} should also continue to engage with the material and seek help if needed. Negative feedback for this percentage is that they may become burnt out and lose their passion for learning. Positive feedback could be that they are doing an outstanding job and are an inspiration to their classmates.`
]

// PARTICIPATION
// A grade (90-100%):
const partAns1 = [
  `${student.body} is an outstanding student who consistently produces high-quality work and actively participates in class. They consistently exceed expectations in terms of their engagement with the material, their level of preparation, and their willingness to ask insightful questions. Their performance in the course has been exceptional, and they are a true asset to the class.`,
  `${student.body} is a remarkable student who demonstrates a deep understanding of the course material and consistently produces work of exceptional quality. They are always well-prepared, actively participate in class, and demonstrate a strong ability to think critically and creatively. Their engagement with the material is exceptional, and they have consistently demonstrated a high level of skill and knowledge. Their performance in the course has been outstanding, and they are an excellent role model for their classmates.`,
  `${student.body} has demonstrated an exceptional level of performance in the course, consistently producing high-quality work and actively engaging with the material. They are well-prepared for class, ask insightful questions, and demonstrate a deep understanding of the material. They consistently exceed expectations and are a model student in terms of their participation, preparedness, and performance. Their exceptional work and positive attitude are an asset to the class, and they are sure to achieve great success in the future.`
]
// B grade (80-89%):
const partAns2 = [
  `${student.body} is a strong student who consistently produces high-quality work and actively participates in class. They demonstrate a solid understanding of the material and consistently show a willingness to engage with challenging concepts. While there is room for improvement in their performance, they have shown a strong work ethic and a willingness to seek help when needed. Overall, their performance in the course has been very good, and they are a valuable member of the class.`,
  `${student.body} is a capable student who consistently produces work of good quality and actively participates in class. They demonstrate a solid understanding of the course material and consistently show a willingness to engage with challenging concepts. While there is room for improvement in their performance, they have shown a strong work ethic and a willingness to seek help when needed. Overall, their performance in the course has been good, and they are a valuable member of the class.`,
  `${student.body} has demonstrated a solid level of performance in the course, consistently producing work of good quality and actively engaging with the material. They have a good understanding of the material and show a willingness to engage with challenging concepts. While there is room for improvement in their performance, they have shown a strong work ethic and a willingness to seek help when needed. Overall, their performance in the course has been good, and they are a positive presence in the class.`
]
// C grade (70-79%):
const partAns3 = [
  `${student.body} is a capable student who has shown a willingness to engage with the material and participate in class. While there is room for improvement in their performance, they have demonstrated a strong work ethic and a willingness to seek help when needed. With some additional effort and focus, they have the potential to improve their performance and achieve greater success in the course.`,
  `${student.body} has shown a willingness to engage with the material and participate in class, and has made some progress in their understanding of the course concepts. While there is room for improvement in their performance, they have shown a strong work ethic and a willingness to seek help when needed. With some additional effort and focus, they have the potential to improve their performance and achieve greater success in the course.`,
  `${student.body} has shown some effort in engaging with the material and participating in class, but there is still room for improvement in their performance. They have demonstrated a willingness to seek help when needed, but may benefit from additional effort and focus on the course material. With some additional effort and dedication, they have the potential to improve their performance and achieve greater success in the course.`
]
// D:
const partAns4 = [
  `${student.body}'s performance in class has been good, earning them a grade of 'C'. While there is room for improvement, ${student.body} has demonstrated consistent effort and participation throughout the term. To improve, ${student.body} should focus on completing assignments on time and taking more initiative in group discussions. Overall, ${student.body} is on track for success with continued effort and determination.`,
  `${student.body} has shown improvement in their class performance, earning them a grade of 'B-'. However, there is still room for further progress. To continue improving, ${student.body} should focus on developing critical thinking skills and actively participating in class discussions. Additionally, submitting assignments with attention to detail and on time can also benefit their overall performance. Overall, with continued effort and dedication, ${student.body} can achieve even greater success.`,
  `${student.body}'s class performance has been consistently strong, earning them a grade of 'A-'. Their dedication to their studies is evident through their active participation in class discussions and their consistent completion of assignments on time. To continue excelling, ${student.body} should challenge themselves to take on more advanced topics and continue to seek out opportunities for growth. Overall, ${student.body} is on track for continued success in future classes.`
]
// E:
const partAns5 = [
  `${student.body}'s performance in class has been unsatisfactory, resulting in a grade of 'D'. It is important for ${student.body} to take immediate action to improve their participation and engagement in class. To do so, ${student.body} should make an effort to attend all classes, arrive on time, and actively participate in discussions. Additionally, completing assignments on time and seeking help when needed can greatly benefit ${student.body}'s overall performance. It is important for ${student.body} to take these steps seriously in order to improve their grade and ensure future success.``${student.body}'s performance in class has been unacceptable, resulting in a grade of 'D-'. Immediate action is necessary for ${student.body} to improve their performance. This includes attending all classes and arriving on time, actively participating in discussions, and submitting assignments on time and with high quality. Seeking help from the teacher and utilizing additional resources can also benefit ${student.body}'s performance. It is important for ${student.body} to take these steps seriously in order to turn their performance around and avoid negative consequences.`,
  `${student.body}'s performance in class has been below expectations, resulting in a grade of 'D+'. Immediate action is necessary for ${student.body} to improve their performance. This includes attending all classes and arriving on time, actively participating in discussions, and seeking help from the teacher when needed. Additionally, submitting assignments with high quality and on time is crucial for improving their overall performance. It is important for ${student.body} to take these steps seriously in order to improve their grade and ensure future success.`
]
// F:
const partAns6 = [
  `${student.body}'s performance in class has been significantly below expectations, earning them a grade of 'E'. To improve, ${student.body} must prioritize their studies and make significant changes to their approach to class. This includes attending all classes, arriving on time, actively participating in discussions, and completing assignments on time. Seeking help and guidance from the teacher can also benefit ${student.body}'s performance. It is important for ${student.body} to take these steps seriously in order to improve their grade and achieve success in future classes.`,
  `${student.body}'s performance in class has been extremely poor, resulting in a grade of 'E+'. To improve, ${student.body} must take immediate action and make significant changes to their approach to class. This includes attending all classes, arriving on time, actively participating in discussions, and submitting assignments with high quality and on time. Additionally, seeking extra help and guidance from the teacher is strongly recommended. It is important for ${student.body} to prioritize their studies and take these steps seriously in order to improve their performance and avoid negative consequences.`,
  `${student.body}'s performance in class has been extremely unsatisfactory, earning them a grade of 'E-'. To improve, ${student.body} must make significant changes to their approach to class. This includes attending all classes, arriving on time, actively participating in discussions, and consistently submitting assignments with high quality and on time. Additionally, seeking help and guidance from the teacher is strongly recommended. It is important for ${student.body} to prioritize their studies and take these steps seriously in order to improve their performance and avoid negative consequences.`
]

function chooseHwAnswer(num, hwAns1, hwAns2, hwAns3, hwAns4, hwAns5) {
  let chosenHwAnswer = ''
  if (num >= 1 && num <= 20) {
    chosenHwAnswer = hwAns1[Math.floor(Math.random() * hwAns1.length)]
  } else if (num >= 21 && num <= 40) {
    chosenHwAnswer = hwAns2[Math.floor(Math.random() * hwAns2.length)]
  } else if (num >= 41 && num <= 60) {
    chosenHwAnswer = hwAns3[Math.floor(Math.random() * hwAns3.length)]
  } else if (num >= 61 && num <= 80) {
    chosenHwAnswer = hwAns4[Math.floor(Math.random() * hwAns4.length)]
  } else if (num >= 81 && num <= 100) {
    chosenHwAnswer = hwAns5[Math.floor(Math.random() * hwAns5.length)]
  } else {
    chosenHwAnswer = 'Number is not between 1 and 100.'
  }
  return <p>{chosenHwAnswer}</p>
}

function chooseAttAnswer(num, attAns1, attAns2, attAns3, attAns4, attAns5) {
  let chosenAttAnswer = ''
  switch (true) {
    case num >= 1 && num <= 20:
      chosenAttAnswer = attAns1[Math.floor(Math.random() * attAns1.length)]
      break
    case num >= 21 && num <= 40:
      chosenAttAnswer = attAns2[Math.floor(Math.random() * attAns2.length)]
      break
    case num >= 41 && num <= 60:
      chosenAttAnswer = attAns3[Math.floor(Math.random() * attAns3.length)]
      break
    case num >= 61 && num <= 80:
      chosenAttAnswer = attAns4[Math.floor(Math.random() * attAns4.length)]
      break
    case num >= 81 && num <= 100:
      chosenAttAnswer = attAns5[Math.floor(Math.random() * attAns5.length)]
      break
    default:
      chosenAttAnswer = 'Number is not between 1 and 100.'
  }
  return <p>{chosenAttAnswer}</p>
}

function choosePartAnswer(
  letter,
  partAns1,
  partAns2,
  partAns3,
  partAns4,
  partAns5,
  partAns6
) {
  let chosenPartAnswer = ''
  switch (letter) {
    case 'A':
      chosenPartAnswer = partAns1[Math.floor(Math.random() * partAnsA.length)]
      break
    case 'B':
      chosenPartAnswer = partAns2[Math.floor(Math.random() * partAnsB.length)]
      break
    case 'C':
      chosenPartAnswer = partAns3[Math.floor(Math.random() * partAnsC.length)]
      break
    case 'D':
      chosenPartAnswer = partAns4[Math.floor(Math.random() * partAnsD.length)]
      break
    case 'E':
      chosenPartAnswer = partAns5[Math.floor(Math.random() * partAnsE.length)]
      break
    case 'F':
      chosenPartAnswer = partAns6[Math.floor(Math.random() * partAnsF.length)]
      break
    default:
      chosenPartAnswer = 'Input is not a valid letter between A and E.'
  }
  return <p>{chosenPartAnswer}</p>
}
