import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD

import { AppComponent } from './app.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent ],
=======
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

@NgModule({
    imports: [ 
        BrowserModule,
        FormsModule
        ],
    declarations: [ 
        AppComponent,
        CardComponent 
        ],
>>>>>>> 4f208ec33dec0f199bee661f2888ae0ffc7eabf3
    bootstrap: [ AppComponent ]
})

export class AppModule { }