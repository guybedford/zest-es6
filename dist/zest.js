define([], function() {
  "use strict";
  var __moduleName = (void 0);
  function render(widget, options, container) {
    return System.import (widget).then(function(widget) {
      container.innerHTML = widget.render(options);
      widget.attach(container);
    });
  }
  return {
    get render() {
      return render;
    },
    __transpiledModule: true
  };
});

//# sourceMappingURL=/zest.js.map