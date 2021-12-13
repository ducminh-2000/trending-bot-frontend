import { Coin } from './../../model/coin';
import { Component, OnInit } from '@angular/core';
import { CoinserviceService } from './coinservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coincomponent',
  templateUrl: './coincomponent.component.html',
  styleUrls: ['./coincomponent.component.scss']
})
export class CoincomponentComponent implements OnInit {

  listCoin: Coin[];
  indexPagination: number =1;
  listNotPaging: any;
  totalPagination: number;

  constructor(private service: CoinserviceService, private router: Router) { }

  ngOnInit(): void {
    this.getCoin();
  }

  private getCoin(){
    this.service.getAll().subscribe((data) => {
      this.listCoin = data;
    })
  }

  update(id: Number){
    this.router.navigate(['/coin/update',id]);
  }

  create(){
    this.router.navigate(['/coin/create']);
  }

  handleDelete(id: number){
    if(confirm("Bạn chắc chắn muốn xóa ?")){
      this.service.delete(id).subscribe((data) => {
        console.log(data);
        alert("Thành công");
        this.ngOnInit();
      }, error => {
        console.log(error);
        alert("Có lỗi xảy ra, mã lỗi " + error.status);
      })
    }
  }

  // search(key: String){
  //   this.service.search(key).subscribe((data) => {
  //     this.listCongTy = [];
  //     this.listCongTy = data;
  //     console.log(data);
  //   },error => {
  //     alert("Có lỗi xảy ra, mã lỗi: " + error.status);
  //   })
  // }

  gotoList(){
    this.router.navigate(['/coin']);
  }
}
