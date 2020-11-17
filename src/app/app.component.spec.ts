import { AppComponent } from './app.component';

describe("App component",()=>{
    let fixture:AppComponent;
    fixture = new AppComponent();
    it('should have title',()=>{
        expect(fixture.title).toBe("trips-project");
    });
});