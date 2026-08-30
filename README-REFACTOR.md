# Klinik Reçete Yardımcısı — Modular Architecture

This branch is a clean refactor of the working `main` application.

## Rules

- `main/index.html` is the protected reference implementation.
- No business logic is copied from the old failed `refactor/modular-yapi` branch.
- New modules are organized by responsibility: core state, UI, domain modules, and data.
- Domain data must remain separate from calculation/rendering logic.
- Each migration step must preserve the existing user-facing behavior.

## Target structure

```text
index.html
css/
  app.css
  components.css
  print.css
js/
  app.js
  core/
    state.js
    storage.js
    navigation.js
    utils.js
  data/
    prophylaxis-data.js
    pediatric-drugs.js
    adult-prescriptions.js
    mronj-data.js
    systemic-conditions.js
  modules/
    prophylaxis.js
    pediatric.js
    adult.js
    mronj.js
    systemic.js
    prescription.js
  ui/
    theme.js
    toast.js
    modal.js
```

Migration is intentionally incremental: the reference application is not replaced until the modular implementation is complete and verified.