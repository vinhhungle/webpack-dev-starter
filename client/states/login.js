export default () => {
  return {
    url: '/login',
    views: {
      'main': {
        template: `
          <div class="view-container">
            <label>
              Username <input type="text" />
            </label>
            <label>
              Password <input type="password" />
            </label>
            <button ui-sref="protected">Login</button>
          </div>
        `
      }
    }
  }
}