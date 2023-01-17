import express from 'express'
import { readMajors } from '../controllers/majorsController.js'
import { readStudents } from '../controllers/studentsController.js'
import { updateStudent } from '../controllers/updateStudentController.js'
import { deleteStudent } from '../controllers/deleteController.js'
export const router = express.Router()

router.get('/', readMajors()) // method: GET all data majors in database to page
router.get('/:major', readStudents()) // method: GET all data students in database to page
router.get('/:major/update/:id_number', updateStudent()) // method: GET a data to form
router.get('/:major/delete/:id_number', deleteStudent()) // method: DELETE a data