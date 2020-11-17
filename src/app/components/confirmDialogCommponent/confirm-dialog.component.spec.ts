import { ConfirmDialogComponent } from './confirm-dialog.component';

describe('ConfirmDialogComponent',()=>{
    let fixture:ConfirmDialogComponent;
    let dialogRefMock:any;
    let dataMock:any;

    beforeEach(()=>{
        dialogRefMock = {
            close:jest.fn()
        }
        dataMock = {
            title:"test dilog",
            message:"are you sure"
        }
        fixture = new ConfirmDialogComponent(dialogRefMock,dataMock);
    });
    describe("ConfirmDilog Test",()=>{
        it('should call constructor',()=>{
            expect(fixture.title).toBe("test dilog");
            expect(fixture.message).toBe("are you sure");
        });
        it('should call on confirm with true',()=>{
            spyOn(dialogRefMock,'close');
            fixture.onConfirm();
            expect(dialogRefMock.close).toHaveBeenCalledWith(true);
        });
        it('should call on onDismiss with false',()=>{
            spyOn(dialogRefMock,'close');
            fixture.onDismiss();
            expect(dialogRefMock.close).toHaveBeenCalledWith(false);
        });
    });
});