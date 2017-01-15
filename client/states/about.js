export default () => {
  return {
    url: '/about',
    views: {
      'main': {
        template: '<about-comp></about-comp>'
      },
      'sidebar': {
        template: '<sidebar-comp></sidebar-comp>'
      }
    }
  }
}