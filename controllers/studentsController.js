import { connection } from '../services/config.js'

export const readStudents = () => {
    return (req, res) => {
        const { major } = req.params
        const sql = `SELECT * FROM student_bio WHERE major = '${major}'`

        connection.query(sql, (err, fields) => {
            if (err) console.log(`Error read majors: ${err.stack}`)
            res.render('major-detail', {
                title: major,
                fields
            })
        })
    }
}