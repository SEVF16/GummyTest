import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-formsearch',
  templateUrl: './formsearch.component.html',
  styleUrls: ['./formsearch.component.css']
})
export class FormsearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onSearch(value: string) {
    //console.log(value);

    let navigationExtr: NavigationExtras = {
      queryParams:{q : value}
    }
    if(value && value.length > 0){
      this.router.navigate(['/cliente'], navigationExtr)

    }else{
      this.router.navigate(['/cliente'])
    }
  }

}
