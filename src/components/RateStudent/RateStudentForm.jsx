import RegisterService from '../../services/RegisterService'
import registerService from '../../services/RegisterService'
import { SelectInput } from './SelectInput'
import { useState } from 'react'

export const RateStudentForm = ({ student, onClick }) => {
  const [rateForm, setRateForm] = useState({
    attendance: '',
    homework: '',
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
        attendance: rateForm.attendance === 'on',
        homework: rateForm.homework === 'on',
        participation: rateForm.participation
      })
      .then((data) => {
        alert('registro creado ' + data.createAt)
        // ocultar boton submit
      })
      .catch((err) => {
        alert('algo salio mal')
        console.error(err.message)
      })

    // model.save(student, group, rateForm.attedance === 'on', )
    console.table(rateForm)
    // document.getElementById('button'+student.id).style.display = 'none'
    alert('alumno ' + student.body)
  }

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
            <input type="checkbox" name="homework" onChange={handleOnChange} />
          </label>
        </div>
        <div>
          <SelectInput
            label="Participacion"
            name="participation"
            onChange={handleOnChange}
            options={[
              { value: 'A', textOutput: 'Exellent' },
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
