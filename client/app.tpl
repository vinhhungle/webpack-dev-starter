<div>
  <h1><i class="check"></i> {{app.message}}</h1>
  <my:button ng:click="app.handleClick()" label="Click Me"></my:button>

  <ul>
    <li><a ui-sref="home" ui-sref-active="active">Home</a></li>
    <li><a ui-sref="hello" ui-sref-active="active">Hello</a></li>
    <li><a ui-sref="about" ui-sref-active="active">About</a></li>
  </ul>

  <ui-view name="main"></ui-view>
  <ui-view name="sidebar"></ui-view>
</div>