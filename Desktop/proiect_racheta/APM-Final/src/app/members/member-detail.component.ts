import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IMember } from './member';
import { MemberService } from './member.service';

@Component({
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  pageTitle = 'Member Detail';
  errorMessage = '';
  product: IMember | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: MemberService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/members']);
  }
}
