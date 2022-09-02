import { LoginComponent } from './views/login/login.component';
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
import { ScreeningReadComponent } from './Screening-read/Screening-read.component';
import { PreScreeningDetailsComponent } from './preScreening-details/preScreeningDetails.component';

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
    path: "animal/update/:IdAnimal",
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
    path: "questiontwo-selector/:IdAnimal",
    component: QuestiontwoselectorComponent
  },
  {
    path: "preScreeningDetails/:IdAnimal",
    component: PreScreeningDetailsComponent
  },
  {
    path: "preScreening",
    component: PreScreeningReadComponent
  },
  {
    path: "Screening",
    component: ScreeningReadComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
