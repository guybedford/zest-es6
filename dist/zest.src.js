export function render(widget, options, container) {
  return System.import(widget).then(function(widget) {
    container.innerHTML = widget.render(options);
    widget.attach(container);
  });
}