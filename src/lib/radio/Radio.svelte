<script lang="ts">
  import CircleIcon from "../icons/CircleIcon.svelte";

  export let value: number | string | undefined = "";
  export let group: number | string;
  export let disabled: boolean = false;
  export let error: boolean = false;
</script>

<label class="proi-radio-container">
  <input
    tabindex="-1"
    type="radio"
    bind:group
    {value}
    {disabled}
  />
  <div
    class="proi-radio-bullet"
    tabindex={disabled ? -1 : 0}
    role="radio"
    aria-checked={group === value}
    class:checked={group === value}
    class:disabled
    class:error
  >
    {#if group === value}
      <CircleIcon />
    {/if}
  </div>
  {#if $$slots.default}
    <div class="proi-radio-label">
      <slot />
    </div>
  {/if}
</label>

<style>
  .proi-radio-container {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    gap: 8px;
  }

  .proi-radio-container input {
    opacity: 0;
    height: 0;
    width: 0;
  }

  .proi-radio-bullet {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 18px;
    width: 18px;
    border-radius: 50px;
    border: 1px solid var(--n200);
    background: var(--bright);
  }

  .proi-radio-container:hover .proi-radio-bullet {
    background: var(--n0);
  }

  .proi-radio-container:hover .proi-radio-bullet.disabled {
    background: var(--n200);
  }

  .proi-radio-bullet:hover {
    background: var(--n0);
  }

  .proi-radio-bullet.disabled.checked {
    background: var(--n200);
  }

  .proi-radio-bullet.disabled {
    background: var(--n200);
    border: unset;
  }

  .proi-radio-bullet.error {
    border: 2px solid var(--r200);
  }

  .proi-radio-bullet.error.checked {
    background: var(--r200);
  }

  .proi-radio-bullet:focus {
    outline: 2px solid var(--g800);
  }

  .proi-radio-bullet.disabled ~ .proi-radio-label {
    color: var(--n400);
  }

  .proi-radio-bullet.error ~ .proi-radio-label {
    color: var(--r400);
  }

  .proi-radio-label {
    font-size: 16px;
    line-height: 18px;
  }

  /* Icon */
  .proi-radio-bullet.disabled :global(svg rect),
  .proi-radio-bullet.error :global(svg rect) {
    fill: var(--n0);
  }
</style>
