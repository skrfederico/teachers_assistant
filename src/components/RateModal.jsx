// export const RateModal = ({ student, group }) => {
//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <h2>Rate Students</h2>
//         <h3>Rate {student.body}</h3>
//         <h3>in group: {group.body}</h3>
//         <div className="form-group">
//           <label htmlFor="attendance">Is the student present today?</label>
//           <input
//             type="checkbox"
//             checked={attendance === 100}
//             onChange={() => setAttendance(attendance === 100 ? 0 : 100)}
//             id="attendance"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="hwCompletion">Did the student do the hw today?</label>
//           <input
//             type="checkbox"
//             checked={hwCompletion === 100}
//             onChange={() => setHwCompletion(hwCompletion === 100 ? 0 : 100)}
//             id="hwCompletion"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="participation">Select participation grade:</label>
//           <select
//             id="participation"
//             value={participation}
//             onChange={(e) => setParticipation(e.target.value)}
//           >
//             <option value="A">A</option>
//             <option value="B">B</option>
//             <option value="C">C</option>
//             <option value="D">D</option>
//             <option value="E">E</option>
//             <option value="F">F</option>
//           </select>
//         </div>
//         <div className="modal-buttons">
//           <button onClick={handleSave}>Save</button>
//           <button onClick={handleModal}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   )
// }
