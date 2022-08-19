import { AnimalUpdateComponent } from './animal/animal-update/animal-update.component';
import { AnimalCreateComponent } from './animal/animal-create/animal-create.component';
import { QuestionComponent } from'./question/question.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AnimalCrudComponent } from './views/animal-crud/animal-crud.component';
import { QuestiontwoComponent } from './questiontwo/questiontwo.component';
import { PreScreeningReadComponent } from './preScreening-read/preScreening-read.component';
import { QuestiontwoselectorComponent } from './questiontwo -selector/questiontwoselector.component';

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
  {
    path: "question/:IdAnimal",
    component: QuestionComponent
  },
  {
    path: "questiontwo/:group",
    component: QuestiontwoComponent
  },
  {
    path: "questiontwo-selector",
    component: QuestiontwoselectorComponent
  },
  {
    path: "preScreening",
    component: PreScreeningReadComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
