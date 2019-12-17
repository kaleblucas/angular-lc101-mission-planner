import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
<<<<<<< HEAD:mission-planning-dashboard/src/app/header/header.component.ts
  missionName: string = "Mars 2030";
  rocketName: string = "Plasma Max";
=======

  missionName: string = "Mars 2030";
  rocketName: string = "Plasma Max";
  editingMission: boolean = false;
  
>>>>>>> 4c035bb29399ab83ad8449fd192b08e7e3b43303:src/app/header/header.component.ts
  constructor() { }

  ngOnInit() {
  }

  updateMission(updatedName: string) {
    this.missionName = updatedName;
    this.editingMission = false;
  }

}
