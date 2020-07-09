import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CameraService, CesiumEvent, MapEventsManagerService, SceneMode} from "angular-cesium";

@Component({
  selector: 'track-entity-layer',
  templateUrl: 'track-entity-layer.component.html',
})
export class TrackEntityLayerComponent implements OnInit, AfterViewInit {
    ngAfterViewInit(): void {
        throw new Error("Method not implemented.");
    }
  constructor(private mapEventsManager: MapEventsManagerService,
              private cameraService: CameraService) {
  }

  ngOnInit() {
    // PERFORMANCE_SCENE2D - columbos view with 2D restrications, better perfornace then SCENE2D.
    this.cameraService.setSceneMode(SceneMode.PERFORMANCE_SCENE2D);

    // Get cesium camera
    const camera = this.cameraService.getCamera();

    // Click on an enity will casuse the camera to track it with an animation
    this.mapEventsManager.register({event: CesiumEvent.LEFT_CLICK})
      .subscribe(result => {
        if (result.cesiumEntities && result.cesiumEntities.length) {
          this.cameraService.trackEntity(result.cesiumEntities[0], {flyTo: true, altitude: 10000});
        }
      });
    // Cancel entity tracking
    this.cameraService.untrackEntity();

    // Zoom out
    this.cameraService.getCamera().zoomOut(50000);

    // Zoom in
    this.cameraService.getCamera().zoomIn(10000);

    // Scene changes
    this.cameraService.setSceneMode(SceneMode.SCENE3D); // 3D view
    this.cameraService.setSceneMode(SceneMode.SCENE2D); // 2D view
    this.cameraService.setSceneMode(SceneMode.COLUMBUS_VIEW); // Columbus view
    this.cameraService.setSceneMode(SceneMode.PERFORMANCE_SCENE2D); // Columbos view with 2d restrications, better perfornace the 2D.
  }
}
