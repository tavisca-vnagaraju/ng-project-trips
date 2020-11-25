import { fakeAsync } from '@angular/core/testing';
import { TestingService } from './testing.service';
import { of } from 'rxjs';

describe('TestingService', () => {
    let service:TestingService;
	  const http = jest.fn();

    beforeEach(()=>{
      service = new TestingService(http as any);
    });
    
    describe('Test service',()=>{
      it('should call get categories', fakeAsync(()=>{
        const response = [
            "animal"
        ];
        const httpMock = {
          get: jest.fn().mockReturnValue(of(response))
        };
        const serviceMock = new TestingService(httpMock as any);
        serviceMock.getCategories().subscribe(
          (data)=>{
            expect(httpMock.get).toBeDefined();
            expect(httpMock.get).toHaveBeenCalled();
            expect(data.length).toEqual(1);
          }
        )
      }))
    })
});
