import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TimeWebComponent } from './pages/time-web/time-web.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ImageComponent } from './components/image/image.component';
import { PostComponent } from './components/post/post.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { DescriptionComponent } from './components/description/description.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TeamComponent } from './components/team/team.component';
import { ListComponent } from './pages/list/list.component';
import { TopListComponent } from './components/top-list/top-list.component';
import { ListDataComponent } from './components/list-data/list-data.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentNameComponent } from './component-name/component-name.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimeWebComponent,
    BreadcrumbComponent,
    ImageComponent,
    PostComponent,
    ButtonsComponent,
    DescriptionComponent,
    GalleryComponent,
    TeamComponent,
    ListComponent,
    TopListComponent,
    ListDataComponent,
    ComponentNameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
