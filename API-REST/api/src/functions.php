<?php

function normalize_rut($rut)
{
    return preg_replace('/(\.|\-)/', '', $rut);
}

function is_valid_rut($rut)
{
    $rut = normalize_rut($rut);
    $verifying_digit = substr($rut, -1);
    $rut = substr($rut, 0, -1);
    return get_verifying_digit($rut) === $verifying_digit;
}

// Obtiene el dígito verificador de un RUT. El RUT ingresado no debe contener
// el dígito verificador.
// De https://validarutchile.cl/calcular-rut-en-php.php
function get_verifying_digit($rut)
{
    $s = 1;
    $rut = intval($rut);
    $m = 0;

    for (; $rut != 0; $rut /= 10) {
        $s = ($s + $rut % 10 * (9 - $m++ % 6)) % 11;
    }

    return chr($s ? $s + 47 : 75);
}

function split_full_name($full_name)
{
    $items = explode(' ', $full_name); // Separa el string en espacios.
    $items = array_map('trim', $items); // Elimina los espacios dentro de cada ítem.
    $items = array_values(array_filter($items, "strlen")); // Elimina los ítems vacíos.

    // Si el nombre no tiene apellidos, asignarles null. Así se garantiza que
    // el arreglo siempre tenga al menos 3 elementos.
    if (count($items) < 3) {
        $fill = array_fill(0, 3 - count($items), null);
        $items = array_merge($items, $fill);
    }

    $names = array_slice($items, 0, -2);
    [$paternal, $maternal] = array_slice($items, -2);
    $last = array_filter(compact("paternal", "maternal"), "strlen");

    return array_merge(compact("names"), array_filter(compact("last"), "count"));
}
