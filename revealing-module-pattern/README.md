# Revealing Module Pattern

The Revealing Module Pattern is a slightly improved version of the Module Pattern. It's created by Christian Heilmann.

The Revealing Module Pattern came about as Heilmann was frustrated with the fact that he had to repeat the name of the main object when we wanted to call one public method from another or access public variables. He also disliked the Module pattern's requirement for having to switch to object literal notation for things he wished to make public.

The result was an updated pattern where we would simply define all of our functions and variables in the private scope and return an anonymous object with pointers to the private functionality we wish to reveal as public.

**An example can be found in the example folder.**

The pattern can be used to reveal private functions and properties with a more specific naming scheme.

## Advantages

This pattern allows the syntax of our scripts to be more consistent. It also makes more clear at the end of the module which of our functions and variables may be accessed publicly.

## Disadvantages

A disadvantage is that if a private function refers to a public function, that public function cannot be overridden if a patch is necessary. This is because the private function will continue to refer to the private implementation and the pattern doesn't apply to public members, only to functions.

Public object members which refer to private variables are no-patchable.

As a result, modules created with the Revealing Module Pattern may be more fragile than those created with the original Module Pattern, so care should be taken during usage.
