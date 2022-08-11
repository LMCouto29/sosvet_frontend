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
import { MatButtonModule } from  '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AnimalReadMaterialComponent } from './animal/animal-read-material/animal-read-material.component';
import { AnimalUpdateComponent } from './animal/animal-update/animal-update.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AnimalCrudComponent } from './views/animal-crud/animal-crud.component';
import { QuestionComponent } from './question/question.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './views/home/home.component';
import { AnimalReadComponent } from './animal/animal-read/animal-read.component';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';

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


