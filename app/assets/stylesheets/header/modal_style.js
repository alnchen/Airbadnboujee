const modalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(50, 50, 50, 0.75)',
    zIndex          : 10
  },
  content : {
    position        : 'fixed',
    padding         : '20px',
    zIndex          : 11,
    opacity         : 0,
    transition      : 'opacity 0.3s'
  }
};

export default modalStyle;
