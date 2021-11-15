import { HttpClient } from '@angular/common/http';
import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppServiceService } from './app-service.service';
import { ViewEncapsulation } from '@angular/core';
import { APIService, Restaurant } from "./API.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'James Gabbitus Portfolio';
  svgColor = 'black';
  toggleControl = new FormControl(false);
  lineColor = 'black';
  toolbarShadow = '';
  routerShadow = '';
  buttonBorders = '1px solid #EEE8AA';
  buttonBack = '';
  routerBorder = '1px solid #EEE8AA';
  nameVisibility = '';
  homeText = '';

  public createForm: FormGroup;
  public restaurants: Array<Restaurant> = [];

  constructor(private api: APIService, private fb: FormBuilder, 
    private http: HttpClient, private service: AppServiceService) {

    this.createForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      city: [""]
    });
  }

  public onCreate(restaurant: Restaurant) {
    this.api
      .CreateRestaurant(restaurant)
      .then((event) => {
        console.log("item created!");
        this.createForm.reset();
      })
      .catch((e) => {
        console.log("error creating restaurant...", e);
      });
  }

  /////////////////////

  hideHomeText() {
    this.homeText = 'none';
  }

  postDataToApi(a: any) {
    this.service.postData(a);
  }

  @HostBinding('class') className = '';
  private subscription: Subscription | null = null;

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';

      if (this.className = darkMode) {
        this.className = darkClassName;
        this.svgColor = 'white';
        this.lineColor = 'white';
        this.toolbarShadow = '0 4px 8px 0 red';
        this.buttonBorders = '1px solid red';
        this.buttonBack = '#282828';
        this.routerBorder = '1px solid 	red';
        this.routerShadow = '0 4px 19px 0 red';
      } else {
        this.className = '';
        this.svgColor = 'black'
        this.lineColor = 'black';
        this.toolbarShadow = '';
        this.buttonBorders = '1px solid #EEE8AA';
        this.buttonBack = '#FFFFF0';
        this.routerBorder = '';
        this.routerShadow = '';
      }
    });

      /* fetch restaurants when app loads */
      this.api.ListRestaurants().then((event) => {
          this.restaurants = event.items as Restaurant[];
      });

      /* subscribe to new restaurants being created */
      this.subscription = <Subscription>(
         this.api.OnCreateRestaurantListener.subscribe((event: any) => {
             const newRestaurant = event.value.data.onCreateRestaurant;
             this.restaurants = [newRestaurant, ...this.restaurants];
         })
      );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }
 
}

