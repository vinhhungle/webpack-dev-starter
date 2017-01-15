<div>
  <h1><i class="check"></i> {{app.message}}</h1>
  <my:button ng:click="app.handleClick()" label="Click Me"></my:button>

  <ul>
    <li><a ui-sref="home" ui-sref-active="active">Home</a></li>
    <li><a ui-sref="protected" ui-sref-active="active">Protected</a></li>
    <li><a ui-sref="hello" ui-sref-active="active">Hello</a></li>
    <li><a ui-sref="users({filter: null})" ui-sref-active="active">Users</a></li>
    <li><a ui-sref="users({filter: 1})" ui-sref-active="active">Users (filter: 1)</a></li>
    <li><a ui-sref="users({filter: 2})" ui-sref-active="active">Users (filter: 2)</a></li>
    <li><a ui-sref="users({filter: 3})" ui-sref-active="active">Users (filter: 3)</a></li>
    <li><a ui-sref="about" ui-sref-active="active">About</a>
      <ul>
        <li><a ui-sref="about.history" ui-sref-active="active">History</a></li>
      </ul>
    </li>
  </ul>

  <div ng-if="app.prevState.name !== ''" style="margin-bottom: 15px;">
    <button ng-click="app.goBack()">Go Back</button>
  </div>

  <ui-view name="main"></ui-view>
  <ui-view name="sidebar"></ui-view>
</div>