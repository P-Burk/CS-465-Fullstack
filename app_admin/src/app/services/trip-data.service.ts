import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Trip } from '../models/trip';
import { User } from '../user';
import { AuthResponse } from '../authresponse';
import { BROWSER_STORAGE } from '../storage';

@Injectable()
export class TripDataService {

  constructor(private httpClient: HttpClient, 
    @Inject(BROWSER_STORAGE) private storage: Storage) { }

  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripURL = `${this.apiBaseUrl}trips/`

  //get multiple trips
  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrips');
    return this.httpClient
      .get(`${this.apiBaseUrl}trips`, this.getBearerToken())
      .toPromise()
      .then(response => response as Trip[])
      .catch(this.handleError);
  }

  //get single trip
  public getTrip(tripCode: string): Promise<Trip> {
    console.log('Inside TripDataService#getTrip(tripCode)');
    return this.httpClient
      .get(this.tripURL + tripCode)
      .toPromise()
      .then(response => response as Trip)
      .catch(this.handleError);
  }

  public addTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#addTrip');
    return this.httpClient
      .post(this.tripURL, formData, this.getBearerToken())
      .toPromise()
      .then(response => response as Trip[])
      .catch(this.handleError);
  }

  public updateTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#updateTrip');
    console.log(formData);
    return this.httpClient
      .put(this.tripURL + formData.code, formData, this.getBearerToken())
      .toPromise()
      .then(response => response as Trip[])
      .catch(this.handleError);
  }

  public deleteTrip(tripCode: string): Promise<Trip> {
    console.log('Inside TripDataService#deleteTrip(tripCode)');
    return this.httpClient
      .delete(this.tripURL + tripCode, this.getBearerToken())
      .toPromise()
      .then(response => response as Trip)
      .catch(this.handleError);
  }

  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.httpClient
    .post(url, user)
    .toPromise()
    .then(response => response as AuthResponse)
    .catch(this.handleError);
  }

  private getBearerToken() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${this.storage.getItem('travlr-token')}` })
    };
    return httpOptions;
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong: ', error);
    return Promise.reject(error.message || error);
  } 
}
