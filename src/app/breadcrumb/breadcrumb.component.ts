import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  @Input()
  public deliminator: string = '>';

  breadcrumbs!: Array<{ label: string; url: string }>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.breadcrumbs = [];
        let currentRoute = this.activatedRoute.root,
          url = '';
        do {
          const childrenRoutes = currentRoute.children;
          currentRoute = null;
          console.log(childrenRoutes);

          childrenRoutes.forEach((route) => {
            if (route.outlet === 'primary') {
              const routeSnapshot = route.snapshot;
              console.log(routeSnapshot.url);

              url +=
                '/' +
                routeSnapshot.url.map((segment) => segment.path).join('/');

              if (
                route.snapshot.data['breadCrum'] !== 'id/name' &&
                route.snapshot.data['breadCrum'] !== undefined
              )
                this.breadcrumbs.push({
                  label: route.snapshot.data['breadCrum'],
                  url: url,
                });

              console.log(route.snapshot.data);

             

              currentRoute = route;
            }
            if (
              route.snapshot.data['breadCrum'] == 'id/name' &&
              route.snapshot.data !== {}
            ) {
              this.breadcrumbs.push({
                label: route.snapshot.params['name'],
                url: url,
              });
            }
          });
        } while (currentRoute);
        console.log(this.breadcrumbs);
      });
  }
}
