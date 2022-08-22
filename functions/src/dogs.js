export function getDogs (req, res) {
    res.send([
            { name: 'Ryder', age: 4, breed: 'Dumbass', gender: 'MN'},
            { name: 'Duke', age: 2, breed: 'Rotweiler', gender: 'M'},
            { name: 'Indigo', age: 10, breed: 'Great Dane/Lab Mix', gender: 'MN'},


]);
}

export function testApi(req, res) {
    res.send({ success: true, message: 'API is working'});
}

