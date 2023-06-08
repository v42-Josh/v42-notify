# v42-notify

Preview:

![notify](https://github.com/v42-Josh/v42-notify/assets/135979159/9ae5ef53-a778-40f9-a12b-d33eb2b4e578)

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
