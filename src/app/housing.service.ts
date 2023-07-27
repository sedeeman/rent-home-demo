import { HousingLocation } from './housinglocation';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: String, lastName: String, email: String) {
    console.log(
      `Homes Application received: firstName:${firstName}, lastName: ${lastName}, email:${email}}`
    );
  }
  
}
