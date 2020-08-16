import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'ClientGestionStockProduits';
  showHideSideBar: boolean = true;

  onShowSideBarChange(showHideSideBar){
    this.showHideSideBar = showHideSideBar;
  }
}
