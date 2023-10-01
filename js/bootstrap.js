/* global document */

export { default as Alert } from 'bootstrap/js/src/alert.js';
export { default as Button } from 'bootstrap/js/src/button.js';
export { default as Carousel } from 'bootstrap/js/src/carousel.js';
export { default as Collapse } from 'bootstrap/js/src/collapse.js';
export { default as Dropdown } from 'bootstrap/js/src/dropdown.js';
// export { default as Modal } from './modal.js';
export { default as Offcanvas } from 'bootstrap/js/src/offcanvas.js';
// export { default as Popover } from 'bootstrap/js/src/popover.js';
export { default as ScrollSpy } from 'bootstrap/js/src/scrollspy.js';
export { default as Tab } from 'bootstrap/js/src/tab.js';
export { default as Toast } from 'bootstrap/js/src/toast.js';
// export { default as Tooltip } from 'bootstrap/js/src/tooltip.js';

import setupModal from './modal.js';
import setupPopover from './popover.js';
import setupTooltip from './tooltip.js';

export default function (rootElement) {
	if (typeof rootElement === 'string') {
		const element = document.body.appendChild(document.createElement('div'));
		element.classList.add(rootElement);
		rootElement = element;
	}

	return {
		Modal: setupModal(rootElement),
		Popover: setupPopover(rootElement),
		Tooltip: setupTooltip(rootElement)
	};
}
