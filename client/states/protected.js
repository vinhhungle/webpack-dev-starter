export default () => {
  return {
    url: '/protected',
    views: {
      'main': {
        template: `
          <div class="view-container">
            <h2>Login Required</h2>
          </div>
        `
      }
    }
  }
}