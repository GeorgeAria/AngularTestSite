//This "guard" file is used to limit access to a specific route.
//It protects our ProductDetail route if the id is less than 0 or is not a number.

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


//"@Injectable" makes this a service, just like the "product.service.ts" file.

@Injectable({
  providedIn: 'root'
})

//"implements CanActivate" allows us to use the "canActivate" method.
//This can be changed to use a different method, like the ones listed in the comments below.

export class ProductDetailGuard implements CanActivate {

  //"Router" is imported in case the user needs to be redirected back to the home page.

  constructor(private router: Router) { }

  //"canActivate" is used to guard navigation to a route.
  //"canDeactivate" is used to guard navigation away from a route.
  //"Resolve" pre-fetches data before resolving a route.
  //"canLoad" prevents asynchronous routing.

  //Anything from "canActivate" to the opening curly brace is automatically generated by Angular.
  //"ActivateRouteSnapshot" provides current route information.
  //"RouterStateSnapshot" provides router state information.
  //"canActivate" can return an observable, a promise or a boolean value.

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    //The URL (when this guard is called upon) is composed of two elements: "products" and the requested id.
    //Only the id is needed, so it is pulled from the url with "next.url[1].path", since 1 corresponds to the id.
    //NOTE: Remember that the "+" sign means that it will convert a string to a numeric value.

    const id = +next.url[1].path;
    // const id2 = next.paramMap.get('id');
    // console.log(id2);


    //If the id is not a number or is less than one, the user is given an "alert" that says that the product ID is invalid.
    //They are then sent to the Product List page and a "false" boolean is sent back to abort the current operation.
    //NOTE: Normally, the user is not given an alert page and instead is sent to an error page notifying them of the problem.

    if (isNaN(id) || id < 1) {
      alert('Invalid product Id');
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
