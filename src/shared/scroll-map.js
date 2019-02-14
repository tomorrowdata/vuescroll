export default {
  vertical: {
    size: 'height',
    opsSize: 'width',
    posName: 'top',
    opposName: 'bottom',
    sidePosName: 'right',
    page: 'pageY',
    scroll: 'scrollTop',
    scrollSize: 'scrollHeight',
    offset: 'offsetHeight',
    client: 'clientY',
    axis: 'Y',
    scrollButton: {
      start: 'top',
      end: 'bottom'
    }
  },
  vertical_inv: {
    size: 'height',
    opsSize: 'width',
    posName: 'top',
    opposName: 'bottom',
    sidePosName: 'left',
    page: 'pageY',
    scroll: 'scrollTop',
    scrollSize: 'scrollHeight',
    offset: 'offsetHeight',
    client: 'clientY',
    axis: 'Y',
    scrollButton: {
      start: 'top',
      end: 'bottom'
    }
  },
  horizontal: {
    size: 'width',
    opsSize: 'height',
    posName: 'left',
    opposName: 'right',
    sidePosName: 'bottom',
    page: 'pageX',
    scroll: 'scrollLeft',
    scrollSize: 'scrollWidth',
    offset: 'offsetWidth',
    client: 'clientX',
    axis: 'X',
    scrollButton: {
      start: 'left',
      end: 'right'
    }
  },
  horizontal_inv: {
    size: 'width',
    opsSize: 'height',
    posName: 'left',
    opposName: 'right',
    sidePosName: 'top',
    page: 'pageX',
    scroll: 'scrollLeft',
    scrollSize: 'scrollWidth',
    offset: 'offsetWidth',
    client: 'clientX',
    axis: 'X',
    scrollButton: {
      start: 'left',
      end: 'right'
    }
  }
};
