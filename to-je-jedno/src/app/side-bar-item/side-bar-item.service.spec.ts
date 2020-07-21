import { TestBed } from '@angular/core/testing';

import { SideBarItemService } from './side-bar-item.service';

describe('SideBarItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SideBarItemService = TestBed.get(SideBarItemService);
    expect(service).toBeTruthy();
  });
});
