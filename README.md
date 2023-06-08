# v42-notify

Preview:
![notify](https://github.com/v42-Josh/v42-notify/assets/135979159/7c644b78-ce29-4a38-b9aa-de8371a498a7)

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

### Support Discord
Make sure to join our discord (https://discord.com/invite/ackuWrBVV3)
