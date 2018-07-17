import faker from 'faker';
import uuidv4 from 'uuid/v4';


export default (num) => (
    [...(Array(num))].map(() => ({
        id: uuidv4(),
        text: faker.lorem.sentence(),
        userName: faker.internet.userName(),
    }))
);
