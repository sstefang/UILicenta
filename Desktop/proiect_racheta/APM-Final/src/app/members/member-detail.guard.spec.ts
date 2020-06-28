import { TestBed, async, inject } from '@angular/core/testing';

import { MemberDetailGuard } from './member-detail.guard';

describe('ProductDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberDetailGuard]
    });
  });

  it('should ...', inject([MemberDetailGuard], (guard: MemberDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
