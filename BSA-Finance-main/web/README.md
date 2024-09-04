## Getting Started

Primeiro, com o terminal aberto no projeto, é necessário instalar as dependências do projeto pelo npm:
```bash
npm i
```

Depois, a aplicação pode ser iniciada em modo de teste:
```bash
npm run dev
```

Ou em modo de produção:
```bash
# compilar
npm run build
# iniciar
npm start
```

Para acessar a aplicação, abra [http://localhost:3000](http://localhost:3000) em um navegador qualquer.

## Pendências
- Bloquear desconto de título para pessoa física
- Preencher dicionário
- Encontrar a nova url do Banrisul
- Entender erro:
  ```
  TypeError: fetch failed
    at node:internal/deps/undici/undici:12500:13
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
    [cause]: Error: self-signed certificate in certificate chain
        at TLSSocket.onConnectSecure (node:_tls_wrap:1674:34)
        at TLSSocket.emit (node:events:519:28)
        at TLSSocket._finishInit (node:_tls_wrap:1085:8)
        at ssl.onhandshakedone (node:_tls_wrap:871:12)
        at TLSWrap.callbackTrampoline (node:internal/async_hooks:130:17) {
      code: 'SELF_SIGNED_CERT_IN_CHAIN'
    }
  }
  ```
- Testar cada API com mais atenção.

## Inconsistências das APIs
Muitas das APIs ainda apresentam problemas, cada uma com o seu próprio erro. A forma como eles estão sendo tratados não é ideal, mas funciona por enquando.  

Os erros estão sendo documentados em `fetch-results/`, em um arquivo para cada tipo de pesquisa. Em cada um deles tem uma série de endereços, seguidos de "ok" se não tiver erro ou do próprio erro. Em alguns casos, também tem um comentário marcado por # no início da linha.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
