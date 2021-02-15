
import FSItemSheet from "./scripts/ItemSheets.js";
Hooks.once("init", function(){
    console.log("test | Initializing LuciditySystem");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("LuciditySystem", itemSheets, {makeDefault: true});
});
