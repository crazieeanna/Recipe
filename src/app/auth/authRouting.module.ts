import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { NgModule } from "@angular/core";

const authRoutes: Routes = [
    {path: 'authentication', component: AuthComponent}
];

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule]
})

export class AuthRouting {}