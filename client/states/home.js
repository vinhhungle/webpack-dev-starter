export default () => {
  return {
    url: '/',
    views: {
      'main': {
        template: '<h2>Home</h2>'
      },
      'sidebar': {
        template: '<sidebar-comp></sidebar-comp>'
      }
    }
  }
}