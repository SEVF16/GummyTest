import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { Client } from 'src/app/models/client.interface';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  client: Client[];
  info: any[] = [];
  currentPage: number ;
  limit: number;
  pageNumber: number;
  q: string;


  constructor(private serviceClient: ClientService, private router: Router, private actRouter: ActivatedRoute) {
    this.client = []
    this.currentPage = 1;
    this.limit = 2;
    this.pageNumber = 0;
    this.q = '';
    this.urlChanged();
  }

  ngOnInit(): void {
    this.getData
  }

  private getData(){

    this.serviceClient.getClient(this.q, this.currentPage, this.limit).pipe(map((data: any[]) => data.map(item => ({
      id: item.id,
      nombre: item.nombre,
      rut: item.rut,
      dv: item.dv
    })))).subscribe(res => {
      this.info = res
      this.pageNumber = res.length/this.limit;
    })
  }


  changePage(siguiente: boolean) {
    if (siguiente) {
      this.currentPage++;
      this.getData()
    }else{
      this.currentPage--;
      this.getData()
    }

  }

  seeDetail(id:number){
    console.log(id);
    this.router.navigate([id])
  }

  onDelete(id:number){

    this.serviceClient.deleteCliente(id).subscribe(() =>{
      this.getData()
    })
  }

  private urlChanged(): void{
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)).subscribe(
        () => {
          this.info=[];
          this.currentPage;
          this.getByQuery();

        }
      )
  }

  private getByQuery(): void{
    this.actRouter.queryParams.pipe().subscribe((params : Params) =>{
      this.q = params['q'];
      this.currentPage = this.currentPage;
      this.getData();
    });

  }

}
