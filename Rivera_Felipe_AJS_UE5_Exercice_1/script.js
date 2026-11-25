"use strict";
// Nom Prénom : Rivera Alonzo Luis Felipe
// classe : I.FDA-P2A
// Objectif du projet : json
// Date : 25.11.2026

fetch("films.json")
    .then(function (reponse) {
        return reponse.json(); // transforme le texte en tableau d'objets
    })
    .then(function (films) {
        console.log(films); // le tableau est prêt à être utilisé
    });

