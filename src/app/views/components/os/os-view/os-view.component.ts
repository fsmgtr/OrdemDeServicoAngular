import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OS } from 'src/app/models/os';
import { OsService } from 'src/app/services/os.service';

@Component({
  selector: 'app-os-view',
  templateUrl: './os-view.component.html',
  styleUrls: ['./os-view.component.css']
})
export class OsViewComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private ordemService: OsService,
    private router: Router) { }

  os: OS = {
    tecnico: '',
    cliente: '',
    observacoes: '',
    prioridade: '',
    status: '',
  }


  ngOnInit(): void {
    this.os.id = this.route.snapshot.paramMap.get("id");
    this.findById();
  }

  findById(): void {
    this.ordemService.findById(this.os.id).subscribe(resposta => {
      this.os = resposta;
      this.findById();
    })
  }

  return():void{
    this.router.navigate(['os'])

  }

}
