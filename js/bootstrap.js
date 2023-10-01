/* global document */

// export { default as Alert } from 'bootstrap/js/src/alert.js';
// export { default as Button } from 'bootstrap/js/src/button.js';
// export { default as Carousel } from 'bootstrap/js/src/carousel.js';
// export { default as Collapse } from 'bootstrap/js/src/collapse.js';
// export { default as Dropdown } from 'bootstrap/js/src/dropdown.js';
// export { default as Modal } from './modal.js';
// export { default as Offcanvas } from 'bootstrap/js/src/offcanvas.js';
// export { default as Popover } from 'bootstrap/js/src/popover.js';
// export { default as ScrollSpy } from 'bootstrap/js/src/scrollspy.js';
// export { default as Tab } from 'bootstrap/js/src/tab.js';
// export { default as Toast } from 'bootstrap/js/src/toast.js';
// export { default as Tooltip } from 'bootstrap/js/src/tooltip.js';

import Alert from 'bootstrap/js/src/alert.js';
import Button from 'bootstrap/js/src/button.js';
import Carousel from 'bootstrap/js/src/carousel.js';
import Collapse from 'bootstrap/js/src/collapse.js';
import Dropdown from 'bootstrap/js/src/dropdown.js';
import setupModal from './modal.js';
import Offcanvas from 'bootstrap/js/src/offcanvas.js';
import setupPopover from './popover.js';
import ScrollSpy from 'bootstrap/js/src/scrollspy.js';
import Tab from 'bootstrap/js/src/tab.js';
import Toast from 'bootstrap/js/src/toast.js';
import setupTooltip from './tooltip.js';

export default function (className) {
	const rootElement = document.createElement('div');
	rootElement.classList.add(className);
	document.body.append(rootElement);

	return {
		Alert,
		Button,
		Carousel,
		Collapse,
		Dropdown,
		Modal: setupModal(rootElement),
		Offcanvas,
		Popover: setupPopover(rootElement),
		ScrollSpy,
		Tab,
		Toast,
		Tooltip: setupTooltip(rootElement)
	};
}
