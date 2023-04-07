import RegisterService from '../../services/RegisterService'
import registerService from '../../services/RegisterService'
import { SelectInput } from './SelectInput'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export const RateStudentForm = ({ student, onClick }) => {
  const { id } = useParams()

  const [rateForm, setRateForm] = useState({
    student: student._id,
    group: id,
    attendance: '',
    hwCompletion: '',
    participation: ''
  })

  // son equivalentes
  // rateForm.attendance: 'algo'
  //rateForm['attendance']: 'algo'

  const handleOnChange = (event) => {
    setRateForm({ ...rateForm, [event.target.name]: event.target.value })
    console.log(rateForm)
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    // validacion de datos (selector no vacio...)
    const registerService = new RegisterService()

    registerService
      .createRegister({
        student: rateForm.student,
        group: id,
        attendance: rateForm.attendance === 'on',
        homework: rateForm.hwCompletion === 'on',
        participation: rateForm.participation
      })
      .then((register) => {
        alert('registro creado ' + register)
        // ocultar boton submit
      })
    // .catch((err) => {
    //   alert('algo salio mal')
    //   console.error(err.message)
    // })

    // registers.save(student, group, rateForm.attendance === 'on')
    console.table(rateForm)
    // document.getElementById('button'+student.id).style.display = 'none'
    alert('registro de alumno: ' + student.body)
  }

  //ALTERNATIVE HANDLEONSUBMIT
  // const handleOnSubmit = async (event) => {
  //   event.preventDefault()
  //   try {
  //     // Call createRegister method from RegisterService with rateForm data
  //     await registerService.createRegister(rateForm)
  //     // Reset the form after successfully submitting data
  //     setRateForm({
  //       student: student._id,
  //       group: id,
  //       attendance: '',
  //       hwCompletion: '',
  //       participation: ''
  //     })
  //     // Call onClick function passed from parent component to update the list of students after adding a new record
  //     onClick()
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  //
  return (
    <div>
      <h3>
        <strong>{student.body}</strong>
      </h3>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>
            Attendance:
            <input
              type="checkbox"
              name="attendance"
              onChange={handleOnChange}
            />
          </label>
        </div>
        <div>
          <label>
            Homework Completion:
            <input
              type="checkbox"
              name="hwCompletion"
              onChange={handleOnChange}
            />
          </label>
        </div>
        <div>
          <SelectInput
            label="participation"
            name="participation"
            onChange={handleOnChange}
            options={[
              { value: 'A', textOutput: 'Excellent' },
              { value: 'B', textOutput: 'Good' },
              { value: 'C', textOutput: 'Above Average' },
              { value: 'D', textOutput: 'Average' },
              { value: 'E', textOutput: 'Below Average' },
              { value: 'F', textOutput: 'Poor' }
            ]}
          />
        </div>
        <button id={'button-submit-' + student.id} type="submit">
          Submit Ratings
        </button>
      </form>
    </div>
  )
}
