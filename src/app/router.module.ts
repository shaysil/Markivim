import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from '../app/coponents/create/create.component';
import { IndexComponent } from '../app/coponents/index/index.component'
import { DisplayDetailsComponent } from './coponents/display-details/display-details.component';

export const appRoutes: Routes = [
  { path: 'create',
    component: CreateComponent
  },
  { path: 'index',
    component: IndexComponent
  },
  { path: "recipe/:DBname", component: DisplayDetailsComponent },
];