import { Coin } from './../../../model/coin';
import { Component, OnInit } from '@angular/core';
import { CoinserviceService } from '../coinservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createcoin',
  templateUrl: './createcoin.component.html',
  styleUrls: ['./createcoin.component.scss']
})
export class CreatecoinComponent implements OnInit {

  congTy: Coin = new Coin();
  constructor(private service: CoinserviceService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
  }
  onSubmit(){
    this.congTy.name = this.congTy.name.toUpperCase();
    this.service.create(this.congTy).subscribe((data) => {
      alert("Thêm thành công bản ghi");
      this.gotoList();
    }, error => {
      alert("Có lỗi xảy ra, mã lỗi: " + error.status);
    })
  }
  back(){
    this.gotoList();
  }
  gotoList(){
    this.router.navigate(['/coin']);
  }
}
