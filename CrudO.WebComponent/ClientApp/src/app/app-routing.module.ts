import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/main' },
  // {
  //   path: 'main',
  //   component: AppComponent
  // },

  // {
  //   path: "form",
  //   loadChildren: () => import('./form-generator/form-generator.module').then(m => m.FormGeneratorModule),
  //   component: FormComponent

  // },
  // {
  //   path:"test",
  //   component:TestComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
