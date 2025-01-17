<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import IconButton from "../button/IconButton.svelte";
  import CloseIcon from "../icons/CloseIcon.svelte";
  import type { CardVariant } from "./card.types.js";

  export let title: string;
  export let description: string;
  export let variant: CardVariant = "pine";
  export let closable: boolean = false;

  let closed: boolean = false;

  const dispatch = createEventDispatcher();

  function onClose() {
    closed = true;

    dispatch("close");
  }
</script>

{#if !closed}
  <div class="proi-card data-display {variant}">
    {#if title}
      <h2
        class="proi-card-title"
        style:justify-content={closable ? "space-between" : "flex-start"}
      >
        {title}
        {#if closable}
          <IconButton
            icon={CloseIcon}
            variant="ghost"
            on:click={onClose}
          />
        {/if}
      </h2>
    {/if}
    {#if description}
      <div class="proi-card-description">{description}</div>
    {/if}
  </div>
{/if}

<style>
  .proi-card {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background: var(--bright);
    width: 250px;
    gap: 8px;
  }

  .proi-card-title {
    position: relative;
    display: inline-flex;
    font-size: 16px;
    margin: 0;
    padding-right: 24px;
  }

  .proi-card-description {
    font-size: 12px;
  }

  .data-display.pine {
    background: var(--g600);
    color: var(--n0);
  }

  .data-display.flame {
    background: var(--r600);
    color: var(--n0);
  }

  .data-display.neutral {
    background: var(--n800);
    color: var(--n0);
  }

  .data-display.mikado {
    background: var(--y600);
    color: var(--n800);
  }

  .data-display.tufts {
    background: var(--b600);
    color: var(--n0);
  }

  .data-display.vivid {
    background: var(--p600);
    color: var(--n0);
  }

  .data-display.bright {
    background: var(--n0);
    color: var(--n800);
  }

  /* Close button */
  .proi-card-title :global(.proi-icon-button) {
    position: absolute;
    right: 0;
    top: 2px;
  }

  .proi-card-title :global(.proi-icon-button svg path) {
    stroke: var(--n0);
  }

  .data-display.bright :global(.proi-icon-button svg path),
  .data-display.mikado :global(.proi-icon-button svg path) {
    stroke: var(--n800);
  }
</style>
