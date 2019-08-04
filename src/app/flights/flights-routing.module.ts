import {FlightsComponent} from './flights.component';
import {EditFlightComponent} from './edit-flight/edit-flight.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Tablica Route's
const routes: Routes = [
    { path: '', component: FlightsComponent },
    { path: ':key', component: EditFlightComponent },
];

// Creating/Tworzenie Modules
@NgModule ({
    imports: [RouterModule.forChild(routes)], // Module .forChild - Rejestrowanie routes ponizej root.
    exports: [RouterModule]
})
export class FlightsRoutingModule {}
