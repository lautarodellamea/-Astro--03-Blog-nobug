## Paquetes a instalar y configuraciones

Instalaciones

```bash
npm i sanitize-html markdown-it
npm i -D @types/markdown-it @types/sanitize-html

bun i sanitize-html markdown-it
bun i -d @types/markdown-it @types/sanitize-html
```

```typescript
content: sanitizeHtml(parser.render(body), {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
}),

customData: `<media:content
    type="image/${data.image.format === 'jpg' ? 'jpeg' : 'png'}"
    width="${data.image.width}"
    height="${data.image.height}"
    medium="image"
    url="${site + data.image.src}" />
`,
```


```
xmlns: {
  media: 'http://search.yahoo.com/mrss/',
},
```