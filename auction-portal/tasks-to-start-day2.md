# Zadania na start

## Dzień 2

### Zadanie #1 | Wszystkie strony w routingu

1.1 Popraw kod strony _Aukcje_ na:

```html
<h2 class="my-4 p-2 border-bottom border-primary">Aukcje</h2>
<section>
	<div class="row">
		<div class="col-12 col-sm-6 col-md-4 col-lg-3"></div>
	</div>
</section>
```

1.2 Dodaj stronę _Promocje_ oraz jej kod:

```html
<h2 class="my-4 p-2 border-bottom border-primary">Aukcje na promocji</h2>
<section>...</section>
```

1.3 Dodaj stronę _Podpowiadamy_ oraz jej kod:

```html
<h2 class="my-4 p-2 border-bottom border-primary">Podpowiadamy</h2>
<section>...</section>
```

---

### Zadanie #2 | Uruchamiamy burger button w [MainMenu](./src/lib/components/MainMenu.svelte)

> 💡 HINT: Pamiętaj o włączeniu symulacji widoku **Mobile** za pomocą _Device toolbar_ w narzędziach developerskich

2.1 Poczytaj o dyrektywach elementowych powiązanych z `class`:
https://svelte.dev/docs/element-directives#class-name

2.2 Możemy z nich wywnioskować, że taki zapis w naszym menu:

```sveltehtml
...
<div class="collapse navbar-collapse" class:show={true}>
  ...
</div>
...
```

spowoduje dodanie klasy `show` do `div.collapse.navbar-collapse`

Z kolei taki zapis:

```sveltehtml
...
<div class="collapse navbar-collapse" class:show={false}>
  ...
</div>
...
```

Zabierze tą klasę z elementu

2.3 Dopisz odpowiednią logikę wraz z uruchomieniem `on:click` na buttonie:

```sveltehtml
...
<button class="navbar-toggler" type="button">
	<span class="navbar-toggler-icon"></span>
</button>
...
```

Tak, aby menu nam się pokazywało i chowało. Kliknięcie `button.navbar-toggler` powoduje pokazanie/schowanie (_toggle_) menu.
