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

    // GET /api/deals/<DealID>
    // {
    //     "Id": 0,
    //     "Title": "Title 1",
    //     "Description": "Description 1",
    //     "ContractId": "123123123123123",
    //     "Documents": [
    // {
    //     "Id": 1,
    //     "Name": "\"data.txt\"",
    //     "Link": "/Files/D7D323EF1C5FB9F271E3EAB6BD00615D.txt",
    //     "SignInfo": null,
    //     "Status": 0,
    //     "Hash": "D7D323EF1C5FB9F271E3EAB6BD00615D"
    // },
    // {
    //     "Id": 1,
    //     "Name": "\"rules.txt\"",
    //     "Link": "/Files/B4CA0C01B2015928036A1304FB4936F4.txt",
    //     "SignInfo": null,
    //     "Status": 0,
    //     "Hash": "B4CA0C01B2015928036A1304FB4936F4"
    // }
    //     ]
    // }
    static async getDeal(id) {
        let body = await fetch(`${baseUrl}/api/deals/${id}`);

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

}

export default API;
