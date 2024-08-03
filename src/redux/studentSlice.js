import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [],
};

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    setStudents(state, action) {
      state.students = action.payload;
    },
    addStudent(state, action) {
      state.students.push(action.payload);
    },
    updateStudent(state, action) {
      const { id, data } = action.payload;
      const index = state.students.findIndex((student) => student.id === id);
      if (index !== -1) {
        state.students[index] = { ...state.students[index], ...data };
      }
    },
    deleteStudent(state, action) {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },
    completeStudent(state, action) {
      const { id } = action.payload;
      const index = state.students.findIndex((student) => student.id === id);
      if (index !== -1) {
        state.students[index].completed = true;
      }
    },
    seachStudent(state, action) {
      state.students = state.students.filter((student) =>
        student.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filterStudent(state, action) {
      state.students = state.students.filter(
        (student) => student.completed === action.payload
      );
    },
  },
});

export const {
  setStudents,
  addStudent,
  updateStudent,
  deleteStudent,
  completeStudent,
  seachStudent,
  filterStudent,
} = studentsSlice.actions;

export default studentsSlice.reducer;
