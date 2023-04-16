import RegisterService from '../../services/RegisterService'
import { SelectInput } from './SelectInput'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import registerService from '../../services/RegisterService'

export const RateStudentForm = ({ student, onClick }) => {
  const { id } = useParams()
  const defaultD = 'D'
  const [rateForm, setRateForm] = useState({
    student: student._id,
    group: id,
    attendance: '',
    hwCompletion: '',
    participation: defaultD
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
    // const registerService = new RegisterService()

    console.log(rateForm)
    registerService
      .createRegister({
        student: rateForm.student,
        group: id,
        // FIX THIS:
        // attendance: rateForm.attendance === 'on' ? 'on' : 'off',
        // hwCompletion: rateForm.hwCompletion === 'on' ? 'on' : 'off',
        attendance: rateForm.attendance === 'on',
        hwCompletion: rateForm.hwCompletion === 'on',
        participation: rateForm.participation
      })
      .then((register) => {
        alert('registro creado ' + register)
        console.log(register)
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
      <h2 className="text-xl p-4">
        <strong>{student.body}</strong>
      </h2>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label class="inline-flex items-center">
            <span class="italic mr-2">Attendance :</span>
            <input
              type="checkbox"
              name="attendance"
              class="form-checkbox h-5 w-5 text-gray-600"
              onChange={handleOnChange}
            />
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <span class="italic mr-2">Homework Completion :</span>
            <input
              type="checkbox"
              name="hwCompletion"
              class="form-checkbox h-5 w-5 text-gray-600"
              onChange={handleOnChange}
            />
          </label>
        </div>
        <div>
          <SelectInput
            label={<span class="italic mr-2">Participation:</span>}
            name="participation"
            defaultD={defaultD}
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

        <button
          id={'button-submit-' + student.id}
          className="mt-6 bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Submit register{' '}
        </button>
      </form>
    </div>
  )
}
