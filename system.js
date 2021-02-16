
import FSItemSheet from "./scripts/ItemSheets.js";
import LucidityCharacterSheet from "./scripts/CharacterSheet.js";
Hooks.once("init", function(){
    console.log("test | Initializing LuciditySystem");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("LuciditySystem", FSItemSheet, {makeDefault: true});
    
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("LuciditySystem", LucidityCharacterSheet, {
        makeDefault: true,
        label: "LuciditySystem.CharacterSheet"
      });
    
      preloadHandlebarsTemplates();
});
