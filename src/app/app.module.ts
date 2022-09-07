import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './/.//views/template/header/header.component';
import { FooterComponent } from './/views/template/footer/footer.component';
import { NavComponent } from './/views/template/nav/nav.component';
import { AnimalCreateComponent } from './animal/animal-create/animal-create.component';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PreScreeningReadMaterialComponent } from './preScreening-read-material/preScreening-read-material.component';
import { ScreeningReadMaterialComponent } from './Screening-read-material/Screening-read-material.component';
import { AnimalReadMaterialComponent } from './animal/animal-read-material/animal-read-material.component';
import { AnimalUpdateComponent } from './animal/animal-update/animal-update.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AnimalCrudComponent } from './views/animal-crud/animal-crud.component';
import { QuestionComponent } from './question/question.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './views/home/home.component';
import { PreScreeningReadComponent } from './preScreening-read/preScreening-read.component';
import { ScreeningReadComponent } from './Screening-read/Screening-read.component';
import { ScreeningDetailsComponent } from './screening-details/screeningDetails.component';
import { AnimalReadComponent } from './animal/animal-read/animal-read.component';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { QuestiontwoComponent } from './questiontwo/questiontwo.component';
import { QuestiontwoselectorComponent } from './questiontwo -selector/questiontwoselector.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './views/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { QRCodeModule } from 'angularx-qrcode';

import { MatGridListModule } from '@angular/material/grid-list'
import { ScreeningwaitinglistComponent } from './Screening-waitinglist/Screening-waitinglist.component';
import { ScreeningwaitinglistMaterialComponent } from './Screening-waitinglist-material/Screening-read-material.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimalCreateComponent,
    AnimalReadMaterialComponent,
    AnimalUpdateComponent,
    AnimalCrudComponent,
    AnimalReadComponent,
    QuestionComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    QuestiontwoComponent,
    PreScreeningReadComponent,
    ScreeningDetailsComponent,
    QuestiontwoselectorComponent,
    ScreeningReadMaterialComponent,
    ScreeningReadComponent,
    LoginComponent,
    PreScreeningReadMaterialComponent,
    ScreeningwaitinglistComponent,
    ScreeningwaitinglistMaterialComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatSortModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    AppRoutingModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatDialogModule,
    MatIconModule,
    MatGridListModule,
    QRCodeModule
    

  ],
  exports: [
    RouterModule
  ],

  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-PT'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

