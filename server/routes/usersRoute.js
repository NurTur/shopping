const passport = require('passport');
const bcrypt = require('bcrypt');

module.exports = function (router, USERS, RECORDS) {

    router.get('/', (req, res) => {
        res.status(200).json({ username: "", _id: "X" });
    });

    router.get("/:userId", async (req, res) => {
        const user = await USERS.findOne({ _id: req.params.userId })
        res.status(200).json(user);
    });

    router.post('/continue', async (req, res) => {
        const obj = await USERS.findOne({ _id: req.body._id });
        obj.phone = req.body.phone;
        obj.email = req.body.email;
        obj.products = [];
        obj.save();
        res.status(201).json({ message: "user registered" });
    });


    router.post('/login', passport.authenticate('local', { failureRedirect: '/api/user' }), (req, res) => {
        res.status(200).json({ username: req.user.username, _id: req.user._id, });
    });

    router.post('/register', (req, res, next) => {
        USERS.findOne({ username: req.body.username }, function (err, user) {
            if (err) {
                next(err);
            } else if (user) {
                res.redirect('/api/user');
            } else {
                const hash = bcrypt.hashSync(req.body.password, 12);
                const data = {
                    username: req.body.username,
                    password: hash
                };

                const newuser = new USERS(data);
                newuser.save().then(() => next(null, newuser)).catch((err) => res.redirect('/api/user'))
            }
        })
    },
        passport.authenticate('local', { failureRedirect: '/api/user' }),
        (req, res, next) => {
            res.status(200).json({ username: req.user.username, _id: req.user._id });
        }
    );

    router.use((req, res, next) => {
        res.status(404).json({ page: "Not Found" });
    });

}