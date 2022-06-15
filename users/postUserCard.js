import fs from 'fs';
export default function postUserCard(req, res) {
    let body = req.body;
    let responseBody = JSON.stringify(body)
    // console.log('POST BODY:', body)
    fs.appendFile('./data/usersList.txt', JSON.stringify(req.body) + '\n', 'utf-8', () => {
        console.log(`user with UUID ${body.uuid} was created`)
    })
    res
        .writeHead(201, 'Created', {
            'Content-Type': 'application/json'
        })
        .end(responseBody);

}