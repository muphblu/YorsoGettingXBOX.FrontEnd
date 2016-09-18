/**
 * Created by stinger112 on 17.09.16.
 */

"use strict";

const baseUrl = 'http://we-need-xbox.azurewebsites.net';

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
    static async getDeals() {
        let body = await fetch(`${baseUrl}/api/deals`);

        return body.json();
    }

    // POST /api/deals
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
    static async postDocument() {

        // let body = await fetch(`${baseUrl}/api/deals`);
        // let response = body.json();

        return true;
    }


    static async addDeal(title, desc) {
        let body = await fetch(`${baseUrl}/api/deals`, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( { Title: title, Description: desc } ),
            method: 'post' });
        return body.json();
    }

}

export default API;
