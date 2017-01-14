<div>
  <h1><i class="check"></i> {{app.message}}</h1>
  <my:button ng:click="app.handleClick()" label="Click Me"></my:button>

  <ul>
    <li><a ui-sref="hello" ui-sref-active="active">Hello</a></li>
    <li><a ui-sref="about" ui-sref-active="active">About</a></li>
  </ul>

  <ui-view></ui-view>
</div>