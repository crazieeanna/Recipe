import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { CommonModule } from "@angular/common";
import { AuthRouting } from "./authRouting.module";

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AuthComponent,
        CommonModule,
        AuthRouting
    ],
})
export class AuthModule {}