import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { PanicModel, PanicsResponse } from "../config/panics.types";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class PanicsService {

    public constructor(private readonly http: HttpClient) {
    }

    public fetch(): Observable<PanicModel[]> {
        return this.http.get<PanicsResponse>(`${ environment.apiUrl }/api/panics`).pipe(
            map(res => res.data.panics)
        );
    }
}
