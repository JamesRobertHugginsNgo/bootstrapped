/* global document */

import './test.scss';

import setupRootElement, * as BootrapBase from '../js/bootstrap.js';

const Bootrap = Object.assign({}, BootrapBase, setupRootElement('wrapper'));

// Popovers

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new Bootrap.Popover(popoverTriggerEl)); // eslint-disable-line no-unused-vars

// Toasts

const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');

if (toastTrigger) {
	const toastBootstrap = Bootrap.Toast.getOrCreateInstance(toastLiveExample);
	toastTrigger.addEventListener('click', () => {
		toastBootstrap.show();
	});
}

// Tooltips

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Bootrap.Tooltip(tooltipTriggerEl)); // eslint-disable-line no-unused-vars
