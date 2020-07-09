import { Injectable } from '@angular/core';
import { from, interval } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockDataProviderService {

  constructor() {
  }

  get$(amount = 1) {
    const staticEntities = this.initEntities(amount);
    return from(staticEntities);
  }

  getDataSteam$(amount = 1, intervalMs = 1000) {
    const staticEntities = this.initRandom(amount);

    return interval(intervalMs).pipe(
      map(intervalValue => {
        return staticEntities.map(entity => {
         const cartographic = Cesium.Cartographic.fromCartesian(entity.position);
          cartographic.longitude += Cesium.Math.toRadians(+0.003
            * intervalValue);
          cartographic.latitude += Cesium.Math.toRadians(-0.00073 * intervalValue);
          cartographic.altitude += 2000 * intervalValue;
          entity.position = Cesium.Cartographic.toCartesian(cartographic);
          return entity;
        });
      }),
      flatMap(entity => entity));
  }

  private initEntities(amount) {
    const staticEntities = [];
      staticEntities.push({
        id: toString(),
        position: Cesium.Cartesian3.fromDegreesArrayHeights(-100, 40, 0),
      });
    return staticEntities;
  }

  private initRandom(amount) {

    const staticEntities = [];
    for (let i = 1; i<1000; i++) {
      const lat = 44.407279;
      const long = 28.720086;
      const altitude = 50000;
      staticEntities.push({
        id: toString(),
        position: Cesium.Cartesian3.fromDegrees(long, lat, altitude),
      });
    }
    return staticEntities;
  }
}

