import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1 } from "./comp-1/comp-1.component";
import {MainRootComponent} from "./main-root/main-root.component";

const routes: Routes = [
    {
        path: "home",
        component: Comp1

    },
    {
        path: "**",
        component: MainRootComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*

    {
        path: 'courses/:id',
        component: CourseComponent,
        resolve: {
            course: CourseResolver
        }
    },
*/