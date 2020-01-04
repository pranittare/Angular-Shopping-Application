import { NgModule } from '@angular/core';

import { RouterModule, Routes, PreloadAllModules } from '@angular/router';



const appRoutes: Routes = [
    {path: '', redirectTo:'/recipes', pathMatch: 'full' },
    // {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
    {path: 'recipes', loadChildren: () => 
        import ('./recipes/recipes.module').then(recipe => recipe.RecipesModule)},
    {path: 'shopping-list', loadChildren: () => 
        import('./shopping-list/shopping-list.module').then(shopping => shopping.ShoppingListModule )},
    {path: 'auth', loadChildren: () => 
        import('./auth/auth.module').then(auth => auth.AuthModule)}


];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy: PreloadAllModules}) ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}