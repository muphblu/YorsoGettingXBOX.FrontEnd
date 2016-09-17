/**
 * Created by stinger112 on 17.09.16.
 */

"use strict";

const baseUrl = 'http://localhost:3000';

class API {
    constructor() {

    }

// /api/deals
// [
//     {
//         "ID":12,
//         "Title": "title"
//         "Description":"desc"
//     },
//     {
//         "ID":12,
//         "Title": "title"
//         "Description":"desc"
//     }
// ]
    async getDeals() {

        let body = fetch(`${baseUrl}/api/deals`);
        let response = body.json();

        return response;
    }
}

export default API;