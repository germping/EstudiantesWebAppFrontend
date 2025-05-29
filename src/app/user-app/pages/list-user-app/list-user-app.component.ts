/*import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserApp } from '../../../user-app/interfaces/user-app';
import { ModalUserAppComponent } from '../../../user-app/modales/modal-user-app/modal-user-app.component';
import { UserAppService } from '../../../user-app/services/user-app.service';
import { SharedService } from '../../../shared/shared.service';*/

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserApp } from '../../../user-app/interfaces/user-app';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UserAppService } from '../../../user-app/services/user-app.service';
import { SharedService } from '../../../shared/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalUserAppComponent } from '../../../user-app/modales/modal-user-app/modal-user-app.component';


@Component({
  selector: 'app-list-user-app',
  templateUrl: './list-user-app.component.html',
  styleUrl: './list-user-app.component.css'
})
export class ListUserAppComponent implements OnInit, AfterViewInit {


  displayedColumns: string[] = ['id', 'username', 'email', 'idProfile', 'acciones'];
  dataInit: UserApp[] = [];
  dataSource = new MatTableDataSource(this.dataInit);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _userAppService: UserAppService, private _sharedService: SharedService
    , private dialog: MatDialog
  ) { }

  newUserApp() {
    this.dialog
      .open(ModalUserAppComponent, { disableClose: true, width: '400px', height: 'auto' })
      .afterClosed()
      .subscribe((result) => {
        if (result === true) {
          this.getUserApps();
        }
      });
  }

  updateUserApp(UserApp: UserApp ){
     this.dialog
      .open(ModalUserAppComponent, { disableClose: true, width: '400px', height: 'auto', data: UserApp })
      .afterClosed()
      .subscribe((result) => {
        if (result === true) {
          this.getUserApps();
        }
      });
  }

  getUserApps() {
    this._userAppService.list().subscribe({
      next: (data) => {
        if (data.isSuccesful) {
          this.dataSource = new MatTableDataSource(data.result);
          this.dataSource.paginator = this.paginator;
        } else {
          this._sharedService.showAlert(
            "No data found",
            "No users were found.",
          );
        }
      },
      error: (e) => {

      }
    });
  }

  ngOnInit(): void {
    this.getUserApps();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
