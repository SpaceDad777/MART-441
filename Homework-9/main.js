$(document).ready(function() {
    $.fn.capitalizeText = function() {
        this.each(function() {
            var text = $(this).text();
            var capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
            $(this).text(capitalizedText);
        });
        return this;
    };

    // Define the function to fetch and display Pokémon ability
    function fetchPokemonAbility() {
        // Generate random ability ID
        // Adjust the max ID based on the current number of abilities known to the API
        const maxAbilityId = 233;
        const randomAbilityId = Math.floor(Math.random() * maxAbilityId) + 1;

        // Use the random ability ID in the API request
        const apiUrl = `https://pokeapi.co/api/v2/ability/${randomAbilityId}`;
        $.getJSON(apiUrl, function(result) {
            var abilityName = result.name;
            var abilityEffect = result.effect_entries.find(entry => entry.language.name === "en").effect;
            
            // Clear previous content and display new content
            $("#ability-info").empty().append(`<h2>${abilityName}</h2><p>${abilityEffect}</p>`);

            // Capitalize the ability name
            $("#ability-info h2").capitalizeText();
        });
    }

    $("button").click(function() {
        fetchPokemonAbility();
    });
});
