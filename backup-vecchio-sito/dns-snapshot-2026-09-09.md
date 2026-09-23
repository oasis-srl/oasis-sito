# Fotografia DNS prima dello spostamento domini

_Rilevata il 9 settembre 2026 interrogando i resolver pubblici (8.8.8.8)._

Serve come riferimento per verificare che lo spostamento di `oasis-srl.it` e `torymussinensis.it`
dal contratto **40509070** (MyWebsite Pack Plus) al **80599414** (Pack Dominio) non alteri nulla.
Dopo lo spostamento, riconfrontare: se un record manca o cambia, va ripristinato a mano.

---

## oasis-srl.it — CRITICO

Nameserver IONOS: `ns1077.ui-dns.de` / `.biz` / `.org` / `.com`

### Sito (GitHub Pages) — se saltano, il sito va offline

| Nome | TTL | Tipo | Valore |
|---|---|---|---|
| oasis-srl.it | 3600 | A | 185.199.108.153 |
| oasis-srl.it | 3600 | A | 185.199.109.153 |
| oasis-srl.it | 3600 | A | 185.199.110.153 |
| oasis-srl.it | 3600 | A | 185.199.111.153 |
| www.oasis-srl.it | 3600 | CNAME | oasis-srl.github.io |

`www` **deve restare un CNAME**: GitHub rifiuta i record A sul sottodominio www.

### Posta (Google Workspace) — se saltano, la posta si perde

| Nome | TTL | Tipo | Priorità | Valore |
|---|---|---|---|---|
| oasis-srl.it | 3600 | MX | 1 | aspmx.l.google.com |
| oasis-srl.it | 3600 | MX | 5 | alt1.aspmx.l.google.com |
| oasis-srl.it | 3600 | MX | 5 | alt2.aspmx.l.google.com |
| oasis-srl.it | 3600 | MX | 10 | alt3.aspmx.l.google.com |
| oasis-srl.it | 3600 | MX | 10 | alt4.aspmx.l.google.com |

### TXT

```
oasis-srl.it.  3600  IN  TXT  "v=spf1 include:_spf.google.com ~all"
oasis-srl.it.  3600  IN  TXT  "google-site-verification=joHtfDBjGNXXrwfqOhknTSerEk9k4h6FWA8Vi1y82ag"
```

Il record `google-site-verification` è quello che tiene valida la proprietà del dominio
in Google Workspace: se sparisce, Google può sospendere il servizio.

### Altro

```
ftp.oasis-srl.it.  3600  IN  A  217.160.0.132   (residuo IONOS, non usato dal sito su GitHub)
```

Nessun record AAAA, nessun CAA.

---

## torymussinensis.it

Nameserver IONOS: `ns1034.ui-dns.de` / `.biz` / `.org` / `.com`

| Nome | TTL | Tipo | Valore |
|---|---|---|---|
| torymussinensis.it | 3600 | A | 217.160.0.244 |
| torymussinensis.it | 3600 | AAAA | 2001:8d8:100f:f000::200 |
| www.torymussinensis.it | 3600 | A | 217.160.0.244 |
| ftp.torymussinensis.it | 3600 | A | 217.160.0.132 |
| torymussinensis.it | 3600 | MX | 10 mx00.ionos.it |
| torymussinensis.it | 3600 | MX | 10 mx01.ionos.it |
| torymussinensis.it | 3600 | TXT | "v=spf1 include:_spf-eu.ionos.com ~all" |
| _dmarc.torymussinensis.it | 3600 | CNAME | dmarc.ionos.it |
| autodiscover.torymussinensis.it | 3600 | CNAME | adsredir.ionos.info |

L'IP `217.160.0.244` è l'infrastruttura IONOS che realizza il reindirizzamento verso
`http://www.oasis-srl.it`. Il reindirizzamento è una funzione del pannello, non un record DNS:
va ricontrollato nel pannello dopo lo spostamento.

---

## Come verificare dopo lo spostamento

Da Terminale sul Mac:

```
dig +short A oasis-srl.it
dig +short CNAME www.oasis-srl.it
dig +short MX oasis-srl.it
dig +short TXT oasis-srl.it
```

Attesi rispettivamente: i quattro IP 185.199.10x.153 · `oasis-srl.github.io.` ·
i cinque MX di Google · le due righe TXT (SPF e google-site-verification).

Prova pratica finale: aprire `https://www.oasis-srl.it` (con ricaricamento forzato ⇧⌘R)
e inviare una mail di prova a `segreteria@oasis-srl.it` da un indirizzo esterno.
