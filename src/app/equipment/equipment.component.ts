import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipment: object[] = [
    {name: "Habitat dome", vital: true},
    {name: "Drones", vital: false},
    {name: "Food containers", vital: true},
    {name: "Oxygen tanks", vital: true}
  ];
  itemBeingEdited: object = null;
  constructor() { }

  ngOnInit() {
  }
  add(itemName: string, isVital: boolean) {
    this.equipment.push({name: itemName, vital: isVital});
  }

  remove(item: object) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }

  edit(item: object) {
    this.itemBeingEdited = item;
 }

 save(name: string, item: object) {
  item['name'] = name;
  this.itemBeingEdited = null;
}
}
