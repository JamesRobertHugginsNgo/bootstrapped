/* global document */

import './test.scss';
import setupBootstrap from '../js/bootstrap.js';

const Bootstrap = setupBootstrap('wrapper');

// Popovers

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new Bootstrap.Popover(popoverTriggerEl)); // eslint-disable-line no-unused-vars

// Toasts

const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');

if (toastTrigger) {
  const toastBootstrap = Bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show();
  });
}

// Tooltips

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Bootstrap.Tooltip(tooltipTriggerEl)); // eslint-disable-line no-unused-vars
