import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { TestingService } from './testing.service';

describe('TestingService', () => {
  let service: any;
  let httpMock:any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        TestingService
      ]
    });
  });
  beforeEach(
    inject([TestingService, HttpTestingController], (_service, _httpMock) => {
      service = _service;
      httpMock = _httpMock;
  }));
  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(TestingService);
  // });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
  it('getCategories: should return a catefory array', () => {
    const mockObject = [
      "animal",
      "career",
      "celebrity",
      "dev",
      "explicit",
      "fashion",
      "food",
      "history",
      "money",
      "movie",
      "music",
      "political",
      "religion",
      "science",
      "sport",
      "travel"
    ];
    service.getCategories().subscribe(categories => {
      expect(categories.length).toBe(16);
      expect(categories[0]).toBe("animal");
    });
  
    const req = httpMock.expectOne('https://api.chucknorris.io/jokes/categories');
  
    req.flush(mockObject);
    httpMock.verify();
  });
});
