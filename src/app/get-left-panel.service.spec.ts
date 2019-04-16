import { TestBed } from '@angular/core/testing';

import { GetLeftPanelService } from './get-left-panel.service';

describe('GetLeftPanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetLeftPanelService = TestBed.get(GetLeftPanelService);
    expect(service).toBeTruthy();
  });
});
