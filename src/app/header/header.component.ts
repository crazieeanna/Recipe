import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import {Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  subscription!: Subscription;
  
  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {}
  
  onSave() {
    this.dataStorageService.onSaveData();
  }

  onFetch() {
    this.dataStorageService.onFetchData();
  }

  onLogOut() {
    this.authService.onAuthLogOut();
  }

  ngOnInit() {
    this.subscription = this.authService.userData.subscribe(
      authentication => {
        this.isAuthenticated = !authentication ? false : true;
        console.log(!!authentication);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
