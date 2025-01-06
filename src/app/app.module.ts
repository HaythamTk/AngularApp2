import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { CoreComponent } from './core/core.component';
import { ServiceItemComponent } from './service-item/service-item.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddProduct2Component } from './add-product2/add-product2.component';
import { CardItemComponent } from './card-item/card-item.component';
import { BasicHighlightDirective } from './custome-directives/basic-highlight.directive';
import { Lesson1Component } from './Documentation/lesson1/lesson1.component';
import { Lesson2Component } from './Documentation/lesson2/lesson2.component';
import { TestChildComponent } from './Documentation/test-child/test-child.component';
import { Test2ChildComponent } from './Documentation/test2-child/test2-child.component';
import { RouteComponent } from './Documentation/route/route.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Observ1Component } from './Documentation/observ1/observ1.component';
import { Observ2Component } from './Documentation/observ2/observ2.component';
import { TdfComponent } from './Documentation/Forms/tdf/tdf.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServerComponent,
    DirectivesComponent,
    CoreComponent,
    ServiceItemComponent,
    ProductComponent,
    ProductsComponent,
    AddProductComponent,
    AddProduct2Component,
    CardItemComponent,
    BasicHighlightDirective,
    Lesson1Component,
    Lesson2Component,
    TestChildComponent,
    Test2ChildComponent,
    RouteComponent,
    NotFoundComponent,
    Observ1Component,
    Observ2Component,
    TdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
