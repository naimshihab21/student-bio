import express from 'express'
import { createStudents } from '../controllers/studentsAddController.js'
export const router = express.Router()

// this's a page to create a new data
router.get('/', (req, res) => {
    res.render('add', {
        title: 'Add Bio',
        actionForm: '/add'
    })
})
router.post('/', createStudents()) // method: POST a new data student