<div class="slds">
  <div class="slds-p-around--large">
    <h1 class="slds-text-heading--large slds-m-bottom--large"><i class="check"></i> {{app.message}}</h1>
    <my:button ng:click="app.handleClick()" label="Click Me"></my:button>
    <button class="slds-button slds-button--icon-border" aria-live="assertive" title="Like">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/lightning/icons/utility-sprite/svg/symbols.svg#like"></use>
      </svg>
      <span class="slds-assistive-text">Like</span>
    </button>
  </div>
</div>