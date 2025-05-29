import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ClassSubject } from '../../interfaces/class-subject';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ClassSubjectService } from '../../services/class-subject.service';
import { SharedService } from '../../../shared/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalClassSubjectComponent } from '../../modales/modal-class-subject/modal-class-subject.component';

@Component({
  selector: 'app-list-class-subject',
  templateUrl: './list-class-subject.component.html',
  styleUrl: './list-class-subject.component.css'
})
export class ListClassSubjectComponent implements OnInit, AfterViewInit {



  displayedColumns: string[] = ['id', 'title', 'credits', 'acciones'];
  dataInit: ClassSubject[] = [];
  dataSource = new MatTableDataSource(this.dataInit);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _clasSubjectService: ClassSubjectService, private _sharedService: SharedService
    , private dialog: MatDialog
  ) { }

  newClassSubject() {
    this.dialog
      .open(ModalClassSubjectComponent, { disableClose: true, width: '400px', height: 'auto' })
      .afterClosed()
      .subscribe((result) => {
        if (result === true) {
          this.getClassSubjects();
        }
      });
  }

  updateClassSubject(classSubject: ClassSubject ){
     this.dialog
      .open(ModalClassSubjectComponent, { disableClose: true, width: '400px', height: 'auto', data: classSubject })
      .afterClosed()
      .subscribe((result) => {
        if (result === true) {
          this.getClassSubjects();
        }
      });
  }

  getClassSubjects() {
    this._clasSubjectService.list().subscribe({
      next: (data) => {
        if (data.isSuccesful) {
          this.dataSource = new MatTableDataSource(data.result);
          this.dataSource.paginator = this.paginator;
        } else {
          this._sharedService.showAlert(
            "No data found",
            "No class subjects were found.",
          );
        }
      },
      error: (e) => {

      }
    });
  }

  ngOnInit(): void {
    this.getClassSubjects();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  // Add methods to handle class subject listing, creation, updating, and deletion
  // For example:
  // listClassSubjects() { ... }
  // createClassSubject() { ... }
  // updateClassSubject() { ... }
  // deleteClassSubject(id: number) { ... }


}
