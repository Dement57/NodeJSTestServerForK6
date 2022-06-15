
export default function getUserCard(req, res, counter) {
    const RANDOM = Math.ceil(Math.random() * 1000000000000000).toString().slice(1, 9)
    if (RANDOM < 98999999) {
        let objData = {
            name: 'Vladimir',
            age: 28,
            phoneNumber: "+79" + RANDOM
        }
        let response = JSON.stringify(objData);
        // console.log('COUNTER', counter++)
        res.send(response)
    } else {
        let objData = {
            name: 'Vladimir',
            age: 28,
            phoneNumber: "89" + RANDOM
        }
        let response = JSON.stringify(objData);
        // console.log('COUNTER', counter++)
        res.send(response)
    }
};