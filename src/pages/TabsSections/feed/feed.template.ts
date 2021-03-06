export const feedTemplate = `

<ion-content>

  <ion-refresher (ionRefresh)="doRefresh($event)">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <ion-spinner *ngIf="is_loading && logged_in == true"></ion-spinner>

  <ion-item *ngIf="!is_loading && logged_in == true" no-lines class="share-post" (click)="openPage('PostPage')">
    <ion-avatar item-start>
      <img [src]="profile_pc" />
    </ion-avatar>
    <ion-searchbar mode="ios" placeholder="What's on your mind today?" disabled="true">
    </ion-searchbar>
  </ion-item>

  <div *ngIf="logged_in == false">
    You need to log in to see this page
  </div>

  <post-render *ngIf="!is_loading && logged_in == true" [posts]="contents"></post-render>

  <div *ngIf="is_more_post == false">
    <p text-center>There are not more posts to load</p>
  </div>

  <ion-infinite-scroll *ngIf="contents.length > 1 && is_more_post == true" (ionInfinite)="doInfinite($event)" distance="1%">
    <ion-infinite-scroll-content></ion-infinite-scroll-content>
  </ion-infinite-scroll>

</ion-content>

`;