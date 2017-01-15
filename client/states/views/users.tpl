<div class="view-container">
  <h2>Users</h2>
  <div ng-if="$ctrl.users.isFetching">Fetching...</div>
  <ul ng-if="!$ctrl.users.isFetching">
    <li ng-repeat="item in $ctrl.users.collection track by item.id">
      <a ui-sref="users.detail({id: item.id})">{{$index+1}} - {{item.name}}</a>
    </li>
  </ul>
  <ui-view></ui-view>
</div>