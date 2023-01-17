import { connection } from "../services/config.js"

export const updateStudent = () => {
    return (req, res) => {
        const { major, id_number } = req.params
        const sqlSelectToForm = `SELECT * FROM student_bio 
                              WHERE id_number = '${id_number}' AND major = '${major}'
        `
        connection.query(sqlSelectToForm, (err, fields) => {
            if (err) console.log(`Error to select data to form: ${err.stack}`)
            res.render('update-student', {
                title: `Edit ${id_number}`,
                actionForm: '/update',
                fields
            })
        })
    }
}

export const postUpdateForm = () => {
    return (req, res) => {
        const { id_number, fullname, major } = req.body
        const sqlUpdate = `UPDATE student_bio SET
                           id_number = '${id_number}', fullname = '${fullname}', major = '${major}'
                           WHERE id_number = '${id_number}'
        `
        connection.query(sqlUpdate, (err, fields) => {
            if (fields?.affectedRows > 0) res.redirect(`/majors/${major}`)
            else console.log(`Error to update: ${err.stack}`)
        })
    }
}