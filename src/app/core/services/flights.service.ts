import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs/index';
import {map} from 'rxjs/operators';
import {Flight} from '../../models/flight.model';


// Provided In mowi nam na jakim poziomie ten seris zostal zarejestrowany (root),
// czyli ten serwis bedzie widoczny w calej aplikacji. Jest jednoczesnie singieltonem.

@Injectable({
  providedIn: 'root'
})

export class FlightsService {
  private API_URL = '/flights';

  constructor(private db: AngularFireDatabase) { }

  // Rozpisujemy Methode do odbierania lotow:

  getFlights(): Observable<Flight[]> {
    // .snapshotChanges with API_URL and .db.list -> to get list of flights
    return this.db.list<Flight>(this.API_URL).snapshotChanges()
      .pipe(map(response => response.map(flight => this.assignKey(flight))));
  }

  // key: string -> rozpoznajemy flight po kluczu
  // path to flight: `${this.API_URL}/${key}`
  // methods:
  // .snapshotChanges with API_URL/$key -> to get a flight
  // .update -> for update after edit
  // .push -> add new flight
  // .remove -> remove flight

  getFlight(key: string): Observable<Flight> {
    return this.db.object<Flight>(`${this.API_URL}/${key}`).snapshotChanges()
        .pipe(map(flight => this.assignKey(flight)));
  }

  editFlight(key: string, flight: Flight) {
    return this.db.object<Flight>(`${this.API_URL}/${key}`).update(flight);
  }

  removeFlight(key: string) {
    return this.db.object(`${this.API_URL}/${key}`).remove();
  }

  addFlight(flight: Flight) {
    return this.db.list<Flight>(this.API_URL).push(flight);
  }

  private assignKey(flight) {
    return ({...flight.payload.val(), key: flight.key});
    // payload.val() - zwraca wartosc calego body "flights" z firebase
    // key: - domapowanie/dodanie key: flight do srodka body
  }
}
