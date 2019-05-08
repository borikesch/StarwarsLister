import { TestBed } from '@angular/core/testing';

import { StarwarsListService } from './starwars-list.service';

describe('StarwarsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarwarsListService = TestBed.get(StarwarsListService);
    expect(service).toBeTruthy();
  });
});
