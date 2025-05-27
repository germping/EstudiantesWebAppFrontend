import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Teacher } from '../../interfaces/teacher';
import { TeacherService } from '../../services/teacher.service';
import { SharedService } from '../../../shared/shared.service';
import { ModalTeacherComponent } from '../../modales/modal-teacher/modal-teacher.component';


@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrl: './list-teacher.component.css'
})
export class ListTeacherComponent implements OnInit, AfterViewInit {


  displayedColumns: string[] = ['id', 'username', 'email', 'idProfile', 'acciones'];
  dataInit: Teacher[] = [];
  dataSource = new MatTableDataSource(this.dataInit);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _teacherService: TeacherService, private _sharedService: SharedService
    , private dialog: MatDialog
  ) { }

  newTeacher() {
    this.dialog
      .open(ModalTeacherComponent, { disableClose: true, width: '400px', height: 'auto' })
      .afterClosed()
      .subscribe((result) => {
        if (result === true) {
          this.getTeachers();
        }
      });
  }

  updateTeacher(Teacher: Teacher ){
     this.dialog
      .open(ModalTeacherComponent, { disableClose: true, width: '400px', height: 'auto', data: Teacher })
      .afterClosed()
      .subscribe((result) => {
        if (result === true) {
          this.getTeachers();
        }
      });
  }

  getTeachers() {
    this._teacherService.list().subscribe({
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
    this.getTeachers();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
