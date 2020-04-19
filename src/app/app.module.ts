import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { ResumeComponent } from "./pages/resume/resume.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppTranslateModule } from "./modules/translate/translate.module";
import { InlineSVGModule } from "ng-inline-svg";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppTranslateModule,
    InlineSVGModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
