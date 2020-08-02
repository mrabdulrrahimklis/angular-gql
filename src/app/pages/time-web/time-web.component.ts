import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-web',
  templateUrl: './time-web.component.html',
  styleUrls: ['./time-web.component.sass']
})
export class TimeWebComponent implements OnInit {
    header = 'Lorem Ipsum';
    image = 'https://i.picsum.photos/id/925/200/200.jpg?hmac=GRls_CYMB5cOj1RE3IwjOC0zUwiPc25idJNavVPWbtM';
    text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
      'Cras eleifend libero sed magna porttitor fermentum.' +
      'Nulla sodales nisl velit, sed dapibus lectus efficitur sed.' +
      'Pellentesque venenatis urna lacinia, blandit orci et, facilisis erat. Sed et porta nisl.' +
      'Nunc urna neque, iaculis in mollis sed, aliquam in quam. Aenean erat neque, vestibulum eget erat vel, pulvinar varius sem.' +
      'Etiam at nibh metus. Nunc et laoreet arcu. Proin eget sem vehicula, dignissim elit vitae, egestas mauris.';
    even = 'even';
    odd = 'odd';
    mail = 'info@invariant.hr';
    more = 'SAZNAJ VISE';
    top = {
      header: 'TimeWeb',
      text: 'applikacija koja olaksava zivot'
    };
    bottom = {
      header: 'IZRADA EXPRESS WEB STRANICA',
      text: 'fast and furious 2018'
    };
    about = {
      header: 'O NAMA',
      text: 'we are so great'
    };
    contact = {
      header: 'KONTAKTIRAJTE NAS',
      text: 'otvoreni smo za prijedloge'
    };

  constructor() { }

  ngOnInit(): void {
  }

}
