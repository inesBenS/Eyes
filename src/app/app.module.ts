import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { PostItemComponent } from './post-item/post-item.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ListPostComponent } from './list-post/list-post.component';

// Routing 
import { RouterModule, Routes } from '@angular/router';


// Création des différentes routes de l'application
const appRoutes: Routes = [
  { path: 'Home', component: ViewComponent },
  { path: 'Home/:post', component: PostItemComponent },
  { path: 'NewPost', component: NewPostComponent},
  { path: '', component: ViewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    PostItemComponent,
    NewPostComponent,
    ListPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
