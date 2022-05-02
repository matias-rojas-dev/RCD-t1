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
    $splitted = explode(' ', $full_name);
    $trimmed = array_map('trim', $splitted);
    $filtered = array_values(array_filter($trimmed, 'strlen'));

    switch (count($filtered)) {
        case 1:
            return ['names' => $filtered];
        case 2:
            [$name, $paternal] = $filtered;
            return [
                'names' => [$name],
                'last' => ['paternal' => $paternal],
            ];
        default:
            $names = array_slice($filtered, 0, -2);
            $last = array_slice($filtered, -2);
            return [
                'names' => $names,
                'last' => [
                    'paternal' => $last[0],
                    'maternal' => $last[1],
                ]
            ];
    }
}