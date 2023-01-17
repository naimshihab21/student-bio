import { connection } from '../services/config.js'

export const readMajors = () => {
    return (req, res) => {
        const sqlSelect = "SELECT DISTINCT major FROM student_bio ORDER BY major"
        connection.query(sqlSelect, (err, fields) => {
            if (err) console.log(`Error read majors: ${err.stack}`)
            res.render('majors', {
                title: 'Majors',
                majors: req.params.major,
                fields
            })
        })
    }
}