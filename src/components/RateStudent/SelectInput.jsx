/* options must be => [
    {value='value1', textOutput='text1'},
    {value='value2', textOutput='text2'} 
]
*/

export const SelectInput = ({ label, options, onChange, name }) => {
  return (
    <label>
      {label}:
      <select name={name} defaultValue="" onChange={onChange}>
        <option value="" disabled>
          -- Choose a rating --
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.textOutput}
          </option>
        ))}
      </select>
    </label>
  )
}
