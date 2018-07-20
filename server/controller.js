

module.exports = {
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_houses()
            .then(houses => res.status(200).send(houses))
            .catch(err => {
                console.log(err);
                res.status(500).send('Houses not found');
            })
    },
    addHouse: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {name, address, city, state, zip} = req.body;
        dbInstance.add_house([name, address, city, state, zip])
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log(err)
                res.status(500).send('Unable to add house.');
            })
    },
    deleteHouse: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        dbInstance.delete_house([id])
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log(err)
                res.status(500).send('Unable to delete house');
            })
    }
}