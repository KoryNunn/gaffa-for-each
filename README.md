# gaffa-for-each

forEach action for [gaffa](https://github.com/gaffa-tape/gaffa-js)

## Install:

    npm i gaffa-for-each

## Add to gaffa:

    var ForEach = require('gaffa-for-each');

    gaffa.registerConstructor(ForEach);

# API

## Properties (instanceof Gaffa.Property)

### target (get)

The target object who's keys to itterate over.

## Actions

### forEach

The actions to call for each item present in the target.