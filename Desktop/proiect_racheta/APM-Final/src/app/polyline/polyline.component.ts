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
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([28.720086, 44.407279, 0, 31.665544, 43.455375, 100000]),
    },
    {
      id: '2',
      material: Cesium.Color.RED.withAlpha(0.5),
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([29.665544, 44.455375, 2000, 45.818971, 43.476012, 8000]),
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
