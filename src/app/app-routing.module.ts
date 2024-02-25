import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { UsersAdminComponent } from './components/users-admin/users-admin.component';
import { ProgramsAdminComponent } from './components/programs-admin/programs-admin.component';
import { PaymentsAdminComponent } from './components/payments-admin/payments-admin.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    loadChildren: () =>
                        import('./components/landing/landing.module').then(
                            (m) => m.LandingModule
                        ),
                },
                {
                    path: 'auth',
                    loadChildren: () =>
                        import('./components/auth/auth.module').then(
                            (m) => m.AuthModule
                        ),
                },
                {
                    path: 'pages',
                    component: AppLayoutComponent,
                    canActivate: [AuthGuard],
                    data: {
                        roles: ['ROLE_ADMIN', 'ROLE_USER'],
                    },
                    children: [
                        {
                            path: '',
                            canActivate: [AuthGuard],
                            data: {
                                roles: ['ROLE_ADMIN', 'ROLE_USER'],
                            },
                            loadChildren: () =>
                                import(
                                    './components/dashboard/dashboard.module'
                                ).then((m) => m.DashboardModule),
                        },
                        {
                            path: 'users',
                            component: UsersAdminComponent,
                            canActivate: [AuthGuard],
                            data: {
                                roles: ['ROLE_ADMIN', 'ROLE_USER'],
                            },
                        },
                        {
                            path: 'programs',
                            component: ProgramsAdminComponent,
                            canActivate: [AuthGuard],
                            data: {
                                roles: ['ROLE_ADMIN'],
                            },
                        },
                        {
                            path: 'payments',
                            component: PaymentsAdminComponent,
                            canActivate: [AuthGuard],
                            data: {
                                roles: ['ROLE_ADMIN'],
                            },
                        },
                        {
                            path: 'settings',
                            component: SettingsComponent,
                            canActivate: [AuthGuard],
                            data: {
                                roles: ['ROLE_ADMIN', 'ROLE_USER'],
                            },
                        },
                        {
                            path: 'users/user',
                            component: UserComponent,
                            canActivate: [AuthGuard],
                            data: {
                                roles: ['ROLE_ADMIN', 'ROLE_USER'],
                            },
                        },
                        /* From here might be removed  */
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
                        /* Until here might be removed  */
                    ],
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
