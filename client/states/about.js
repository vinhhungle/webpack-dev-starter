export default () => {
  return {
    url: '/about',
    views: {
      'main': {
        template: `
          <div class="view-container">
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