import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { Routing } from './app.routing'

/* Imported Components */
import { AppComponent } from './app.component'
import { AboutComponent } from './about/about.component'
import { AdministrationComponent } from './administration/administration.component'
import { BasketComponent } from './basket/basket.component'
import { LoginComponent } from './login/login.component'
import { ScoreBoardComponent } from './score-board/score-board.component'
import { NavbarComponent } from './navbar/navbar.component'
import { SearchResultComponent } from './search-result/search-result.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { RegisterComponent } from './register/register.component'
import { ContactComponent } from './contact/contact.component'
import { ChangePasswordComponent } from './change-password/change-password.component'
import { ProductDetailsComponent } from './product-details/product-details.component'
import { ComplaintComponent } from './complaint/complaint.component'

/* Imported Services */
import { ProductService } from 'src/app/Services/product.service'
import { ConfigurationService } from 'src/app/Services/configuration.service'
import { AdministrationService } from './Services/administration.service'
import { SecurityQuestionService } from './Services/security-question.service'
import { UserService } from './Services/user.service'
import { SecurityAnswerService } from './Services/security-answer.service'
import { FeedbackService } from './Services/feedback.service'
import { CaptchaService } from './Services/captcha.service'
import { WindowRefService } from './Services/window-ref.service'
import { ProductReviewService } from './Services/product-review.service'
import { FileUploadService } from './Services/file-upload.service'
import { ComplaintService } from './Services/complaint.service'

/* Modules required for Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDividerModule } from '@angular/material/divider'
import { TrackOrderComponent } from './track-order/track-order.component'
import { TrackResultComponent } from './track-result/track-result.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdministrationComponent,
    BasketComponent,
    LoginComponent,
    ScoreBoardComponent,
    NavbarComponent,
    SearchResultComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    ContactComponent,
    ChangePasswordComponent,
    ProductDetailsComponent,
    ComplaintComponent,
    TrackOrderComponent,
    TrackResultComponent
  ],
  entryComponents: [ ProductDetailsComponent ],
  imports: [
    BrowserModule,
    Routing,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDividerModule
  ],
  providers: [
    ProductService,
    ConfigurationService,
    AdministrationService,
    SecurityQuestionService,
    UserService,
    SecurityAnswerService,
    CaptchaService,
    FeedbackService,
    WindowRefService,
    ProductReviewService,
    FileUploadService,
    ComplaintService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }