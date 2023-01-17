import express from 'express'
import { postUpdateForm } from '../controllers/updateStudentController.js'
export const router = express.Router()

router.post('/', postUpdateForm()) // method: PUT a new data to database