import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'sports', loadChildren: './sports/sports.module#SportsPageModule' },
  { path: 'entertainment', loadChildren: './entertainment/entertainment.module#EntertainmentPageModule' },
  { path: 'health', loadChildren: './health/health.module#HealthPageModule' },
  { path: 'science', loadChildren: './science/science.module#SciencePageModule' },
  { path: 'technology', loadChildren: './technology/technology.module#TechnologyPageModule' },
  { path: 'business', loadChildren: './business/business.module#BusinessPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'fullinfo', loadChildren: './fullinfo/fullinfo.module#FullinfoPageModule' },
  { path: 'permision', loadChildren: './permision/permision.module#PermisionPageModule' },
  { path: 'statictisone', loadChildren: './statictisone/statictisone.module#StatictisonePageModule' },
  { path: 'stat', loadChildren: './stat/stat.module#StatPageModule' },
  { path: 'value', loadChildren: './value/value.module#ValuePageModule' },
  { path: 'feedback', loadChildren: './feedback/feedback.module#FeedbackPageModule' },
  { path: 'stat2', loadChildren: './stat2/stat2.module#Stat2PageModule' },
  { path: 'values', loadChildren: './values/values.module#ValuesPageModule' },
  { path: 'last', loadChildren: './last/last.module#LastPageModule' },
  { path: 'reg', loadChildren: './reg/reg.module#RegPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
