import { connection } from '../services/config.js'

const queryDetele = (req, res) => {
    const { major, id_number } =  req.params
    const sql = `DELETE FROM student_bio WHERE id_number = '${id_number}'`
    connection.query(sql, (err, fields) => {
        if (fields?.affectedRows > 0) queryCheck(res, major)
        else {
            if (err) console.log(`Error to delete data: ${err.stack}`)
        }
    })
}

const queryCheck = (res, major) => {
    const sqlCheck = `SELECT COUNT(major) as total FROM student_bio WHERE major = '${major}'`
    connection.query(sqlCheck, (err, fields) => {
        if (err) console.log(`Error to checking data: ${err.stack}`)
        fields.map(field => {
            if (field.total > 0) res.redirect(`/majors/${major}`)
            else res.redirect('/majors')
        })
    })
}

export const deleteStudent = () => (req, res) => queryDetele(req, res)