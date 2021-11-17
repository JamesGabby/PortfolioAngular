import { HttpClient } from '@angular/common/http';
import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppServiceService } from './app-service.service';
import { ViewEncapsulation } from '@angular/core';
import { APIService, Comment } from "./API.service";
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
  homeText = '';

  public createForm: FormGroup;
  public comments: Array<Comment> = [];

  constructor(private api: APIService, private fb: FormBuilder, 
    private http: HttpClient, private service: AppServiceService) {

    this.createForm = this.fb.group({
      name: ["", Validators.required],
      comment: ["", Validators.required]
    });
  }

  public onCreate(comment: Comment) {
    this.api
      .CreateComment(comment)
      .then((event) => {
        console.log("item created!");
        this.createForm.reset();
      })
      .catch((e) => {
        console.log("error creating comment...", e);
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

      /* fetch Comments when app loads */
      this.api.ListComments().then((event) => {
          this.comments = event.items as Comment[];
      });

      /* subscribe to new Comments being created */
      this.subscription = <Subscription>(
         this.api.OnCreateCommentListener.subscribe((event: any) => {
             const newComment = event.value.data.onCreateComment;
             this.comments = [newComment, ...this.comments];
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

