# Debounce in JavaScript

Use:

```
let Debounce = new Debounce();
let onScroll = Debounce.debounce(() => {
	// something  code...
}, 50);

window.addEventListener('scroll', onScroll);
```
