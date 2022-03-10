import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
  }

  alert = (message: string, type: string) => {
    this.ngZone.run(() => {
      let element = document.getElementById('liveAlertPlaceholder') as HTMLElement;

      var wrapper = document.createElement('div');
      wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
      if (element) {
        (element as any).append(wrapper);
      }
      console.log(element);
    });

  }

}
