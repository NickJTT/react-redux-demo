import axios from 'axios';
import { URL } from './../constants';

export default class UserService {
    static getUsers = async () => {
        try {
            return (await axios.get(URL)).data;
        } catch(exception) {
            console.error(`Error: ${ exception }`);
        }
    }
}
