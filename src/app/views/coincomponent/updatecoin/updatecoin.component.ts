import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coin } from '../../../model/coin';
import { CoinserviceService } from '../coinservice.service';

@Component({
  selector: 'app-updatecoin',
  templateUrl: './updatecoin.component.html',
  styleUrls: ['./updatecoin.component.scss']
})
export class UpdatecoinComponent implements OnInit {

  congTy: Coin = new Coin();
  id: number
  constructor(private service: CoinserviceService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe((data) => {
      this.congTy = data;
    })
  }
  onSubmit(){
    this.congTy.name = this.congTy.name.toUpperCase();
    this.service.update(this.id,this.congTy).subscribe((data) => {
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
