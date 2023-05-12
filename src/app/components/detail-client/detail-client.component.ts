import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client.interface';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {
  client: Client[] =[];
  idM: any;
  constructor(private route: ActivatedRoute, private serviceClient: ClientService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {

      this.idM = params.get('id')
      this.serviceClient.getDetailClient(this.idM).subscribe(res =>{
        this.client.push(res);

      })
    })
  }

}
