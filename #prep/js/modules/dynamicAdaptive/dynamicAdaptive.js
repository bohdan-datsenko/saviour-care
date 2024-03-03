Element.prototype.insertChildAtIndex = function(child, index = 0) {
    if (index >= this.children.length) {
      this.appendChild(child)
    } else {
      this.insertBefore(child, this.children[index])
    }
}

const handleResize = (originalParent, parentId, element, mediaBreakoint, resolution, index = 0) => {
    const currentWidth = window.innerWidth;

    if (mediaBreakoint === 'min') {
        if (innerWidth <= resolution) {
            const parent = document.getElementById(parentId);
            parent.appendChild(element);
        } else {
            originalParent.insertChildAtIndex(element, index)
        }
    } else if ('max') {
        if (currentWidth >= resolution) {
            const parent = document.getElementById(parentId);
            parent.appendChild(element);
        } else {
            originalParent.insertChildAtIndex(element, index)
        }
    }
}

const addDynamicAdaptive = () => {
    const elements = document.querySelectorAll('[data-portal-options]');

    for (let i = 0; i < elements.length; i++) {
        const [ parentId, mediaBreakpoint, resolution, index ] = elements[i].dataset.portalOptions.split(',');
        const originalParent = elements[i].parentElement;
        if (parentId && !mediaBreakpoint && !resolution) {
            const parent = document.getElementById(parentId);
            parent.appendChild(elements[i]);
        } else {
            window.addEventListener('resize', () => handleResize(originalParent, parentId, elements[i], mediaBreakpoint, resolution, index));
            handleResize(originalParent, parentId, elements[i], mediaBreakpoint, resolution, index);
        }
    }
}

export { addDynamicAdaptive };
// todo improve performance