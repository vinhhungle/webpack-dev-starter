export default () => {
  return {
    url: '/about',
    views: {
      'main': {
        template: `
          <div style="border: solid 1px black; padding: 15px;">
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