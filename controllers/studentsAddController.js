import { connection } from "../services/config.js"

export const createStudents = () => {
    return (req, res) => {
        const { id_number, fullname, major } = req.body
        const insertStudent = `INSERT INTO student_bio
                               VALUES ('${id_number}', '${fullname}', '${major}')
        `
        connection.query(insertStudent, (err, fields) => {
            if (fields?.affectedRows > 0) res.redirect('/majors')
            else { if (err) console.log(`Error to insert data: ${err.stack}`) }
        })
    }
}