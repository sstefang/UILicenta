import { Component, OnInit } from '@angular/core';
import { AcNotification, ActionType } from 'angular-cesium';
import { map } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import {HttpHeaders} from "@angular/common/http";
let headers = new HttpHeaders().set('access-control-allow-origin',"http://localhost:4200/");

@Component({
  selector: 'polyline-layer-example',
  template: `
      <ac-layer acFor="let polyline of polylines$" [context]="this" [show]="show">
          <ac-polyline-desc props="{
              width : 8,
              positions: polyline.positions,
              material: polyline.material,
            }">
          </ac-polyline-desc>
      </ac-layer>
  `,
})
export class PolylineComponent implements OnInit {
  polylines$: Observable<AcNotification>;

  entities = [
    {
      id: '1',
      material: Cesium.Color.RED.withAlpha(0.5),
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([28.720086, 44.407279, 0, 35.55776, 42.92069,  100000]),
    },
    {
      id: '2',
      material: Cesium.Color.RED.withAlpha(0.5),
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([35.55776, 42.92069, 100000, 103.4093, 0.3247273,  310000])
    },
    {
      id: '3',
      material: Cesium.Color.RED.withAlpha(0.5),
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([ 103.4093, 0.3247273,  310000, 143.6632, -30.16833,  330000,])
    },
    {
      id: '4',
      material: Cesium.Color.RED.withAlpha(0.5),
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([ 143.6632, -30.16833,  330000, 261.4367, -14.80083,  350000,])
    },
    {
      id: '5',
      material: Cesium.Color.RED.withAlpha(0.5),
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([  261.4367, -14.80083,  350000, -31.23912, 34.43009, 350000,])
    },
    {
      id: '6',
      material: Cesium.Color.RED.withAlpha(0.5),
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([  -31.23912, 34.43009, 350000, 29.40542, 43.81517, 370000,])
    }
  ];
  Cesium = Cesium;
  show = true;

  constructor() {
  }

  ngOnInit() {
    this.polylines$ = from(this.entities).pipe(map(entity => ({
      id: entity.id,
      actionType: ActionType.ADD_UPDATE,
      entity: entity,
    })));
  }

  setShow($event: boolean) {
    this.show = $event;
  }

}
