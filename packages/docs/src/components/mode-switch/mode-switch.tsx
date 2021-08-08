import { Component, h, Listen } from '@stencil/core';

import state, { ModeType } from '../../store';

@Component({
  tag: 'mode-switch'
})
export class ModeSwitch {

  @Listen('click', { capture: true })
  switchMode() {
    if (state.pageTheme == ModeType.Light) {
      state.pageTheme = ModeType.Dark;
      document.querySelector('html').classList.add(ModeType.Dark);
      document.querySelector('html').classList.remove(ModeType.Light);
    } else {
      state.pageTheme = ModeType.Light;
      document.querySelector('html').classList.add(ModeType.Light);
      document.querySelector('html').classList.remove(ModeType.Dark);
    }
  }

  render() {
    return (
      <button type="button"
              class="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
              role="switch" aria-checked="false">
        <span class="sr-only">Use setting</span>
        <span aria-hidden="true" class="pointer-events-none absolute bg-white dark:bg-gray-600 w-full h-full rounded-md"></span>
        <span aria-hidden="true"
              class={{
                "bg-gray-200 pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200": true,
                "bg-orange-400": state.pageTheme == ModeType.Light
              }}
        ></span>
        <span aria-hidden="true"
              class={{
                "translate-x-0 pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200": true,
                "translate-x-5": state.pageTheme == ModeType.Light
              }}></span>
      </button>
    );
    /*return (
      <button class="p-1 border-2 border-transparent text-modeswitch-primary rounded-full hover:text-white focus:outline-none focus:text-white bg-modeswitch-secondary transition duration-150 ease-in-out"
              aria-label="Light/Dark mode switch">
        {state.pageTheme == ModeType.Dark
          ? <svg viewBox="0 0 20 20" fill="currentColor" class="sun w-6 h-6">
            <path fill-rule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clip-rule="evenodd"></path>
          </svg>
          : <svg viewBox="0 0 20 20" fill="currentColor" class="moon w-6 h-6">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
        }
      </button>
    );*/
  }
}