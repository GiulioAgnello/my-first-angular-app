import { bootstrapApplication } from '@angular/platform-browser';
import '@angular/compiler';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
