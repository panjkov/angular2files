import {Component} from "@angular/core";
import {Http, Headers} from '@angular/http';

import  {AuthHelper} from "../../authHelper/authHelper";

@Component(
    {
        selector: "files",
        templateUrl: "src/app/files/view-files.html"
    }
)

export class Files {
    constructor(http:Http, authHelper:AuthHelper) {
        http.get("https://graph.microsoft.com/v1.0/me/drive/root/children", {
            headers: new Headers({ "Authorization" : "Bearer " + authHelper.access_token})
        })
        .subscribe( res => {
            if(res.status === 200)
            this.files = res.json().value;
        });
    }
}