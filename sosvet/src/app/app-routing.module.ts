import { AnimalUpdateComponent } from './animal/animal-update/animal-update.component';
import { AnimalCreateComponent } from './animal/animal-create/animal-create.component';
import { QuestionComponent } from'./question/question.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AnimalCrudComponent } from './views/animal-crud/animal-crud.component';

const routes: Routes = [
  {
    path: "", 
    component: HomeComponent
  },
  {
    path: "animal",
    component: AnimalCrudComponent
  },
  {
    path: "animal/create",
    component: AnimalCreateComponent
  },
  {
    path: "animal/update/:objectId",
    component: AnimalUpdateComponent
  },
  {
    path: "animal/screening/:objectId",
    component: AnimalUpdateComponent
  },
  {
    path: "question",
    component: QuestionComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
