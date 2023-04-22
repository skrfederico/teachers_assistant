export const SelectInput = ({ label, options, onChange, name, defaultD }) => {
  return (
    <label>
      {label}:
      <select name={name} defaultValue={defaultD} onChange={onChange}>
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
