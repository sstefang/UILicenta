import { Component, OnInit } from '@angular/core';

import { IMember } from './member';
import { MemberService } from './member.service';

@Component({
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  pageTitle = 'Team Members';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredMembers = this.listFilter ? this.performFilter(this.listFilter) : this.members;
  }

  filteredMembers: IMember[] = [];
  members: IMember[] = [];

  constructor(private memberService: MemberService) {

  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Team Members: ' + message;
  }

  performFilter(filterBy: string): IMember[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.members.filter((product: IMember) =>
      product.memberName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.memberService.getMembers().subscribe({
      next: products => {
        this.members = products;
        this.filteredMembers = this.members;
      },
      error: err => this.errorMessage = err
    });
  }
}
