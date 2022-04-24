<?php

function is_valid_rut($rut)
{
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

    for ($m = 0; $rut != 0; $rut /= 10) {
        $s = ($s + $rut % 10 * (9 - $m++ % 6)) % 11;
    }

    return chr($s ? $s + 47 : 75);
}

function split_full_name($full_name)
{
    $splitted = explode(' ', $full_name);
    $names = array_slice($splitted, 0, -2);
    $last_names = array_slice($splitted, -2);
    return [
        'names' => $names,
        'last_names' => [
            'paternal_name' => $last_names[0],
            'maternal_name' => $last_names[1],
        ]
    ];
}
