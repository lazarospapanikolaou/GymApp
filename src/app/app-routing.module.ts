import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { UsersAdminComponent } from './components/users-admin/users-admin.component';
import { ProgramsAdminComponent } from './components/programs-admin/programs-admin.component';
import { PaymentsAdminComponent } from './components/payments-admin/payments-admin.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: AppLayoutComponent,
                    children: [
                        {
                            path: '',
                            loadChildren: () =>
                                import(
                                    './components/dashboard/dashboard.module'
                                ).then((m) => m.DashboardModule),
                        },
                        { path: 'users', component: UsersAdminComponent },
                        { path: 'programs', component: ProgramsAdminComponent },
                        { path: 'payments', component: PaymentsAdminComponent },
                        { path: 'settings', component: SettingsComponent },
                        { path: 'users/user', component: UserComponent },
                        { path: 'users/admin', component: AdminComponent },

                        {
                            path: 'uikit',
                            loadChildren: () =>
                                import('./components/uikit/uikit.module').then(
                                    (m) => m.UIkitModule
                                ),
                        },
                        {
                            path: 'utilities',
                            loadChildren: () =>
                                import(
                                    './components/utilities/utilities.module'
                                ).then((m) => m.UtilitiesModule),
                        },
                        {
                            path: 'documentation',
                            loadChildren: () =>
                                import(
                                    './components/documentation/documentation.module'
                                ).then((m) => m.DocumentationModule),
                        },
                        {
                            path: 'blocks',
                            loadChildren: () =>
                                import(
                                    './components/primeblocks/primeblocks.module'
                                ).then((m) => m.PrimeBlocksModule),
                        },
                        {
                            path: 'pages',
                            loadChildren: () =>
                                import('./components/pages/pages.module').then(
                                    (m) => m.PagesModule
                                ),
                        },
                    ],
                },
                {
                    path: 'auth',
                    loadChildren: () =>
                        import('./components/auth/auth.module').then(
                            (m) => m.AuthModule
                        ),
                },
                {
                    path: 'landing',
                    loadChildren: () =>
                        import('./components/landing/landing.module').then(
                            (m) => m.LandingModule
                        ),
                },
                { path: 'notfound', component: NotfoundComponent },
                { path: '**', redirectTo: '/notfound' },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
