import faker from 'faker';
import uuidv4 from 'uuid/v4';
import { resolve } from 'url';


export default (num) => new Promise((resolve, reject) => {
    resolve([...(Array(num))].map(() => ({
        id: uuidv4(),
        text: faker.lorem.sentence(),
        userName: faker.internet.userName(),
    })));
})
