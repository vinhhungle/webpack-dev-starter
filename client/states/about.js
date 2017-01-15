export default () => {
  return {
    url: '/about',
    views: {
      'main': {
        template: `
          <div>
            <about-comp></about-comp>
            <ui-view></ui-view>
          </div>
        `
      },
      'sidebar': {
        template: '<sidebar-comp></sidebar-comp>'
      }
    }
  }
}