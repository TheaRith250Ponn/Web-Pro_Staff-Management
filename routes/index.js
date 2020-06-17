module.exports = {
    getHomePage: (req, res) => {
        let query = "SELECT * FROM `staffs` ORDER BY id ASC"; // query database to get all the staffs

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('index.ejs', {
                title: "Welcome to Staff Management | View staffs"
                ,staffs: result
            });
        });
    },
};