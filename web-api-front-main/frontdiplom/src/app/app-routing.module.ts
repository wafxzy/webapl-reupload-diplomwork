import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{ToulookComponent} from './toulook/toulook.component';
import {AfricatoursComponent} from './africatours/africatours.component';
import {EuropetoursComponent} from './europetours/europetours.component';
import {AsiatoursComponent} from './asiatours/asiatours.component';
import {NorthamericatoursComponent} from './northamericatours/northamericatours.component';
import {OceaniatoursComponent} from './oceaniatours/oceaniatours.component';
import {SouthamericatoursComponent} from './southamericatours/southamericatours.component';
import {AlltoursComponent} from './alltours/alltours.component';
import {ContacsComponent} from './contacs/contacs.component';
import {HelpinfoComponent} from './helpinfo/helpinfo.component';
import {RegisterComponent} from './register/register.component';
import{HomeComponent} from './home/home.component';
import{LoginComponent} from './login/login.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component'

const routes: Routes = [
{path:'asiatours', component:AsiatoursComponent  },
{path:'alltours', component:AlltoursComponent  },
{path:'europetours', component:EuropetoursComponent  },
{path:'oceaniatours', component:OceaniatoursComponent  },
{path:'africatours', component:AfricatoursComponent  },
{path:'northamericatours', component:NorthamericatoursComponent  },
{path:'southamericatours', component:SouthamericatoursComponent  },
{path:'contacs', component:ContacsComponent  },
{path:'helpinfo', component:HelpinfoComponent  },
{path:'register', component:RegisterComponent  },
{path:'tour/:id', component:ToulookComponent  },
{path: "home",  component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
