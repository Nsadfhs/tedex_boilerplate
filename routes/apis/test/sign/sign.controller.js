const pool = require("../../../../config/db_config");

// const bcrypt = require("bcrypt");
// const saltRounds = 10;
// const nodemailer = require("nodemailer");

let sql = "";
let data = new Array;

module.exports = {
    signup: function (req, res) {
        console.log("__start__", new Date.toFormat('YYYY-MM-DD HH24:MI:SS'));
        console.log("__require__", req.body);

        pool.getConnection((err, connection) => {

            if (!err) {
                sql = ``;
                data = [];
                connection.query(sql, data, (err, results) => {
                    connection.release();
                    console.log("__sql__", sql);
                    console.log("__data__", data);
                    console.log("__results__", results);
                    if (results) {
                        res.json({
                            status: {
                                status_code: 200,
                                status_msg: "success",
                                status_err: err
                            },
                            results: results
                        });
                    } else {
                        console.log("__err__", err);

                        res.json({
                            status: {
                                status_code: 404,
                                status_msg: "data empty",
                                status_err: null
                            },
                            results: null
                        });
                    };
                });
            } else {
                res.json({
                    status: {
                        status_code: 500,
                        status_msg: err.sqlMessage,
                        status_err: err
                    },
                    results: null
                });
            };
            console.log("__end__", new Date.toFormat('YYYY-MM-DD HH24:MI:SS'));
        });
    }
}