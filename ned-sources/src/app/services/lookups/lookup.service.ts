import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class LookupService {

    constructor(private http: Http) { }

    getAllCountries() {
        return this.http.get("http://" + environment.serverIpAddress + "/lookups/countries")
            .map((response) =>
                response.json());
    }

    getAllDma() {
        return this.http.get("http://" + environment.serverIpAddress + "/lookups/dma")
            .map((response) =>
                response.json());
    }

    getAllAffiliations() {
        return this.http.get("http://" + environment.serverIpAddress + "/lookups/affiliations")
            .map((response) =>
                response.json());
    }

    getAllRelationshipTypes() {
        return this.http.get("http://" + environment.serverIpAddress + "/lookups/relationshipTypes")
            .map((response) =>
                response.json());
    }

    getAllSourceTypes() {
        return this.http.get("http://" + environment.serverIpAddress + "/lookups/sourceTypes")
            .map((response) =>
                response.json());
    }

    getAllAttributeTypes() {
        return this.http.get("http://" + environment.serverIpAddress + "/lookups/releaseAttributeTypes")
            .map((response) =>
                response.json());
    }

    getAllEmployees() {
        return this.http.get("http://" + environment.serverIpAddress + "/lookups/employees")
            .map((response) =>
                response.json());
    }
}