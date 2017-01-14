<div>
  <md-content layout-padding>
    <h1><i class="check"></i> {{app.message}}</h1>

    <md-button ng:click="app.handleClick()" class="md-primary">Click Me</md-button>

    <md-button class="md-primary md-raised" ng-click="app.showAlert($event)">
      Alert Dialog
    </md-button>

    <md-card>
     <md-card-content>
       <h2>Card headline</h2>
       <p>Card content</p>
       <div layout-gt-xs="row">
        <div flex-gt-xs>
          <h4>Standard date-picker</h4>
          <md-datepicker ng-model="app.state.myDate" md-placeholder="Enter date"></md-datepicker>
        </div>
      </div>
     </md-card-content>
     <md-card-footer>
       Card footer
     </md-card-footer>
    </md-card>

  </md-content>
</div>