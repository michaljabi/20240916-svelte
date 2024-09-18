# Zadania na start

## Dzień 3

### Zadanie #0 | Dokończenie `AuctionCard`

Kończymy wczorajszy komponent do wyświetlania aukcji i przedstawiamy w formie listy aukcji na stronie [/auctions](<./src/routes/(pages)/auctions/+page.svelte>)

### Zadanie #1 | Preloader

1.1 Do strony [/auctions](<./src/routes/(pages)/auctions/+page.svelte>) w miejsce:

```html
<section>
		<div class="row">
		<!-- tutaj -->
		...
		...
</section>
```

Dodaj kod:

```html
<div class="col-12">
	<div class="alert alert-info">Ładuję aukcje...</div>
</div>
```

1.2 Ten element ma się wyświetlać tylko jeśli aukcje faktycznie się ładują

1.3 Po załadowaniu zapytania `AJAX` element powinien przestać się renderować.

### Zadanie #2 | Pozostałe buttony w [MainMenu](./src/lib/components/MainMenu.svelte)

2.1 dodaj do [MainMenu](./src/lib/components/MainMenu.svelte), w miejsce:

```html
....
	...
	</div>
	<!-- tutaj -->
</nav>
```

Kod pozostałych linków:

```html
<a class="btn btn-primary mx-1 mx-sm-2" to="/add-auction"> Dodaj </a>
<a class="btn btn-secondary" to="/cart"> Koszyk ({0}) </a>
```

2.2 Wepnij te storny w routing, analogiczne do pozostałych i przygotuj odpowiadające im tytuły:

- _Dodaj aukcję_
- _Koszyk_

### Zadanie #3 | Instalacja _3rd party lib_: ikony

3.1 Doinstaluj do projektu następujące paczki:

```shell
@fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/svelte-fontawesome
```

3.2 Potwierdź, że ikony działają umieszczając na [MainMenu](./src/lib/components/MainMenu.svelte) przy linku (wyglądającym jak button) "Dodaj" ikonę:

```typescript
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
```

- użycie na template:

```html
...
<a ...> <FontAwesomeIcon icon="{faPlus}" /> Dodaj </a>
...
```
