import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from '../../../shared/shared.service';
import { Relations } from '../../interfaces/relations';
import { RelationsAppService } from '../../services/relations-app.service';
import { ModalRelationsStudentsAppComponent } from '../../modales/modal-relations-students-app/modal-relations-students-app.component';
import { ModalRelationsTeachersAppComponent } from '../../modales/modal-relations-teachers-app/modal-relations-teachers-app.component';

@Component({
  selector: 'app-relations-app',
  templateUrl: './relations-app.component.html',
  styleUrl: './relations-app.component.css'
})
export class RelationsAppComponent implements OnInit, AfterViewInit {



  displayedColumnsStudents: string[] = ['id', 'username', 'classSubject', 'description', 'actions'];
  //displayedColumnsTeachers: string[] = ['id', 'username', 'subject'];
  dataInit1: Relations[] = [];
  //dataInit2: Relations[] = [];
  dataSourceStudents = new MatTableDataSource(this.dataInit1);
  //dataSourceTeachers = new MatTableDataSource(this.dataInit2);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _relationsService: RelationsAppService, private _sharedService: SharedService
    , private dialog: MatDialog
  ) { }

  newRelationsStudent() {
    this.dialog
      .open(ModalRelationsStudentsAppComponent, { disableClose: true, width: '400px', height: 'auto' })
      .afterClosed()
      .subscribe((result) => {
        if (result === true) {
          this.getRelationsStudents();
        }
      });
  }

  newRelationsTeacher() {
    this.dialog
      .open(ModalRelationsTeachersAppComponent, { disableClose: true, width: '400px', height: 'auto' })
      .afterClosed()
      .subscribe((result) => {
        if (result === true) {
          this.getRelationsStudents();
        }
      });
  }

  updateRelationsStudent(Relations: Relations ){
     this.dialog
      .open(ModalRelationsStudentsAppComponent, { disableClose: true, width: '400px', height: 'auto', data: Relations })
      .afterClosed()
      .subscribe((result) => {
        if (result === true) {
          this.getRelationsStudents();
        }
      });
  }

  getRelationsStudents() {
    this._relationsService.listStudents().subscribe({
      next: (data) => {
        if (data.isSuccesful) {
          this.dataSourceStudents = new MatTableDataSource(data.result);
          this.dataSourceStudents.paginator = this.paginator;
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
    this.getRelationsStudents();
  }

  ngAfterViewInit(): void {
    this.dataSourceStudents.paginator = this.paginator;
  }
  
  deleteRelationsStudent(Relations: Relations) {
    this._sharedService
      .showAlert(
        "Delete Relation",
        `Are you sure you want to delete the relation with ID ${Relations.id}?`
      )
      this._relationsService.listStudents().subscribe({
        next:(result) => {
        if (result.isSuccesful) {
          this._relationsService.delete(Relations.id).subscribe({
            next: (data) => {
              if (data.isSuccesful) {
                this._sharedService.showAlert("Success", "Relation deleted successfully.");
                this.getRelationsStudents();
              } else {
                this._sharedService.showAlert("Error", data.message);
              }
            },
            error: (e) => {
              this._sharedService.showAlert("Error", "An error occurred while deleting the relation.");
            }
          });
        }
      }
      });
  }

  // Add methods to handle class subject listing, creation, updating, and deletion
  // For example:
  // listRelationss() { ... }
  // createRelations() { ... }
  // updateRelations() { ... }
  // deleteRelations(id: number) { ... }


}