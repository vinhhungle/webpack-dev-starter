<div>
  <md-content layout-padding>
    <h1><i class="check"></i> {{app.message}}</h1>

    <md-button ng:click="app.handleClick()" class="md-primary">Click Me</md-button>

    <md-button class="md-primary md-raised" ng-click="app.showAlert($event)"   >
      Alert Dialog
    </md-button>

    <md-card>
     <md-card-content>
       <h2>Card headline</h2>
       <p>Card content</p>
     </md-card-content>
     <md-card-footer>
       Card footer
     </md-card-footer>
    </md-card>

  </md-content>
</div>