/* global document */

import './test.scss';
import setupRootElement, { Toast } from '../js/bootstrap.js';

const { Popover, Tooltip } = setupRootElement('wrapper');

// Popovers

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new Popover(popoverTriggerEl)); // eslint-disable-line no-unused-vars

// Toasts

const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');

if (toastTrigger) {
	const toastBootstrap = Toast.getOrCreateInstance(toastLiveExample);
	toastTrigger.addEventListener('click', () => {
		toastBootstrap.show();
	});
}

// Tooltips

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl)); // eslint-disable-line no-unused-vars
