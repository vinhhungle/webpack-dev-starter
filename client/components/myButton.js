export default (app) => {
  app.component('myButton', {
    bindings: {
      label: '@',
      onClick: '&'
    },
    template: `
      <button ng:click="$ctrl.onClick()">{{$ctrl.label}}</button>
    `
  })
}
