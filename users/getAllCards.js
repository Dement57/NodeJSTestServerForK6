import fs from 'fs/promises';
export default async function getAllCards(req, res) {
    const data = await fs.readFile('./data/usersList.txt', { encoding: 'utf-8' }, (err, usersList) => {
        if (err) {
            throw new Error('ERROR HERE ' + err)
        } else {
            return usersList;
        }
    });
    let countUsers = JSON.stringify(data.match(/Vladimir/g).length)
    console.log('Counting users is done', countUsers);
    res
        .writeHead(200, 'OK', {
            'Content-Type': 'application/text'
        })
        .end(countUsers);
}