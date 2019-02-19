import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieSpecGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const id = +next.url[1].path;
    if (isNaN(id) || id < 1 || id > 24) {
      alert('Invalid movie Id: movie does\'nt exist');
      this.router.navigate(['/movies']);
      return false;
    }
    return true;
  }
}
