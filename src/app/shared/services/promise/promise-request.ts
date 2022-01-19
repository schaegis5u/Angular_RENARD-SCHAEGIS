import { Injectable } from "@angular/core";
import { Http } from "../http/http";

@Injectable({
    providedIn: 'root'
})
export class PromiseRequest {

    constructor(public promise: Http) {

    }

    public createPost(dataSend: any = [], url: string) {
        return new Promise((resolve, reject) => {
            this.promise.post(url, dataSend).subscribe(
                response => {
                    if (response.data) {
                        resolve(response.data)
                    } else {
                        reject()
                    }
                },
                error => {
                    reject()
                }
            )

        })
    }

    public createGet(url: string) {
        return new Promise((resolve, reject) => {
            this.promise.get(url).subscribe(
                response => {
                    if (response) {
                        resolve(response)
                    } else {
                        reject()
                    }
                },
                error => {
                    reject()
                }
            )

        })
    }
}
