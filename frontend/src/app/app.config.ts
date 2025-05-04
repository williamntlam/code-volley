import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { SharedModule } from './features/shared/shared.module';
import { AuthModule } from './features/auth/auth.module';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { DesignPatternsChallengeModule } from './features/design-patterns-challenge/design-patterns-challenge.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    SharedModule,
    AuthModule,
    DashboardModule,
    DesignPatternsChallengeModule
  ]
};
