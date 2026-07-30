# Desplegar en Cloudflare Workers

El build genera un Worker de Cloudflare listo para desplegar (SSR + assets estáticos).

## Manual

```bash
npm install
npm run build
npx wrangler login
npm run deploy
```

El build crea `dist/server/wrangler.json` (con `nodejs_compat` y los assets de
`dist/client`), así que `wrangler deploy` no necesita configuración extra.

## Automático (GitHub Actions)

El workflow `.github/workflows/deploy-cloudflare.yml` despliega en cada push a `main`.
Añade estos secretos en GitHub → Settings → Secrets → Actions:

- `CLOUDFLARE_API_TOKEN` — token con permiso *Workers Scripts: Edit*
- `CLOUDFLARE_ACCOUNT_ID` — ID de tu cuenta de Cloudflare

## Nombre del Worker

Por defecto se genera desde el nombre del paquete (`tanstack_start_ts` →
`tanstack-start-ts`). Cámbialo editando `name` en `package.json` o pasando
`--name madame-ferrat` a `wrangler deploy`.
