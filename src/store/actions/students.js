export function addStudent(state, student) {
  return {
    type: 'ADD_STUDENT',
    state,
    student
  };
}