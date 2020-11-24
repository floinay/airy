#Airy Icon 

###Get in started

```
// app.module.ts
@NgModule({
  ...
  imports: [
    ...
    AirIconModule.forRoot({
          pathToStaticIcons: '/assets/icons',
          defaultFormat: 'svg',
          pathToDynamicIconsSprite: '/assets/sprites/sprite.svg'
        }),
    ...
  ],
  ...
})
export class AppModule {
}

// app.component.html
<air-icon  size="lg" name="close"></air-icon>
<air-dynamic-icon name="close" color="primary" size="lg"></air-dynamic-icon>

```
