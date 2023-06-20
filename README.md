# v42-notify

Preview:

![notify](https://github.com/v42-Josh/v42-notify/assets/135979159/289ebfd3-26cc-42dd-a041-c965e74acc5b)

### Manual

- Change the following line in qb-core/client/functions.lua default line 88: 

```
function QBCore.Functions.Notify(text, texttype, length)
    exports['v42-notify']:notify(text, texttype, length);
end
```

- Replace the QBCore.Functions.Nofitfy() with the code above

```
ensure v42-notify
```

Enable or disable sounds in the config.
