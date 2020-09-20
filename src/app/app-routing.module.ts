import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {OpinionComponent} from "./components/opinion/opinion.component";


const routes: Routes = [{
  path: '',
  component: MainPageComponent
}, {
  path: 'opinion',
  component: OpinionComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
