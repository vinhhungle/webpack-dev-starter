class AppCtrl {
  constructor ($uibModal) {
    this.message = 'Hello Bootstrap!'
    this.dateOptions = {
      dateDisabled: false,
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
    }
    this.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate']
    this.format = this.formats[0]
    this.myDate = new Date()
  }

  handleClick () {
    global.alert('Clicked')
  }
}

export default function (app) {
  app.component('app', {
    template: require('./app.tpl'),
    controller: AppCtrl,
    controllerAs: 'app'
  })

  app.component('myButton', {
    bindings: {
      label: '@',
      onClick: '&'
    },
    template: `
      <button ng:click="$ctrl.onClick()"class="btn btn-primary btn-lg">{{$ctrl.label}}</button>
    `
  })
}
